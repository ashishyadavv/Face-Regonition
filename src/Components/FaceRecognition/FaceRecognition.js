import React from 'react'
//import FaceRecognition from './FaceRecognition.css'


const FaceRecognition = ({imageurl}) =>{
    return(
        <div className='center ma'>
            <div className='container absolute mt2'>
            <img  alt= ''  src={imageurl} width='200px' height='200px'/>
            </div>
           
            
        </div>
    )
}

export default FaceRecognition;