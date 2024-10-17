import React from 'react'
import "./Pyramid.css"
const Pyramid = () => {
  return (
    <div className="pyramid-loader">
  <div className="pyramid-wrapper">
    <span className="side side1"/>
    <span className="side side2"/>
    <span className="side side3"/>
    <span className="side side4"/>
    <span className="shadow"/>
  </div>
  <p className='text-[#4251f88b] flex justify-center'>Loading...</p> 
</div>
  )
}

export default Pyramid