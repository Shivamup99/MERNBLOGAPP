import {  LinearProgress } from '@mui/material'
import React from 'react'

const Spiner = () => {
  return (
    <div className='loading-spinnerContainer'>
        <div className="loading-spinner">
            <LinearProgress/>
        </div>
    
    </div>
  )
}

export default Spiner