/** Server stores UTC; Girakee ops are in India — show IST in admin. */
export function formatIndiaDateTime(value: string) {
  const trimmed = value.trim()
  if (!trimmed) return trimmed

  const iso = trimmed.endsWith('Z') || trimmed.includes('T')
    ? trimmed
    : `${trimmed.replace(' ', 'T')}.000Z`

  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return value

  return date.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  })
}
