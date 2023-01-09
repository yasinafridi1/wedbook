import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../redux/action/authActions';
import { loginUser } from '../../https';
import "./auth.css";
import Loader from '../Loading/Loader';

const Login = () => {
    const [isloading, setloading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    function showPassword(e) {
        const passwordInput = document.querySelector('.password');
        if (e.target.checked) {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    }


    async function handleSubmit(e) {
        e.preventDefault();
        setloading(true);
        try {
            const { data } = await loginUser({ email, password });
            if (data) {
                window.localStorage.setItem('user', JSON.stringify(data.userdata));
                dispatch(auth(data.userdata));
                setloading(false);
                navigate('/');
            }
        } catch (err) {
            console.log(err);
            if (err.message === 'Network Error') {
                setError('Internet connection problem')
                setloading(false);
            }
            if (err.response.data) {
                setError(err.response.data.message);
                setloading(false);

            }
        }
    }

    return (
        <>
            <Loader display={!isloading} />
            <div className='formSection'>
                <form className='w-3/4 sm:w-1/2 relative' onSubmit={(e) => { handleSubmit(e) }}>
                    <div className='py-6 text-center border-b border-gray-500 bg-primary mb-2 w-full'>
                        <h1 className='text-secular  text-2xl text-white'>Login to WedBook</h1>
                    </div>
                    <div className='w-11/12 mx-auto'>
                        <p className='text-center mt-3 font-semibold text-red-500'>{error ? error : ''}</p>
                        <input type="email" value={email}
                            onChange={(e) => setEmail(e.target.value)} name='email' className="border border-gray-400 w-full rounded-lg px-3 py-1 mt-4 mb-5 text-base outline-none" placeholder='Gmail' required />
                        <input type="password" value={password}
                            onChange={(e) => setPassword(e.target.value)} className="border border-gray-400 w-full rounded-lg px-3 py-1 mt-4 text-base outline-none password" placeholder='Password' required />
                    </div>
                    <div className='px-4 md:px-10 mt-1 flex justify-between items-center flex-col xsm:flex-row mb-3 xsm:mb-0'>
                        <div className='flex items-center'>
                            <input type="checkbox" onChange={(e) => { showPassword(e) }} /> <small className='pl-0.5 text-sm'>Show password</small>
                        </div>
                        <div>
                            <Link to='/recover-password' className='text-sm font-semibold text-pink-600 transition-all ease-in-out duration-500 hover:text-blue-900'>Forget password ?</Link>
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center mt-4 flex-col'>
                        <button type='submit' className='border border-teal-700 px-8 py-0.5 text-lg text-teal-600 bg-white font-semibold transition-all ease-in-out duration-700 hover:text-white hover:bg-teal-500'>Login</button>
                        <Link to='/signup' className='mt-2 pt-2 text-sm font-semibold text-teal-500 transition-all ease-in-out duration-500 hover:text-blue-900'>Don't have account ?</Link>
                        <Link to='/' className='pb-5 pt-1 text-sm font-semibold text-teal-500 transition-all ease-in-out duration-500 hover:text-blue-900'>Back to home</Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
