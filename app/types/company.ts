import { CompanyAbout } from "./company_about";
import { CompanyBenefit } from "./company_benefits";
import { CompanyService } from "./company_service";
import { JobOffer } from "./job_offer";

export type Company = {
  id: number;
  hash_id: string;
  name: string;
  description: string;
  address: string;
  average_salary: number;
  initial_salary: number;
  recruit_url: string;
}

export type CompanyDetail = {
  id: number;
  hash_id: string;
  name: string;
  description: string;
  address: string;
  average_salary: number;
  initial_salary: number;
  employees: number;
  recruit_url: string;
  job_offers: JobOffer[];
  company_services: CompanyService[];
  company_benefits: CompanyBenefit[];
  company_abouts: CompanyAbout[];
}