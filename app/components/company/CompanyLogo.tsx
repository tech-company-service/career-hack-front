import React from 'react'
import Image from 'next/image'

interface CompanyLogoProps {
  avator?: string
  is_logo_mail_approved?: boolean
  height: number
  width: number
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({ avator, is_logo_mail_approved, height, width }) => {
  const logoImagePath = is_logo_mail_approved && avator ? avator : '/company_logo_none.svg';

  return (
    <div className="inline-block p-1 border border-gray-200 rounded-lg">
      <Image src={logoImagePath} alt="企業ロゴ" width={height} height={width} />
    </div>
  )
}

export default CompanyLogo
