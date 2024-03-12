'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import ReactModal from 'react-modal'
import { CompanyService } from '@/app/types/company_service'

interface ServiceCardProps {
  service: CompanyService
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const descriptionBorderLength: number = 20

  const formatDate = (dateString: string): string | undefined => {
    switch (dateString?.length) {
      case undefined:
        return '-';
      case 0:
        return '-';
      case null:
        return '-';
      case 4:
        return `${dateString}年`;
      case 6:
        const yearMonthMatch = dateString.match(/(\d{4})(\d{2})/);
        if (!yearMonthMatch) throw new Error('Invalid date format for year and month');
        return `${yearMonthMatch[1]}年${parseInt(yearMonthMatch[2], 10)}月`;
      case 8:
        const yearMonthDayMatch = dateString.match(/(\d{4})(\d{2})(\d{2})/);
        if (!yearMonthDayMatch) throw new Error('Invalid date format for year, month, and day');
        return `${yearMonthDayMatch[1]}年${parseInt(yearMonthDayMatch[2], 10)}月${parseInt(yearMonthDayMatch[3], 10)}日`;
    }
  };

  const truncateDescription = (description: string): string => {
    return description.length > descriptionBorderLength
      ? `${description.substring(0, descriptionBorderLength)}...`
      : description
  }

  return (
    <>
      <div 
        className="bg-white rounded-lg overflow-hidden border border-black mb-6 cursor-pointer hover:bg-black hover:border-white hover:text-white transition duration-300 ease-in-out" 
        onClick={() => setIsModalOpen(true)}
      >
        <div className="p-6">
          <div className="font-medium text-lg mb-2">{service.name}</div>
          <p className=" text-base mb-4 min-h-[50px]">{truncateDescription(service.description)}</p>
          <div className="text-sm">ローンチ日 {formatDate(service.launched_at)}</div>
        </div>
      </div>


      <ReactModal
        isOpen={isModalOpen}
        ariaHideApp={false}
        onRequestClose={() => setIsModalOpen(false)}
        className='outline-none rounded-lg p-6 bg-white shadow-xl m-4 overflow-auto max-w-xl max-h-full fixed inset-0 h-full w-full sm:w-auto sm:h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        overlayClassName='fixed inset-0 bg-black bg-opacity-50'
      >
        <h2 className='font-medium text-xl mb-8 underline'>
          {service.name}
          <a href={service.url} target="_blank" rel="noopener noreferrer" className="float-right" style={{ cursor: 'pointer' }}>
            <Image src="/new_open.svg" alt="Icon" width={25} height={25} />
          </a>
        </h2>
        <p className='text-gray-700 text-lg mb-4 leading-loose'>{service.description}</p>
        <p className='text-gray-600 text-sm'>ローンチ日 {formatDate(service.launched_at)}</p>
        <button
          onClick={() => setIsModalOpen(false)}
          className='mt-4 bg-black text-white font-bold py-2 px-4 rounded'
        >
          閉じる
        </button>
      </ReactModal>
    </>
  )
}

export default ServiceCard
