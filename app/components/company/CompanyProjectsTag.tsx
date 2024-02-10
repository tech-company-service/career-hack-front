import React from 'react'
import { CompanyProject } from '@/app/types/company_project'

interface CompanyProjectsTagProps {
  companyProjects: CompanyProject[]
}

const CompanyProjectsTag: React.FC<CompanyProjectsTagProps> = ({ companyProjects }) => {
  return (
    <div className='flex flex-wrap -m-1'>
      {companyProjects.map((project) => (
        <span
          key={project.id}
          className='m-1 bg-blue-200 text-grey-700 text-xs font-semibold px-2.5 py-0.5 rounded'
        >
          {project.name}
        </span>
      ))}
    </div>
  )
}

export default CompanyProjectsTag
