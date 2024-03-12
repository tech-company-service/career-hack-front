'use client'

import React, { useState } from 'react'
import CustomModal from '../CustomModal'
import { CompanyDetail } from '@/app/types/company'

interface CompanyDetailProps {
  companyDetail: CompanyDetail | null
}

const CompanyDetailTable: React.FC<CompanyDetailProps> = ({ companyDetail }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [modalStyle, setModalStyle] = useState<React.CSSProperties>({})

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsModalOpen(true)
    const rect = event.currentTarget.getBoundingClientRect()
    setModalStyle({
      position: 'fixed',
      top: `${rect.top}px`,
      left: `${rect.left + window.scrollX}px`,
      transform: 'translate(0, 10px)',
      maxWidth: '90%',
      zIndex: 50,
    })
  }

  return (
    <div className='container px-4'>
      <div className='grid gap-8 p-4 md:grid-cols-2'>
        <div>
          <div className='mb-4'>
            <div className='flex items-baseline gap-4'>
              <div className='text-sm font-semibold'>新卒年収</div>
              <span className='text-3xl font-bold'>
                {companyDetail?.initial_salary === 0 ? '不明' : companyDetail?.initial_salary}
              </span>
              {companyDetail?.initial_salary !== 0 && <span className='text-lg'>万円</span>}
              <span
                onMouseEnter={handleMouseEnter}
                onMouseLeave={() => setIsModalOpen(false)}
                className='flex items-center cursor-pointer text-red'
              >
                <img src='/question_mark.svg' alt='Info' className='ml-2 w-4 h-4' />
              </span>
            </div>
          </div>
          <div className='mb-4'>
            <div className='flex items-baseline gap-4'>
              <div className='text-sm font-semibold'>平均年収</div>
              <span className='text-3xl font-bold'>
                {companyDetail?.average_salary === 0 ? '不明' : companyDetail?.average_salary}
              </span>
              {companyDetail?.average_salary !== 0 && <span className='text-lg'>万円</span>}
            </div>
            <div className='text-sm'>※ 有価証券報告書を参照</div>
          </div>
        </div>
        <div className=''>
          <div className='pt-3 mb-4 flex items-center'>
            <div className='text-sm font-semibold mr-4  min-w-[70px]'>住所</div>
            <div>{companyDetail?.address}</div>
          </div>
          <div className='pt-8 flex items-center'>
            <div className='text-sm font-semibold mr-4 min-w-[70px]'>従業員数</div>
            <div>{companyDetail?.employees}人</div>
          </div>
        </div>
      </div>
      <CustomModal
        isOpen={isModalOpen}
        ariaHideApp={false}
        onRequestClose={() => setIsModalOpen(false)}
        content={<p>{companyDetail?.detailed_initial_salary}</p>}
        style={modalStyle}
      />
    </div>
  )
}

export default CompanyDetailTable
