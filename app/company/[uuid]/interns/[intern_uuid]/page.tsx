'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'
import BorderLine from '@/app/components/BorderLine'
import LoadingSpinner from '@/app/components/LoadingSpinner'
import InternDetailTable from '@/app/components/company/intern/internDetailTable'
import useCompanyDetail from '@/app/hooks/company/useCompanyDetail'
import useInternDetail from '@/app/hooks/company/useInternDetail'
import useWindowSize from '@/app/hooks/layout/useWindowSize'
import { truncateDescription } from '@/app/utils/truncateDescription'

const InternDetail = () => {
  const params = useParams();
  const hashId = params.uuid.toString();
  const internHashId = params.intern_uuid.toString();
  const { detailLoading, detailError } = useCompanyDetail(hashId);
  const {
    internDetail,
    internDetailLoading,
    internDetailError,
  } = useInternDetail(hashId, internHashId);
  const [width, height] = useWindowSize();
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState<boolean>(false);
  const contentBorderLength: number = 100;

  if (detailLoading || internDetailLoading) {
    return <LoadingSpinner />;
  }
  if (detailError) return <p>Error: {detailError.message}</p>;

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <div className='w-full max-w-6xl mx-auto'>
        <div className='bg-white shadow-lg rounded-lg p-6 mb-4'>
          <div className='flex justify-between items-center ml-4 mb-3'>
            <div className='flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0 md:space-x-4'>
              <div className='text-xl md:text-4xl font-bold mr-8'>{internDetail?.title}</div>
              <a
                href={internDetail?.link}
                target="_blank"
                rel="noopener noreferrer"
                className='px-4 py-2 bg-black text-white rounded-lg hover:bg-white hover:text-black hover:border hover:border-black transition-colors'
              >
                エントリーはこちら
              </a>
            </div>
          </div>
          <div className='mb-4 mt-8'>
            <InternDetailTable internDetail={internDetail} />
          </div>
          <BorderLine />
          <div className="flex mx-4 my-10">
            <div className="flex-1 bg-gray-100 p-4 rounded-md whitespace-pre-wrap">
              <p className="text-2xl mb-6 font-bold">扱う技術</p>
              <div>{internDetail?.technologies}</div>
            </div>
            <div className="flex-1 bg-gray-100 p-4 rounded-md whitespace-pre-wrap mx-4">
              <p className="text-2xl mb-6 font-bold">必須要件</p>
              <div>{internDetail?.necessary_requirements}</div>
            </div>
            <div className="flex-1 bg-gray-100 p-4 rounded-md whitespace-pre-wrap">
              <p className="text-2xl mb-6 font-bold">歓迎要件</p>
              <div>{internDetail?.welcome_requirements === null ? '記載なし' : internDetail?.welcome_requirements}</div>
            </div>
          </div>
          <BorderLine />
          <div
            className='mx-4 my-10 bg-gray-100 p-4 rounded-md whitespace-pre-wrap'
            onClick={toggleDescription}
          >
            <p className='text-2xl mb-6 font-bold'>インターンについて</p>
            {isDescriptionExpanded
              ? internDetail?.description
              : internDetail?.description
                ? truncateDescription(internDetail.description, contentBorderLength)
                : ''}
            <div className='text-gray-400 cursor-pointer mt-8' onClick={toggleDescription}>
              {isDescriptionExpanded ? '折り畳む' : 'もっと見る'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternDetail;
