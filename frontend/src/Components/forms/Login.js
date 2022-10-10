import React from 'react';
import './form.css';

const Login = () => {
    return (
        <div className='loginSection'>
            <div className="wrapper">
                <div className="triangle">
                </div>
                <form>
                    <h1>Login Here</h1>
                    <div className="inputs">
                        <input type="text" placeholder="Enter email" />
                        <input type="password" placeholder="Enter password" />
                    </div>
                    <div className="btn-div">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
