import React from 'react'
import { CompanyArticle } from '@/app/types/company_article'

interface CompanyArticleProps {
  articles: CompanyArticle[] | null
  loading: boolean
  error: Error | null
}

const CompanyArticleList: React.FC<CompanyArticleProps> = ({ articles }) => {
  return (
    <div>
      {articles?.map((article, index) => (
        <a
          href={article.url}
          key={index}
          target='_blank'
          rel='noopener noreferrer'
          className='block mb-8 hover:bg-gray-100 p-4 rounded-lg'
        >
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/4'>
              <img
                src={
                  article.ogp_image_url
                    ? article.ogp_image_url
                    : '/images/default_article_image.png'
                }
                alt={article.title}
                className='w-full h-auto rounded-md'
              />
            </div>
            <div className='md:w-3/4 md:pl-4'>
              <div className='text-xl font-bold mb-2'>{article.title}</div>
              <p className='text-gray-700'>{article.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

export default CompanyArticleList
