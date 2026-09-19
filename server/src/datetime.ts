/** SQLite `datetime('now')` values are UTC without a timezone suffix. */
export function sqliteUtcToIso(value: string) {
  const trimmed = value.trim()
  if (!trimmed) return trimmed
  if (trimmed.endsWith('Z') || /[+-]\d{2}:\d{2}$/.test(trimmed)) return trimmed
  if (trimmed.includes('T')) return `${trimmed}Z`
  return `${trimmed.replace(' ', 'T')}.000Z`
}
