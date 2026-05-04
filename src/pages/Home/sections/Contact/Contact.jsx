import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { RiFileCopyLine, RiCheckLine, RiLinkedinBoxLine } from 'react-icons/ri'
import styles from './Contact.module.css'
import { contactInfo } from '../../../../data/contact'
import { useMouseGlow } from '../../../../hooks/useMouseGlow'
import Button from '../../../../components/Button/Button'

function Contact() {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)
  const { handleMouseMove, handleMouseLeave } = useMouseGlow()

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const el = document.createElement('textarea')
      el.value = contactInfo.email
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.sectionTitle}>{t('contact.title')}</h2>
      <p className={styles.description}>{t('contact.description')}</p>

      <div className={styles.actions}>
        {/* Email display + copy */}
        <div
          className={styles.emailRow}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <span className={styles.emailDisplay}>{contactInfo.email}</span>
          <button
            className={`${styles.copyBtn} ${copied ? styles.copied : ''}`}
            onClick={handleCopy}
            title={copied ? t('contact.copied') : t('contact.copy')}
          >
            {copied ? <RiCheckLine /> : <RiFileCopyLine />}
            {copied ? t('contact.copied') : t('contact.copy')}
          </button>
        </div>

        {/* LinkedIn */}
        <Button
          variant="secondary"
          href={contactInfo.linkedin}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <RiLinkedinBoxLine size={18} />
          LinkedIn
        </Button>
      </div>
    </section>
  )
}

export default Contact