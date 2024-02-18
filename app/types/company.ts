import { CompanyAbout } from '@/app/types/company_about'
import { CompanyArticle } from '@/app/types/company_article'
import { CompanyBenefit } from '@/app/types/company_benefits'
import { CompanyProject } from '@/app/types/company_project'
import { CompanyService } from '@/app/types/company_service'
import { JobOffer } from '@/app/types/job_offer'

export type Company = {
  id: number
  hash_id: string
  name: string
  description: string
  address: string
  average_salary: number
  initial_salary: number
  recruit_url: string
  is_logo_mail_approved: boolean
  avator: string
  company_projects: CompanyProject[]
}

export type CompanyDetail = {
  id: number
  hash_id: string
  name: string
  description: string
  address: string
  average_salary: number
  initial_salary: number
  employees: number
  recruit_url: string
  detailed_initial_salary: string
  is_logo_mail_approved: boolean
  avator: string
  job_offers: JobOffer[]
  company_services: CompanyService[]
  company_benefits: CompanyBenefit[]
  company_abouts: CompanyAbout[]
  company_articles: CompanyArticle[]
  company_projects?: CompanyProject[]
}
