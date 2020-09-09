import React from 'react'
import './ImageForm.css'


const ImageForm =({ change,buttonSubmit })=>{
    return(
        <div className='outer'>
            <p className='f2'>
                {'Magic Brain'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={change} />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={buttonSubmit} >Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageForm;