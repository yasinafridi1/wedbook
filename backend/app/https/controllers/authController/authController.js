const Joi = require("joi");
const bcrypt = require("bcrypt");
const User = require("../../../models/User");
const userDto = require("../../../../Services/userDto");
const JwtService = require("../../../../Services/JwtServices");
const RefreshModel = require("../../../models/RefreshModel");

function authController() {
    return {
        login: async (req, res) => {
            console.log(req.body);
            // validate the req
            const loginSchema = Joi.object({
                email: Joi.string().email().required(),
                password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{5,15}$')).required()
            })

            const { error } = loginSchema.validate(req.body);
            if (error) {
                return res.status(422).json({ message: error.message });
            }

            // check useremail
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(422).json({ message: 'Email or password incorrect' });
            }

            // check user password using bcrypt
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(403).json({ message: 'Email or password incorrect' });
            }
            const { accessToken, refreshToken } = JwtService.generateToken({ _id: user._id, role: user.role });


            const { result } = await JwtService.storeRefreshToken(refreshToken, user._id);
            if (!result) {
                return res.status(500).json({ message: 'Internal server error.Cannot store refresh token' });
            }

            // generate access token and refresh token
            res.cookie('refreshtoken', refreshToken, {
                maxAge: 1000 * 60 * 60 * 24 * 30, //2 hour
                httpOnly: true
            })

            res.cookie('accesstoken', accessToken, {
                maxAge: 1000 * 60 * 60, // 1 hour
                httpOnly: true
            })

            const userdata = userDto(user);
            return res.json({ userdata });

        },
        register: async (req, res) => {
            // validate req using joi
            const registerSchema = Joi.object({
                fullName: Joi.string().required(),
                email: Joi.string().email().required(),
                password: Joi.string()
                    .pattern(new RegExp('^[a-zA-Z0-9]{5,15}$'))
                    .required()
                    .min(8)
                    .max(15)
                    .messages({
                        "string.pattern.base": "Password must include alphabets and numbers",
                        "string.min": "minimum 8 character required",
                        "string.max": "maximum 15 characters allowed"
                    }),
                confirmPassword: Joi.ref('password'),
                role: Joi.string().required(),
                address: Joi.string().required()
            })
            const { error } = registerSchema.validate(req.body);
            if (error) {
                return res.status(422).json({ message: error.message });
            }

            // check if email has not register yet
            const { fullName, email, password, confirmPassword, address, role } = req.body;
            const user = await User.exists({ email });
            if (user) {
                return res.status(409).json({ message: 'Email already registered' });
            }

            if (!fullName || !address || !email || !password || !confirmPassword || !role) {
                return res.status(422).json({ message: 'All fields are required' });
            }
            if (password !== confirmPassword) {
                return res.status(422).json({ message: 'Password not matching' });
            }


            try {
                // hash password
                const hashedPassword = await bcrypt.hash(password, 12);

                // register user
                const newUser = new User({
                    fullName,
                    email,
                    password: hashedPassword,
                    role,
                    address
                });

                const isSaved = await newUser.save();
                if (!isSaved) {
                    return res.status(500).json({ message: 'Internal server error.Could not register user' });
                }
            } catch (error) {
                return res.status(500).json({ message: 'Internal server error.Please try again' })
            }

            return res.json({ message: 'All ok' });

        },
        logout: (req, res) => {
            // Remove refresh token from database
            // remove access and refresh token from cookies
        }
    }
}

module.exports = authController;