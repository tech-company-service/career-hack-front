import React from 'react'
import styles from '@/app/styles.module.css'
import { CompanyProject } from '@/app/types/company_project'

interface CompanyProjectsTagProps {
  companyProjects: CompanyProject[]
}

const CompanyProjectsTag: React.FC<CompanyProjectsTagProps> = ({ companyProjects }) => {
  return (
    <div className={`flex overflow-x-scroll whitespace-nowrap -m-1 ${styles.scroll}`}>
      {companyProjects?.map((project) => (
        <span
          key={project.id}
          className='m-1 border border-black text-black bg-white text-xs font-semibold px-2.5 py-0.5 rounded hover:bg-black hover:border-white hover:text-white transition duration-300 ease-in-out'
        >
          {project.name}
        </span>
      ))}
    </div>
  )
}

export default CompanyProjectsTag
