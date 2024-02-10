import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: '企業詳細 | hogehoge',
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default Layout
