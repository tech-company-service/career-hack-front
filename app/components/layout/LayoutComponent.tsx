import { Header } from './Header'
import { Footer } from './Footer'

export default function LayoutComponent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header className="" />
        <main className="flex-grow pt-24 p-6">
          {children}
        </main>
        <Footer className="mt-4" />
      </div>
    </>
  )
}