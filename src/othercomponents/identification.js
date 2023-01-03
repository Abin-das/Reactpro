
import React from 'react'
import '../othercomponents/identification.css'

import Secondpage from '../Secondpage/second'
import { useNavigate} from  'react-router-dom';


const Identification = () => {
  const navigate = useNavigate();
  return (
    <div>
        <div className='tittle'>Select Identification type</div>
    <div className='stepper1'><h3 className='txt'>Adhar Id</h3> </div>
    <div className='stepper2'><h3 className='txt'>Student Id</h3> </div>
    <div className='stepper3'><h3 className='txt'>Passport</h3> </div>
    <div className='stepper4'><h3 className='txt'>Birth Certificate</h3> </div>
    <div className='enter'>Enter your Adhar no</div>
    <input type="text" placeholder='123 4566' className='type'></input>
    <button className='next'><h3 className='nexttxt' onClick={()=>{navigate ('/content')}}>Next</h3></button>
    <div className='hai'></div>
    </div>
  )
}

export default Identification