import { RiGithubLine, RiLinkedinLine } from 'react-icons/ri'
import Button from '../Button/Button'
import { contactInfo } from '../../data/contact'
import { useMouseGlow } from '../../hooks/useMouseGlow'
import styles from './Footer.module.css'
import { useTranslation } from 'react-i18next'

function Footer() {
  const { handleMouseMove, handleMouseLeave } = useMouseGlow()
  const { t } = useTranslation()

  return (
    <div className={styles.footerWrapper}>
        <footer className={styles.footer}>
            <span className={styles.copy}>© {new Date().getFullYear()} {contactInfo.name}</span>
        </footer>
    </div>
    )
}

export default Footer