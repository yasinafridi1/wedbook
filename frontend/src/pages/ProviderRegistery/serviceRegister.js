import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loading/Loader';
import CheckList from './CheckList';
import Input from './Input';

const ServiceRegister = () => {
    const [isloading, setloading] = useState(false);
    const [imageForm, setImageForm] = useState(false);
    const [Error, setError] = useState('');
    return (
        <>
            <Loader display={!isloading} />
            <section className='w-screen h-screen bg-gray-300 grid place-items-center'>
                {
                    imageForm
                        ?
                        <form className='w-1/2 h-max pb-8 relative my-4 bg-white flex justify-start items-center flex-col'>
                            <div className='py-2 text-center border-b border-gray-500 bg-primary w-full'>
                                <h1 className='text-secular  text-xl text-white'>Register your service with WedBook</h1>
                            </div>
                            <div>
                                <p className='text-center my-2 font-semibold text-red-500'>{Error}</p>
                            </div>
                            <div className='w-full pl-12 mt-4'>
                                <label htmlFor="coverpic" className='font-semibold'>Upload a cover photo</label>
                                <input type="file" id='coverpic' className="border border-gray-400 w-[80%] rounded-lg px-3 py-0.5  text-base outline-none " required />
                            </div>

                            <div className='w-full pl-12 mt-12'>
                                <label htmlFor="gallery" className='font-semibold'>Upload Gallery Pictures (maximum 30 picture)</label>
                                <input type="file" id='gallery' className="border border-gray-400 w-[80%] rounded-lg px-3 py-0.5  text-base outline-none " multiple />
                            </div>

                            <div className='w-full mt-12 flex justify-evenly items-center'>
                                <button onClick={() => { setImageForm(false) }} className='border border-teal-700 px-8 py-0.5 text-lg text-teal-600 bg-white font-semibold transition-all ease-in-out duration-700 hover:text-white hover:bg-teal-500'>Back</button>
                                <button type='submit' className='border border-teal-700 px-8 py-0.5 text-lg text-teal-600 bg-white font-semibold transition-all ease-in-out duration-700 hover:text-white hover:bg-teal-500'>Register</button>
                            </div>
                        </form>
                        :
                        <form className='w-3/4 h-max pb-4 relative my-4 bg-white'>
                            <div className='py-2 text-center border-b border-gray-500 bg-primary w-full'>
                                <h1 className='text-secular  text-xl text-white'>Register your service with WedBook</h1>
                            </div>
                            <div>
                                <p className='text-center my-2 font-semibold text-red-500'>{Error}</p>
                            </div>
                            <div className='flex justify-center items-start mx-auto w-full'>
                                <div className='w-2/3 text-center'>
                                    <input type="text" className="border border-gray-400 w-[80%] rounded-lg px-3 py-1 mt-3 text-base outline-none " placeholder="Service Name" required />
                                    <input type="text" className="border border-gray-400 w-[80%] rounded-lg px-3 py-1 mt-3 text-base outline-none " placeholder="Office Number" required />
                                    <input type="text" className="border border-gray-400 w-[80%] rounded-lg px-3 py-1 mt-3 text-base outline-none " placeholder="Enter Address" required />
                                    <input type="text" className="border border-gray-400 w-[80%] rounded-lg px-3 py-1 mt-3 text-base outline-none " placeholder="Enter City" required />
                                    <input type="text" className="border border-gray-400 w-[80%] rounded-lg px-3 py-1 mt-3 text-base outline-none " placeholder="Enter Province" required />
                                    <input type="text" className="border border-gray-400 w-[80%] rounded-lg px-3 py-1 mt-3 text-base outline-none " placeholder="Total Waiters" required />

                                    <select className='w-[80%] mt-3 py-1.5 border border-gray-400 rounded-lg'>
                                        <option value="default" disabled hidden>
                                            Place Available
                                        </option>
                                        <option value="100">upto 100 people</option>
                                        <option value="200">upto 200 people</option>
                                        <option value="300">upto 300 people</option>
                                        <option value="400">upto 400 people</option>
                                        <option value="500">upto 500 people</option>
                                        <option value="600">upto 600 people</option>
                                        <option value="700">upto 700 people</option>
                                        <option value="800">upto 800 people</option>
                                    </select>
                                </div>
                                <div className='w-1/3 text-center'>
                                    <div className="list-header text-left mt-3">
                                        <h5 className='text-secular text-xl'>Check service you provide</h5>
                                    </div>
                                    <div className='mt-3'>
                                        <div className='flex items-center mt-1 ml-4'>
                                            <input type="checkbox" className='w-[13px] h-[13px]' /> <small className='pl-3 text-base font-semibold'>AC</small>
                                        </div>
                                        <div className='flex items-center mt-1 ml-4'>
                                            <input type="checkbox" className='w-[13px] h-[13px]' /> <small className='pl-3 text-base font-semibold'>Food</small>
                                        </div>
                                        <div className='flex items-center mt-1 ml-4'>
                                            <input type="checkbox" className='w-[13px] h-[13px]' /> <small className='pl-3 text-base font-semibold'>Catering</small>
                                        </div>
                                        <div className='flex items-center mt-1 ml-4'>
                                            <input type="checkbox" className='w-[13px] h-[13px]' /> <small className='pl-3 text-base font-semibold'>Stage Decoration</small>
                                        </div>
                                        <div className='flex items-center mt-1 ml-4'>
                                            <input type="checkbox" className='w-[13px] h-[13px]' /> <small className='pl-3 text-base font-semibold'>Dj</small>
                                        </div>
                                        <div className='flex items-center mt-1 ml-4'>
                                            <input type="checkbox" className='w-[13px] h-[13px]' /> <small className='pl-3 text-base font-semibold'>Photographer</small>
                                        </div>
                                        <div className='flex items-center mt-1 ml-4'>
                                            <input type="checkbox" className='w-[13px] h-[13px]' /> <small className='pl-3 text-base font-semibold'>Heater</small>
                                        </div>
                                        <div className='flex items-center mt-1 ml-4'>
                                            <input type="checkbox" className='w-[13px] h-[13px]' /> <small className='pl-3 text-base font-semibold'>Seperate Section</small>
                                        </div>
                                        <div className='flex items-center mt-1 ml-4'>
                                            <input type="checkbox" className='w-[13px] h-[13px]' /> <small className='pl-3 text-base font-semibold'>Washrooms</small>
                                        </div>
                                        <div className='flex items-center mt-1 ml-4'>
                                            <input type="checkbox" className='w-[13px] h-[13px]' /> <small className='pl-3 text-base font-semibold'>Parking</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full mt-12 flex justify-center items-center'>
                                <button onClick={() => { setImageForm(true) }} className='border border-teal-700 px-8 py-0.5 text-lg text-teal-600 bg-white font-semibold transition-all ease-in-out duration-700 hover:text-white hover:bg-teal-500'>Next</button>
                            </div>
                            <div className='w-full mt-3 flex justify-center items-center'>
                                <Link to="/" className='text-sm font-semibold text-teal-500 hover:text-blue-800 transition-all duration-300 ease-in'>Back to Homepage</Link>
                            </div>

                        </form>
                }
            </section>
        </>
    );
}

export default ServiceRegister;
