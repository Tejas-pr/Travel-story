import React from 'react'
import ErrorSvg from '../../assets/404-Error.svg'

const Error = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-1/2 max-w-md bg-white p-4 rounded-lg shadow-lg'>
        <img src={ErrorSvg} alt="Error Logo" />
      </div>
    </div>
  )
}

export default Error
