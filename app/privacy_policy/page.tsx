// pages/privacy_policy.tsx
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import BorderLine from '@/app/components/BorderLine'
import PageTitle from '@/app/components/PageTitle'

const PrivacyPolicy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <div className='flex flex-col items-center justify-center p-8'>
        <div className='w-full max-w-4xl mx-auto'>
          <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
            <div className='mb-8'>
              <PageTitle title='プライバシーポリシー' />
            </div>
            <h2 className='text-3xl'>1. 個人情報の収集と利用目的</h2>
            <BorderLine />
            <p className='my-6 text-lg'>当サイトでは、以下の目的で個人情報を収集・利用します。</p>
            <ul className='mb-4 list-disc pl-8'>
              <li>会員登録</li>
              <li>メール配信</li>
              <li>お問い合わせ対応</li>
              <li>データ修正依頼対応</li>
            </ul>
            <h2 className='text-3xl mt-6'>2. 個人情報の第三者への開示・提供の禁止</h2>
            <BorderLine />
            <p className='my-6 text-lg'>
              法令に基づく場合や、人の生命、身体または財産の保護のためなど特定の場合を除き、第三者への開示はありません。
            </p>
            <h2 className='text-3xl mt-6'>3. 個人情報の安全対策</h2>
            <BorderLine />
            <p className='my-6 text-lg'>
              当サイトは、個人情報の正確性及び安全性確保のために、セキュリティ対策を講じています。
            </p>
            <h2 className='text-3xl mt-6'>4. ご本人の照会</h2>
            <BorderLine />
            <p className='my-6 text-lg'>
              お客様が個人情報の照会・修正・削除を希望される場合、ご本人確認の上、対応いたします。
            </p>
            <h2 className='text-3xl mt-6'>5. 法令、規範の遵守と見直し</h2>
            <BorderLine />
            <p className='my-6 text-lg'>
              当サイトは、保有する個人情報に関して適用される法令、その他の規範を遵守し、本ポリシーの内容を適宜見直し、改善に努めます。
            </p>
            <h2 className='text-3xl mt-6'>6. プライバシーポリシーの変更</h2>
            <BorderLine />
            <p className='my-6 text-lg'>
              当サイトは、必要に応じてプライバシーポリシーの内容を変更することがあります。変更後のプライバシーポリシーについては、当サイトに掲載したときから効力を生じるものとします。
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy
