const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8787'

export interface ApiJob {
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
}

export interface ApiPaymentOption {
  id: string
  slug: string
  label: string
  description: string
  enabled: number
  sortOrder: number
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, init)
  const data = await response.json().catch(() => ({}))
  if (!response.ok) {
    throw new Error(data.error || `Request failed (${response.status})`)
  }
  return data as T
}

export async function fetchJobs(): Promise<ApiJob[]> {
  const data = await request<{ jobs: ApiJob[] }>('/api/jobs')
  return data.jobs
}

export async function fetchPaymentOptions(): Promise<{
  paymentsEnabled: boolean
  paymentUrl: string | null
  options: ApiPaymentOption[]
}> {
  return request('/api/payment-options')
}

export async function submitContact(payload: Record<string, string>) {
  return request<{ ok: boolean; emailSent: boolean; adminEmailSent: boolean; candidateEmailSent: boolean }>(
    '/api/submissions/contact',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    },
  )
}

export async function submitCallback(payload: Record<string, string>) {
  return request<{ ok: boolean; emailSent: boolean; adminEmailSent: boolean; candidateEmailSent: boolean }>(
    '/api/submissions/callback',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    },
  )
}

export async function submitProgramForm(kind: 'internship' | 'ojt', formData: FormData) {
  return request<{
    ok: boolean
    emailSent: boolean
    adminEmailSent: boolean
    candidateEmailSent: boolean
    redirectToPayment?: string | null
  }>(`/api/submissions/${kind}`, {
    method: 'POST',
    body: formData,
  })
}

export async function submitCareerApplication(formData: FormData) {
  return request<{ ok: boolean; emailSent: boolean; adminEmailSent: boolean; candidateEmailSent: boolean }>(
    '/api/submissions/career-application',
    {
      method: 'POST',
      body: formData,
    },
  )
}

export { API_URL }
