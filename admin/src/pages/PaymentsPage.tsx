import { useEffect, useState } from 'react'
import { adminApi, type PaymentOption } from '../api'

const emptyOption = (): Partial<PaymentOption> => ({
  slug: '',
  label: '',
  description: '',
  enabled: 1,
  sortOrder: 0,
})

export default function PaymentsPage() {
  const [paymentsEnabled, setPaymentsEnabled] = useState(true)
  const [paymentUrl, setPaymentUrl] = useState('https://rzp.io/rzp/wZTKJRns')
  const [options, setOptions] = useState<PaymentOption[]>([])
  const [draft, setDraft] = useState<Partial<PaymentOption>>(emptyOption())
  const [editingId, setEditingId] = useState<string | null>(null)
  const [error, setError] = useState('')
  const [savingUrl, setSavingUrl] = useState(false)

  const load = async () => {
    const result = await adminApi.getPaymentOptions()
    setPaymentsEnabled(result.paymentsEnabled)
    setPaymentUrl(result.paymentUrl)
    setOptions(result.options)
  }

  useEffect(() => {
    load().catch((err) => setError(err instanceof Error ? err.message : 'Failed to load payment options'))
  }, [])

  const toggleMaster = async () => {
    const next = !paymentsEnabled
    await adminApi.setPaymentsEnabled(next)
    setPaymentsEnabled(next)
  }

  const savePaymentUrl = async (event: React.FormEvent) => {
    event.preventDefault()
    setSavingUrl(true)
    setError('')
    try {
      const result = await adminApi.setPaymentUrl(paymentUrl.trim())
      setPaymentUrl(result.paymentUrl)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save payment URL')
    } finally {
      setSavingUrl(false)
    }
  }

  const save = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')
    const payload = {
      ...draft,
      enabled: draft.enabled ? 1 : 0,
      sortOrder: Number(draft.sortOrder ?? 0),
    }
    try {
      if (editingId) await adminApi.updatePaymentOption(editingId, payload)
      else await adminApi.createPaymentOption(payload)
      setDraft(emptyOption())
      setEditingId(null)
      await load()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save payment option')
    }
  }

  const edit = (option: PaymentOption) => {
    setEditingId(option.id)
    setDraft(option)
  }

  const remove = async (id: string) => {
    if (!window.confirm('Delete this payment option?')) return
    await adminApi.deletePaymentOption(id)
    await load()
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="page-title mb-2">Payment Options</h2>
        <p className="page-subtitle">Control OJT residency payment choices shown on the registration form.</p>
      </div>

      <div className="panel p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="font-semibold">Master payments switch</p>
          <p className="text-sm text-white/45">
            When OFF, payment options are hidden on the residency registration form and submit stays on-site.
          </p>
        </div>
        <button type="button" className="btn" onClick={toggleMaster}>
          Payments are {paymentsEnabled ? 'ON' : 'OFF'} — click to toggle
        </button>
      </div>

      {paymentsEnabled && (
        <form onSubmit={savePaymentUrl} className="panel p-5 space-y-4">
          <div>
            <p className="font-semibold mb-1">Razorpay payment link</p>
            <p className="text-sm text-white/45">
              After a successful residency registration, applicants are redirected to this payment page.
            </p>
          </div>
          <input
            className="input"
            value={paymentUrl}
            onChange={(e) => setPaymentUrl(e.target.value)}
            placeholder="https://rzp.io/rzp/wZTKJRns"
            required
          />
          <button type="submit" className="btn" disabled={savingUrl}>
            {savingUrl ? 'Saving…' : 'Save payment link'}
          </button>
        </form>
      )}

      {paymentsEnabled && (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-1">Payment options shown on the form</h3>
            <p className="text-sm text-white/45">These labels appear on the registration form when payments are ON.</p>
          </div>
          {options.map((option) => (
            <div key={option.id} className="panel p-5 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold">{option.label}</h3>
                  <span className={`text-xs px-2 py-1 border ${option.enabled ? 'border-emerald-400/30 text-emerald-300' : 'border-white/15 text-white/40'}`}>
                    {option.enabled ? 'Enabled' : 'Disabled'}
                  </span>
                </div>
                <p className="text-sm text-white/45 mb-2">{option.slug}</p>
                <p className="text-sm text-white/60">{option.description}</p>
              </div>
              <div className="flex gap-2 shrink-0">
                <button type="button" className="btn btn-secondary" onClick={() => edit(option)}>Edit</button>
                <button type="button" className="btn btn-danger" onClick={() => remove(option.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {paymentsEnabled && (
      <form onSubmit={save} className="panel p-6 space-y-4">
        <h3 className="text-lg font-semibold">{editingId ? 'Edit payment option' : 'Add payment option'}</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <input className="input" placeholder="Slug" value={draft.slug ?? ''} onChange={(e) => setDraft({ ...draft, slug: e.target.value })} required />
          <input className="input" placeholder="Label" value={draft.label ?? ''} onChange={(e) => setDraft({ ...draft, label: e.target.value })} required />
        </div>
        <textarea className="input min-h-24" placeholder="Description" value={draft.description ?? ''} onChange={(e) => setDraft({ ...draft, description: e.target.value })} />
        <div className="flex flex-wrap gap-4 items-center">
          <label className="flex items-center gap-2 text-sm text-white/60">
            <input type="checkbox" checked={Boolean(draft.enabled)} onChange={(e) => setDraft({ ...draft, enabled: e.target.checked ? 1 : 0 })} />
            Enabled
          </label>
          <input className="input max-w-[120px]" type="number" placeholder="Sort" value={draft.sortOrder ?? 0} onChange={(e) => setDraft({ ...draft, sortOrder: Number(e.target.value) })} />
        </div>
        {error && <p className="text-sm text-red-400">{error}</p>}
        <div className="flex gap-3">
          <button type="submit" className="btn">{editingId ? 'Update option' : 'Create option'}</button>
          {editingId && (
            <button type="button" className="btn btn-secondary" onClick={() => { setEditingId(null); setDraft(emptyOption()) }}>
              Cancel
            </button>
          )}
        </div>
      </form>
      )}

      {!paymentsEnabled && (
        <p className="text-sm text-white/45 panel p-5">
          Payment options and the Razorpay redirect are hidden while the master switch is OFF.
        </p>
      )}
    </div>
  )
}
