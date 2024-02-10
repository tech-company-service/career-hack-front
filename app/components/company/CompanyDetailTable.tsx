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
      top: `${rect.top + window.scrollY + rect.height}px`,
      left: `${rect.left + window.scrollX}px`,
      transform: 'translate(0, 10px)',
      maxWidth: '90%',
      zIndex: 50,
    })
  }

  return (
    <div className='container px-4'>
      <div className='grid gap-8 p-4 md:grid-cols-2'>
        {/* 左側のカラム */}
        <div>
          {/* 新卒年収 */}
          <div className='mb-4'>
            <div className='flex items-baseline gap-4'>
              {' '}
              {/* gap-1 を gap-4 に変更 */}
              <div className='text-sm font-semibold'>新卒年収</div>
              <span className='text-3xl font-bold'>{companyDetail?.initial_salary}</span>
              <span className='text-lg'>万円</span>
            </div>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={() => setIsModalOpen(false)}
              className='flex items-center cursor-pointer'
            >
              <img src='/question_mark.svg' alt='Info' className='ml-2 w-4 h-4' />
            </div>
          </div>

          {/* 平均年収 */}
          <div className='mb-4'>
            <div className='flex items-baseline gap-4'>
              {' '}
              {/* gap-1 を gap-4 に変更 */}
              <div className='text-sm font-semibold'>平均年収</div>
              <span className='text-3xl font-bold'>{companyDetail?.average_salary}</span>
              <span className='text-lg'>万円</span>
            </div>
            <div className='text-sm'>※ 有価証券報告書を参照</div>
          </div>
        </div>

        {/* 右側のカラム */}
        <div>
          {/* 住所 */}
          <div className='mb-4 flex items-center'>
            <div className='text-sm font-semibold mr-4'>住所</div> {/* mr-1 を mr-4 に変更 */}
            <div>{companyDetail?.address}</div>
          </div>

          {/* 従業員数 */}
          <div className='flex items-center'>
            <div className='text-sm font-semibold mr-4'>従業員数</div> {/* mr-1 を mr-4 に変更 */}
            <div>{companyDetail?.employees}人</div>
          </div>
        </div>
      </div>

      {/* モーダル */}
      <CustomModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        content={<p>{companyDetail?.detailed_initial_salary}</p>}
        style={modalStyle}
      />
    </div>
  )
}

export default CompanyDetailTable
