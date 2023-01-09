import React from 'react';
import "./loader.css";


const Loader = ({ display }) => {
    return (
        <section className={`${display ? 'd-none' : 'w-screen h-screen fixed top-0 left-0 flex justify-center items-center'}`} id='loader-section'>
            <div className='flex justify-center items-center relative'>
                <div className="LoaderRing"></div>
                <div className="LoaderRing"></div>
                <div className="LoaderRing"></div>
                <h1 className='text-white text-xl font-bold'>Loading</h1>
            </div>
        </section>
    );
}

export default Loader;
