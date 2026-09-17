import './Button.css'

const VARIANT_CLASS = {
  primary: 'btn btn--primary',
  secondary: 'btn btn--secondary',
  ghost: 'btn btn--ghost',
  outline: 'btn btn--outline',
  tertiary: 'btn btn--tertiary',
}

export default function Button({
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  children,
  ...rest
}) {
  const classes = [
    VARIANT_CLASS[variant] ?? VARIANT_CLASS.primary,
    size === 'sm' ? 'btn--sm' : '',
    fullWidth ? 'btn--full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Component className={classes} {...rest}>
      {Icon && iconPosition === 'left' && <Icon className="btn__icon" aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="btn__icon" aria-hidden="true" />}
    </Component>
  )
}
