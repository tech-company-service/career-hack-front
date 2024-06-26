import Link from 'next/link'
import React from 'react'

const CompanyInterns = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-4'>
      <h1 className='text-4xl font-bold text-gray-800'>Coming Soon...</h1>
      <Link href='/company' passHref>
        <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300'>
          企業一覧へ戻る
        </button>
      </Link>
    </div>
  )
}

export default CompanyInterns
