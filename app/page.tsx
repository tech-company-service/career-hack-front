import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <div className='font-sans'>
      <Head>
        <title>Tech Interview Content Platform</title>
        <meta name='description' content='Tech Interview Content Platform for Every Engineer' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <section className='mt-10 py-36 px-6 sm:py-48 md:py-56 lg:py-60 xl:py-80 2xl:py-96 bg-black rounded'>
          <div className='text-center mx-auto'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white pb-20'>
              エンジニア就活のコスパを最適化しませんか？
            </h1>
            <p className='text-sm md:text-lg lg:text-xl mt-4 text-white pb-20'>
              Bridgeは学生が効率的にエンジニア就活を行うための統合プラットフォームです
            </p>
          </div>
          <div className='flex justify-center mt-4 mr-5'>
            <Link href='/company' className='bg-white text-black font-bold py-2 px-6 rounded-md'>
              いますぐ無料ではじめる
            </Link>
          </div>
        </section>

        <section className='mt-10 py-8 bg-white rounded'>
          <div className='mx-6 mb-8'>
            <h2 className='sm:text-xl md:text-4xl font-bold text-gray-800'> サービス</h2>
          </div>
          <div className='max-w-6xl mx-auto px-4'>
            <div className='flex flex-wrap justify-center items-stretch -mx-4 text-center'>
              <div className='w-full md:w-1/3 px-6 mb-8'>
                <div className='flex flex-col p-6 border rounded-lg shadow-lg min-h-[350px] h-full'>
                  <div className='self-start'>
                    <Image src='/search_engine.svg' alt='特徴1' width={150} height={150} />
                  </div>
                  <div className='mt-auto'>
                    <h3 className='font-semibold text-lg mb-2'>企業情報</h3>
                    <p className='text-gray-600'>
                      就活時に必要な企業情報を掲載。給料情報や運営サービス、募集職種などを掲載しています。
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/3 px-4 mb-8'>
                <div className='flex flex-col p-6 border rounded-lg shadow-lg min-h-[350px] h-full'>
                  <div className='self-start'>
                    <Image src='/intern.svg' alt='特徴2' width={150} height={150} />
                  </div>
                  <div className='mt-auto'>
                    <h3 className='font-semibold text-lg mb-2'>インターン情報</h3>
                    <p className='text-gray-600 mb-4'>
                      人気企業が開催するインターン情報を掲載。インターン情報を通じて企業の雰囲気を知ることができます。
                    </p>
                    <p className='text-gray-500'>※ 2024年4月ごろに公開予定です。</p>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/3 px-4 mb-8'>
                <div className='flex flex-col p-6 border rounded-lg shadow-lg min-h-[350px] h-full'>
                  <div className='self-start'>
                    <Image src='/interview.svg' alt='特徴3' width={150} height={150} />
                  </div>
                  <div className='mt-auto'>
                    <h3 className='font-semibold text-lg mb-2'>内定体験談</h3>
                    <p className='text-gray-600 mb-4'>
                      有名メガベンチャーから内定を勝ち取った学生の体験談を掲載。内定体験談を通じて学生の内定獲得のヒントを得ることができます。
                    </p>
                    <p className='text-gray-500'>※ 2024年5月ごろに公開予定です。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-12'>
          <div className='max-w-4xl mx-auto'></div>
        </section>
      </main>
    </div>
  )
}

export default Home
