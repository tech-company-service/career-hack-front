import React from 'react'
import { Intern } from '@/app/types/intern'
import { formatDate } from '@/app/utils/formatDate'

interface InternDetailProps {
  internDetail: Intern | undefined
}

const InternDetailTable: React.FC<InternDetailProps> = ({ internDetail }) => {
  return (
    <div className='container px-4'>
      <div className='grid gap-8 p-4 grid-cols-1 md:grid-cols-2'>
        <div className='mb-4'>
          <div className='pt-3 flex items-center'>
            <div className='text-sm mr-4 min-w-[70px]'>期間</div>
            <div className='text-lg font-bold'>
              {formatDate(internDetail?.started_at)} 〜 {formatDate(internDetail?.ended_at)}
            </div>
          </div>
        </div>
        <div className='mb-4'>
          <div className='pt-3 flex items-center'>
            <div className='text-sm mr-4 min-w-[70px]'>応募締切</div>
            <div className='text-lg font-bold'>
              {internDetail?.entry_deadline_date ? internDetail?.entry_deadline_date : '不明'}
            </div>
          </div>
        </div>
        <div className='mb-4'>
          <div className='pt-3 flex items-center'>
            <div className='text-sm mr-4 min-w-[70px]'>報酬</div>
            <div className='text-lg font-bold'>{internDetail?.reward}</div>
          </div>
        </div>
        <div className='mb-4'>
          <div className='pt-3 flex items-center'>
            <div className='text-sm mr-4 min-w-[70px]'>募集人数</div>
            <div className='text-lg font-bold'>{internDetail?.capacity}</div>
          </div>
        </div>
        <div className='mb-4'>
          <div className='pt-3 flex items-center'>
            <div className='text-sm mr-4 min-w-[70px]'>場所</div>
            <div className='text-lg font-bold'>{internDetail?.site}</div>
          </div>
        </div>
        <div className='mb-4'>
          <div className='pt-3 flex items-center'>
            <div className='text-sm mr-4 min-w-[70px]'>開催形態</div>
            <div className='text-lg font-bold'>{internDetail?.style_type}</div>
          </div>
        </div>
        <div className='mb-4'>
          <div className='pt-3 flex items-center'>
            <div className='text-sm mr-4 min-w-[70px]'>募集形態</div>
            <div className='text-lg font-bold'>{internDetail?.recruitment_type}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InternDetailTable
