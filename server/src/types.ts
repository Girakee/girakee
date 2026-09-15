export interface JobRecord {
  id: string
  title: string
  location: string
  type: string
  summary: string
  responsibilities: string[]
  requirements: string[]
  applySubject?: string | null
  about?: string | null
  overview?: string | null
  portfolio?: string[] | null
  commercial?: string[] | null
  howToApply?: string | null
  active: number
  sortOrder: number
  createdAt: string
  updatedAt: string
}

export interface PaymentOptionRecord {
  id: string
  slug: string
  label: string
  description: string
  enabled: number
  sortOrder: number
  createdAt: string
  updatedAt: string
}

export interface SubmissionRecord {
  id: string
  formType: string
  payload: Record<string, unknown>
  resumePath?: string | null
  resumeOriginalName?: string | null
  emailSent: number
  createdAt: string
}
