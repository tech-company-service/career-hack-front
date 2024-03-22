import Link from 'next/link'
import React from 'react'

const Intern = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-4'>
      <h1 className='text-4xl font-bold text-gray-800'>Coming Soon...</h1>
      <Link href='/company' passHref>
        <button className='px-4 py-2 bg-black text-white rounded transition duration-300'>
          企業一覧へ戻る
        </button>
      </Link>
    </div>
  )
}

export default Intern
