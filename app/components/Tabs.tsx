'use client'

import Link from 'next/link'
import { useState } from 'react'

const Tabs: React.FC = () => {
  interface Tab {
    name: string
    path: string
  }

  const tabs: Tab[] = [
    { name: '企業', path: '/company' },
    { name: 'ランキング', path: '/ranking' },
    { name: 'インターン', path: '/intern' },
  ]

  const [activeTab, setActiveTab] = useState<Tab>(tabs[0])

  return (
    <div className='overflow-x-auto whitespace-nowrap'>
      <div className='flex space-x-1'>
        {tabs.map((tab, index) => (
          <Link href={tab.path} key={index}>
            <button
              className={`inline-block py-2 px-4 text-xs sm:text-sm md:text-base rounded ${
                activeTab.path === tab.path
                  ? 'bg-black text-white font-extrabold'
                  : 'bg-transparent text-black hover:bg-black hover:text-white'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Tabs
