'use client'

import { useState } from 'react'

const Tabs: React.FC = () => {
  const tabs = ['企業', 'ランキング', 'インターン']
  const [activeTab, setActiveTab] = useState(tabs[0])

  return (
    <div className='flex space-x-4'>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`py-2 px-4 ${
            activeTab === tab
              ? 'border-b-2 border-black font-bold'
              : 'border-b-2 border-transparent'
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

export default Tabs
