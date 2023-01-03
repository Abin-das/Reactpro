import React from 'react'
import './reg.css'
const registration = () => {
  return (
   <div className='bg'>
 <h2 className='reg' centered >Registration</h2>,
    <div className='Stepper'>
      <img className='tickimg' src='./Ellipse 2.png'></img>  <span className='ticktxt'> Identification</span>
        <span className='ticktxt'><img className='tickimg' src='./Ellipse 2.png'></img> Vaccine Center</span>
        <span className='ticktxt'><img className='tickimg' src='./Ellipse 2.png'></img> Appointment</span>
    </div>
   </div>
  
  )
}

export default registration