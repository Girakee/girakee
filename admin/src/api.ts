function resolveApiUrl() {
  const configured = import.meta.env.VITE_API_URL?.trim()
  if (import.meta.env.DEV) return configured || ''
  // Production: only use explicit HTTPS API URLs; otherwise proxy via Netlify (/api/*).
  if (configured?.startsWith('https://')) return configured
  return ''
}

const API_URL = resolveApiUrl()
const TOKEN_KEY = 'girakee_admin_token'

export function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}

export function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token)
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY)
}

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const headers = new Headers(init.headers)
  const token = getToken()
  if (token) headers.set('Authorization', `Bearer ${token}`)
  if (!(init.body instanceof FormData)) headers.set('Content-Type', 'application/json')

  const response = await fetch(`${API_URL}${path}`, { ...init, headers })
  const data = await response.json().catch(() => ({}))
  if (!response.ok) {
    throw new Error(data.error || `Request failed (${response.status})`)
  }
  return data as T
}

export const adminApi = {
  login(email: string, password: string) {
    return request<{ token: string; admin: { id: string; email: string } }>('/api/admin/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
  },
  getJobs() {
    return request<{ jobs: AdminJob[] }>('/api/admin/jobs')
  },
  createJob(job: Partial<AdminJob>) {
    return request<{ job: AdminJob }>('/api/admin/jobs', {
      method: 'POST',
      body: JSON.stringify(job),
    })
  },
  updateJob(id: string, job: Partial<AdminJob>) {
    return request<{ job: AdminJob }>(`/api/admin/jobs/${id}`, {
      method: 'PUT',
      body: JSON.stringify(job),
    })
  },
  deleteJob(id: string) {
    return request<{ ok: boolean }>(`/api/admin/jobs/${id}`, { method: 'DELETE' })
  },
  getPaymentOptions() {
    return request<{ paymentsEnabled: boolean; paymentUrl: string; options: PaymentOption[] }>(
      '/api/admin/payment-options',
    )
  },
  createPaymentOption(option: Partial<PaymentOption>) {
    return request<{ option: PaymentOption }>('/api/admin/payment-options', {
      method: 'POST',
      body: JSON.stringify(option),
    })
  },
  updatePaymentOption(id: string, option: Partial<PaymentOption>) {
    return request<{ option: PaymentOption }>(`/api/admin/payment-options/${id}`, {
      method: 'PUT',
      body: JSON.stringify(option),
    })
  },
  deletePaymentOption(id: string) {
    return request<{ ok: boolean }>(`/api/admin/payment-options/${id}`, { method: 'DELETE' })
  },
  setPaymentsEnabled(enabled: boolean) {
    return request<{ paymentsEnabled: boolean }>('/api/admin/settings/payments', {
      method: 'PATCH',
      body: JSON.stringify({ enabled }),
    })
  },
  setPaymentUrl(paymentUrl: string) {
    return request<{ paymentUrl: string }>('/api/admin/settings/payment-url', {
      method: 'PATCH',
      body: JSON.stringify({ paymentUrl }),
    })
  },
  getSubmissions(filters?: { formType?: string; from?: string; to?: string }) {
    const params = new URLSearchParams()
    if (filters?.formType && filters.formType !== 'all') params.set('formType', filters.formType)
    if (filters?.from) params.set('from', filters.from)
    if (filters?.to) params.set('to', filters.to)
    const query = params.toString()
    return request<{ submissions: Submission[] }>(`/api/admin/submissions${query ? `?${query}` : ''}`)
  },
  deleteSubmission(id: string) {
    return request<{ ok: boolean }>(`/api/admin/submissions/${id}`, { method: 'DELETE' })
  },
  async downloadResume(submissionId: string, filename: string) {
    const token = getToken()
    const response = await fetch(`${API_URL}/api/admin/submissions/${submissionId}/resume`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    })
    if (!response.ok) {
      const data = await response.json().catch(() => ({}))
      throw new Error(data.error || `Download failed (${response.status})`)
    }
    const blob = await response.blob()
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    link.remove()
    URL.revokeObjectURL(url)
  },
  async openResume(submissionId: string) {
    const token = getToken()
    const response = await fetch(`${API_URL}/api/admin/submissions/${submissionId}/resume`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    })
    if (!response.ok) {
      const data = await response.json().catch(() => ({}))
      throw new Error(data.error || `Unable to open resume (${response.status})`)
    }
    const blob = await response.blob()
    const url = URL.createObjectURL(blob)
    window.open(url, '_blank', 'noopener,noreferrer')
    window.setTimeout(() => URL.revokeObjectURL(url), 60_000)
  },
}

export interface AdminJob {
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

export interface PaymentOption {
  id: string
  slug: string
  label: string
  description: string
  enabled: number
  sortOrder: number
}

export interface Submission {
  id: string
  formType: string
  payload: Record<string, unknown>
  hasResume: boolean
  resumeOriginalName?: string | null
  emailSent: boolean
  adminEmailSent: boolean
  candidateEmailSent: boolean
  createdAt: string
}
