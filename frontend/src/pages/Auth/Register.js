import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../../https';
import "./auth.css";

const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [role, setRole] = useState('');
    const [values, setValues] = useState({
        fullName: '',
        address: '',
        password: '',
        confirmPassword: '',
        email: '',
    });
    function handleInput(e) {
        const { name, value } = e.target;
        setValues((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }
    function showPassword(e) {
        const passwordInput = document.querySelectorAll('.password');
        if (e.target.checked) {
            passwordInput.forEach(input => {
                input.type = 'text';
            })
        } else {
            passwordInput.forEach(input => {
                input.type = 'password';
            })
        }
    }
    async function handleSubmit(e) {
        e.preventDefault();
        if (values.password !== values.confirmPassword) {
            setError('** Password not matching **');
        } else {
            try {
                const formdata = new FormData();
                formdata.append('fullName', values.fullName);
                formdata.append('address', values.address);
                formdata.append('password', values.password);
                formdata.append('email', values.email);
                formdata.append('confirmPassword', values.confirmPassword);
                formdata.append('role', role);
                const response = await createUser(formdata);
                navigate('/signin');
            } catch (error) {
                if (error.response?.status == 409 || error.response?.status == 422) {
                    setError("** " + error.response.data.message + ' **');
                } else {
                    setError('** Something went wrong **');
                }
            }
        }
    }
    return (
        <div className='formSection'>
            <form className='w-3/4 sm:w-1/2' onSubmit={handleSubmit}>
                <div className='py-6 text-center bg-primary mb-2 w-full'>
                    <h1 className='header-text text-secular text-2xl text-white'>Register Here</h1>
                </div>
                <div className='w-11/12 mx-auto pb-4'>
                    <p className='text-center font-semibold text-red-500'>{error ? error : ''}</p>
                    <input value={values.fullName} name="fullName" onChange={handleInput} type="text" className="border border-gray-400 w-full rounded-lg px-3 py-1 mt-5 text-base outline-none " placeholder='Full name' required />
                    <input value={values.email} name="email" onChange={handleInput} type="email" className="border border-gray-400 w-full rounded-lg px-3 py-1 mt-5 text-base outline-none " placeholder='Gmail' required />
                    <input value={values.address} name="address" onChange={handleInput} type="text" className="border border-gray-400 w-full rounded-lg px-3 py-1 mt-5 text-base outline-none " placeholder='Town,City,Province' required />
                    <input value={values.password} name="password" onChange={handleInput} type="password" className="border border-gray-400 w-full rounded-lg px-3 py-1 mt-5 text-base outline-none password " placeholder='Password' required />
                    <input value={values.confirmPassword} name="confirmPassword" onChange={handleInput} type="password" className="border border-gray-400 w-full rounded-lg px-3 py-1 mt-5 text-base outline-none password " placeholder='Confirm password' required />
                </div>
                <div className='flex justify-center items-center'>
                    <div className='flex justify-center items-center'>
                        <input type="radio" onChange={() => { setRole('customer') }} name='role' required /> <small className='pl-0.5 text-sm font-semibold mr-8'>User</small>
                    </div>
                    <div className='flex justify-center items-center'>
                        <input type="radio" onChange={() => { setRole('vendor') }} name='role' required /> <small className='pl-0.5 font-semibold text-sm'>Vendor</small>
                    </div>
                </div>
                <div className='flex items-center pl-8'>
                    <input type="checkbox" onChange={(e) => { showPassword(e) }} /> <small className='pl-0.5 text-sm'>Show password</small>
                </div>
                <div className='w-full flex justify-center items-center mt-4 flex-col'>
                    <button type='submit' className='border border-teal-700 px-8 py-0.5 text-lg text-teal-600 bg-white font-semibold transition-all ease-in-out duration-700 hover:text-white hover:bg-teal-500'>Register</button>
                    <Link to='/signin' className=' pt-2 text-sm font-semibold text-teal-500 transition-all ease-in-out duration-500 hover:text-blue-800'>Already have account ?</Link>
                    <Link to='/' className='pb-5 pt-1 text-sm font-semibold text-teal-500 transition-all ease-in-out duration-500 hover:text-blue-800'>Back to home</Link>

                </div>
            </form>
        </div>
    );
}

export default Register;
