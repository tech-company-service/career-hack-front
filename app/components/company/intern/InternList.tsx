import Link from 'next/link'
import React from 'react'
import InternCard from '@/app/components/InternCard'
import { Intern } from '@/app/types/intern'

interface InternProps {
  interns: Intern[] | undefined
  loading: boolean
  error: Error | null
  hashId: string | null
}

const InternList: React.FC<InternProps> = ({ interns, hashId }) => {
  if (!interns || interns.length === 0) {
    return <div>インターン情報がありません</div>
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {interns.slice(0, 8).map((intern, index) => (
        <Link href={`/company/${hashId}/interns/${intern.hash_id}`} key={intern.intern_id}  >
          <InternCard key={index} intern={intern} />
        </Link>
      ))}
    </div>
  )
}

export default InternList
