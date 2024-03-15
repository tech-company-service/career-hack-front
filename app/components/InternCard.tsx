'use client'

import React, { useState } from 'react'
import { Intern } from '@/app/types/intern'

interface InternProps {
  intern: Intern
}

const InternCard: React.FC<InternProps> = ({ intern }) => {
  return (
    <>
      <div
        className='bg-white rounded-lg overflow-hidden border border-black mb-6 cursor-pointer hover:bg-black hover:border-white hover:text-white transition duration-300 ease-in-out'
      >
        <div className='p-6'>
          <div className='font-medium text-xl mb-2'>{intern.title}</div>
          <p className='text-base mb-4'></p>
        </div>
      </div>
    </>
  )
}

export default InternCard
