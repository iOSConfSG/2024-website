import { DateTime } from 'luxon'

export function formatDate(
  stringDate: string,
  localTimezone: string,
  timezone?: string
) {
  if (timezone) {
    const rezoned = DateTime.fromISO(stringDate, { zone: timezone }).setLocale(
      'sg'
    )
    return rezoned.toFormat('HH:mm')
  } else {
    const dt = DateTime.fromISO(stringDate, { zone: localTimezone }).setLocale(
      'sg'
    )
    return dt.toFormat('HH:mm')
  }
}
