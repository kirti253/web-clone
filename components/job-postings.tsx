'use client'

import { useState } from 'react'

interface JobPosting {
  id: number
  title: string
  employment: string
  description: string
}

const jobs: JobPosting[] = [
  {
    id: 1,
    title: 'SAP PP Consultant',
    employment: 'Full time.',
    description: 'Savekey Technology is looking for 7-8 Years of SAP PP Hands on Experience with minimum 2-3 SAP implementation project. Having Good Knowledge on Integration with CO,MM,PS,FI,SD,PM. Should have Good Troubleshooting & analytical skills. Should be able to give training to end user & support on documentation & other task assigned'
  },
  {
    id: 2,
    title: 'SAP FICO Consultant',
    employment: 'Full time.',
    description: 'Savekey Technology is looking for minimum 5 Years of SAP FI Hands on Experience with at least 2-3 SAP implementation Project Experience. Excellent knowledge on Accounts Receivable, JV, Asset Accounting, TDS, GST. Should be aware of Accounts Payable, Accounts Receivable, JV, Asset Accounting, TDS, GST. Should be able to give training to end user & support on documentation & other task assigned'
  },
  {
    id: 3,
    title: 'SAP HR Consultant',
    employment: 'Full time.',
    description: 'Savekey Technology is looking for minimum 7-8 Years of SAP HCM Hands on Experience at least 2-3 SAP implementation Project Experience. Exposure to Indian client specifically PSU would be an added advantage. Should have Farley good experience in Master Data (Employee, Payroll, Time). Should be having good knowledge of India Payroll, Time, Organization management, Travel. SAP Certification will be additional advantage'
  },
  {
    id: 4,
    title: 'SAP SD Consultant',
    employment: 'Full time.',
    description: 'Savekey Technology is looking for minimum 7-8 Years of SAP SD Hands on Experience with minimum 2-3 SAP implementation project experience. Should have Fairly good experience in Order Management, Pricing, Taxation, Logistic Execution, Billing. Must have good exposure to implement GST solution in India along with the other logistics execution requirements in India. Should be able to give training to end user & support on documentation & other task assigned'
  }
]

export default function JobPostings() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null)

  return (
    <div className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-primary mb-6 sm:mb-8">Job Posting</h2>
        
        <div className="space-y-4 sm:space-y-6">
          {jobs.map((job) => (
            <div key={job.id} className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {/* Job title box - alternating colors */}
              <div className={`w-full sm:w-56 md:w-64 px-4 sm:px-6 py-4 sm:py-6 rounded text-white font-semibold flex-shrink-0 ${
                job.id % 2 === 1 ? 'bg-brand-navy' : 'bg-brand-primary'
              }`}>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">{job.title}</h3>
                <p className="text-xs sm:text-sm opacity-90">{job.employment}</p>
              </div>

              {/* Job description */}
              <div className="flex-1 flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-6">
                <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                  {job.description}
                </p>
                <button className="bg-brand-primary text-white px-4 sm:px-6 py-2 rounded hover:bg-brand-navy transition whitespace-nowrap text-xs sm:text-sm md:text-base flex-shrink-0 w-full sm:w-auto">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
