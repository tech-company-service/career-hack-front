import Link from 'next/link'
import React from 'react'

export const Footer: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <footer className='bg-gray-200 p-4'>
      <div className='max-w-screen-lg mx-auto flex justify-between'>
        <Link href='/terms' legacyBehavior>
          <a className='text-black text-sm'>利用規約</a>
        </Link>
        <Link href='/privacy_policy' legacyBehavior>
          <a className='text-black text-sm'>プライバシーポリシー</a>
        </Link>
        <Link href='/about' legacyBehavior>
          <a className='text-black text-sm'>運営者情報</a>
        </Link>
      </div>
    </footer>
  )
}
