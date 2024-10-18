import React from "react";
import "./Cube.css"
const Cube = () => {
    return (
        <div className="flex flex-col justify-center items-center">
        <div className="barloadercontainer">
            <div className="loader__bar" />
            <div className="loader__bar" />
            <div className="loader__bar" />
            <div className="loader__bar" />
            <div className="loader__bar" />
            <div className="loader__ball" />
        </div>
        <p className='text-[#4251f88b] flex justify-center'>Loading...</p>
        </div>
    );
};

export default Cube;
