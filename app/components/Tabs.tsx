'use client'

import Link from 'next/link';
import { useState } from 'react';

const Tabs: React.FC = () => {
  interface Tab {
    name: string;
    path: string;
  }

  const tabs: Tab[] = [
    { name: '企業', path: '/company' },
    { name: 'ランキング', path: '/ranking' },
    { name: 'インターン', path: '/intern' }
  ];

  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);

  return (
    <div className="flex space-x-4">
      {tabs.map((tab, index) => (
        <Link href={tab.path} key={index}>
          <button
            className={`py-2 px-4 ${activeTab.path === tab.path ? 'border-b-2 border-black font-bold' : 'border-b-2 border-transparent'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.name}
          </button>
        </Link>
      ))}
    </div>
  )
}

export default Tabs
