import React from 'react'
import loader from '../assets/images/spinner.svg'

const Loader = () => {
  return (
    <div className='loader-container'>
        <img src={loader} alt="loader" />
    </div>
  )
}

export default Loader