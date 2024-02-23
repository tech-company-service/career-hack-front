import React from 'react'
import styles from '@/app/styles.module.css'
import { CompanyProject } from '@/app/types/company_project'

interface CompanyProjectsTagProps {
  companyProjects: CompanyProject[]
}

const CompanyProjectsTag: React.FC<CompanyProjectsTagProps> = ({ companyProjects }) => {
  return (
    <div className={`flex overflow-x-scroll whitespace-nowrap -m-1 ${styles.scroll}`} >
      {companyProjects?.map((project) => (
        <span
          key={project.id}
          className='m-1 border border-blue-400 text-blue-400 bg-white text-xs font-semibold px-2.5 py-0.5 rounded hover:bg-blue-400 hover:border-blue-400 hover:text-white transition duration-300 ease-in-out'
        >
          {project.name}
        </span>
      ))}
    </div>
  )
}

export default CompanyProjectsTag
