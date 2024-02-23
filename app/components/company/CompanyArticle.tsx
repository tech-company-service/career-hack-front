import React from 'react';
import { CompanyArticle } from '@/app/types/company_article'

type CompanyArticleProps = {
  articles: CompanyArticle[];
};

const CompanyArticle: React.FC<CompanyArticleProps> = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {articles.map((article, index) => (
        <a href={article.url} key={index} target="_blank" rel="noopener noreferrer" className="block hover:bg-gray-100 p-4 rounded-lg shadow-sm">
          <img 
            src={
              article.ogp_image_url ? article.ogp_image_url : "/images/default_article_image.png"
            } 
            alt={article.title} 
            className="w-full h-48 object-cover rounded-md mb-4"/>
          <div>
            <div className="text-lg font-bold mb-2">{article.title}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default CompanyArticle;