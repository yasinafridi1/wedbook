import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonOutline from '../../Components/Buttons/ButtonOutline';

const Modal = ({ display, clickedModal }) => {
    const navigate = useNavigate();

    function nextClicked() {
        navigate('/register-services');
    }
    return (
        <section className={`${display ? 'd-none' : 'w-screen h-screen fixed top-0 left-0 flex justify-center items-center'}`} style={{ backgroundColor: "rgba(229, 229, 229, 0.795)", zIndex: "999" }}>
            <div className='flex justify-center items-center flex-col relative w-1/2 bg-white'>
                <div>
                    <h1 className='text-secular text-secular text-5xl text-red-400 my-3'>ALERT</h1>
                </div>
                <div className='w-full pl-4 pr-4'>
                    <h4 className="text-xl font-semibold mb-3">
                        Steps to become Provider
                    </h4>
                    <li className='font-semibold ml-4 mt-1'>If you are not register with wedbook, register yourself as a vendor</li>
                    <li className='font-semibold ml-4 mt-1'>After registration you have to login first to become a provider</li>
                    <li className='font-semibold ml-4 mt-1'>Welcome you can become a provider.Click next and register your services</li>
                </div>
                <div className='pb-6 mt-3 flex justify-evenly items-center w-1/2'>
                    <ButtonOutline clickEvent={clickedModal} text={"Back"} />
                    <ButtonOutline clickEvent={nextClicked} text={"Next"} />
                </div>
            </div>
        </section>
    );
}

export default Modal;
