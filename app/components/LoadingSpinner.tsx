import React from 'react'

const LoadingSpinner: React.FC = () => {
  return (
    <div className='fixed inset-0 flex justify-center items-center'>
      <div className='animate-spin-slow h-12 w-12 border-4 border-t-transparent border-black rounded-full'></div>
    </div>
  )
}

export default LoadingSpinner
