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
    description: 'Adore is looking for 7-8 Years of SAP PP Hands on Experience with minimum 2-3 SAP implementation project. Having Good Knowledge on Integration with CO,MM,PS,FI,SD,PM. Should have Good Troubleshooting & analytical skills. Should be able to give training to end user & support on documentation & other task assigned'
  },
  {
    id: 2,
    title: 'SAP FICO Consultant',
    employment: 'Full time.',
    description: 'Adore is looking for minimum 5 Years of SAP FI Hands on Experience with at least 2-3 SAP implementation Project Experience. Excellent knowledge on Accounts Receivable, JV, Asset Accounting, TDS, GST. Should be aware of Accounts Payable, Accounts Receivable, JV, Asset Accounting, TDS, GST. Should be able to give training to end user & support on documentation & other task assigned'
  },
  {
    id: 3,
    title: 'SAP HR Consultant',
    employment: 'Full time.',
    description: 'Adore is looking for minimum 7-8 Years of SAP HCM Hands on Experience at least 2-3 SAP implementation Project Experience. Exposure to Indian client specifically PSU would be an added advantage. Should have Farley good experience in Master Data (Employee, Payroll, Time). Should be having good knowledge of India Payroll, Time, Organization management, Travel. SAP Certification will be additional advantage'
  },
  {
    id: 4,
    title: 'SAP SD Consultant',
    employment: 'Full time.',
    description: 'Adore is looking for minimum 7-8 Years of SAP SD Hands on Experience with minimum 2-3 SAP implementation project experience. Should have Fairly good experience in Order Management, Pricing, Taxation, Logistic Execution, Billing. Must have good exposure to implement GST solution in India along with the other logistics execution requirements in India. Should be able to give training to end user & support on documentation & other task assigned'
  }
]

export default function JobPostings() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null)

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-red-600 mb-2">Job Posting</h2>
        
        <div className="space-y-6">
          {jobs.map((job) => (
            <div key={job.id} className="flex gap-6">
              {/* Job title box - alternating colors */}
              <div className={`w-64 px-6 py-6 rounded text-white font-semibold ${
                job.id % 2 === 1 ? 'bg-blue-700' : 'bg-cyan-500'
              }`}>
                <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                <p className="text-sm opacity-90">{job.employment}</p>
              </div>

              {/* Job description */}
              <div className="flex-1 flex justify-between items-start gap-6">
                <p className="text-gray-700 text-base leading-relaxed">
                  {job.description}
                </p>
                <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition whitespace-nowrap">
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
