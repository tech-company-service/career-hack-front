import Head from 'next/head'
import Image from 'next/image'

const Home = () => {
  return (
    <div className="font-sans">
      <Head>
        <title>Tech Interview Content Platform</title>
        <meta name="description" content="Tech Interview Content Platform for Every Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        {/* Header content here: logo, navigation, etc. */}
      </header>

      <main>
        {/* Hero section */}
        <section className="text-center py-20 bg-gray-100">
          <h1 className="text-5xl font-bold">Tech Company Database for Every Student Engineer</h1>
          <p className="text-xl text-gray-600 mt-4">hogehogeは学生が効率的にエンジニア就活を行いための統合プラットフォームです。</p>
          {/* ...other hero content */}
        </section>

        <section className="py-10 bg-white">
          <div className="mx-6 mb-8">
            <h2 className="sm:text-xl md:text-4xl font-semibold text-gray-800">hogehogeについて</h2>
          </div>
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap justify-center items-stretch -mx-4 text-center">
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="flex flex-col p-6 border rounded-lg shadow-lg min-h-[350px] h-full">
                  <div className="self-start">
                    <Image src="/search_engine.svg" alt="特徴1" width={150} height={150} />
                  </div>
                  <div className="mt-auto">
                    <h3 className="font-semibold text-lg mb-2">企業情報</h3>
                    <p className="text-gray-600">
                      就活時に必要な企業情報を掲載しています。給料情報や運営サービス、募集職種などを掲載しています。
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="flex flex-col p-6 border rounded-lg shadow-lg min-h-[350px] h-full">
                  <div className="self-start">
                    <Image src="/search_engine.svg" alt="特徴2" width={150} height={150} />
                  </div>
                  <div className="mt-auto">
                    <h3 className="font-semibold text-lg mb-2">インターン情報</h3>
                    <p className="text-gray-600 mb-4">
                      人気企業が開催するインターン情報を掲載しています。インターン情報を通じて企業の雰囲気を知ることができます。
                    </p>
                    <p className="text-gray-500">
                      ※ 2024年4月ごろに公開予定です。
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="flex flex-col p-6 border rounded-lg shadow-lg min-h-[350px] h-full">
                  <div className="self-start">
                    <Image src="/search_engine.svg" alt="特徴3" width={150} height={150} />
                  </div>
                  <div className="mt-auto">
                    <h3 className="font-semibold text-lg mb-2">内定体験談</h3>
                    <p className="text-gray-600 mb-4">
                      有名メガベンチャーから内定を勝ち取った学生の体験談を掲載しています。内定体験談を通じて学生の内定獲得のヒントを得ることができます。
                    </p>
                    <p className="text-gray-500">
                      ※ 2024年4月ごろに公開予定です。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Features section */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto">
            {/* Feature blocks here */}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home