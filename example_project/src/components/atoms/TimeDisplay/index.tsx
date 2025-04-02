import { TimeDisplayProps } from './interface'

export default function TimeDisplay({
  date,
  label,
  tabIndex = 0,
}: TimeDisplayProps) {
  return (
    <time dateTime={date} aria-label={label} role="text">
      {date}{' '}
    </time>
  )
}
