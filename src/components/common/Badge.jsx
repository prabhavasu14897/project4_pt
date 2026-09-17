import './Badge.css'

const TONE_CLASS = {
  urgency: 'badge badge--urgency',
  tertiary: 'badge badge--tertiary',
  primary: 'badge badge--primary',
  secondary: 'badge badge--secondary',
  neutral: 'badge badge--neutral',
  outline: 'badge badge--outline',
}

export default function Badge({ tone = 'neutral', icon: Icon, className = '', children }) {
  const classes = [TONE_CLASS[tone] ?? TONE_CLASS.neutral, className].filter(Boolean).join(' ')
  return (
    <span className={classes}>
      {Icon && <Icon className="badge__icon" aria-hidden="true" />}
      {children}
    </span>
  )
}
