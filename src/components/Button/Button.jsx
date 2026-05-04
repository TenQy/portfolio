import { Link } from 'react-router-dom'
import styles from './Button.module.css'

function Button({
  variant = 'primary',
  href,
  to,
  download,
  disabled,
  onClick,
  onMouseMove,
  onMouseLeave,
  className,
  children,
}) {
  const cls = `${styles[variant]} ${className || ''}`

  if (disabled) {
    return <span className={`${styles.disabled} ${className || ''}`}>{children}</span>
  }

  if (to) {
    return (
      <Link
        to={to}
        className={cls}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={download ? undefined : '_blank'}
        rel={download ? undefined : 'noreferrer'}
        className={cls}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={cls} onClick={onClick} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      {children}
    </button>
  )
}

export default Button