import { Footer } from './Footer'
import { Header } from './Header'

export default function LayoutComponent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Header className='' />
        <main className='flex-grow pt-24 p-2 md:p-6 md:mt-16'>{children}</main>
        <Footer className='mt-4' />
      </div>
    </>
  )
}
