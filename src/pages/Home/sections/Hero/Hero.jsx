import { useTranslation } from 'react-i18next'
import { RiGithubLine, RiLinkedinLine, RiDownloadLine, RiArrowDownLine } from 'react-icons/ri'
import styles from './Hero.module.css'
import profileImg from '../../../../assets/images/hero.webp'
import Button from '../../../../components/Button/Button'
import { useMouseGlow } from '../../../../hooks/useMouseGlow'
import { contactInfo } from '../../../../data/contact'
import cv from '../../../../assets/Angel_Arroyo_CV.pdf'

function Hero() {
  const { t } = useTranslation()
  const { handleMouseMove, handleMouseLeave } = useMouseGlow()

  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div className={styles.content}>

          <div className={styles.heroTop}>
            <span className={styles.greeting}>{t('hero.greeting')}</span>
            <h1 className={styles.name}>{contactInfo.name}</h1>
          </div>

          <p className={styles.role}>{t('hero.role')}</p>
          <p className={styles.description}>{t('hero.description')}</p>

          <div className={styles.buttons}>
            <Button
              variant="primary"
              href={cv}
              target='_blank'
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <RiDownloadLine />
              {t('hero.downloadCV')}
            </Button>
            <Button
              variant="secondary"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {t('hero.viewProjects')}
              <RiArrowDownLine />
            </Button>

            <div className={styles.divider} />

            <div className={styles.icons}>
              <Button 
                variant="icon" 
                href={contactInfo.github}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <RiGithubLine />
              </Button>
              <Button 
                variant="icon" 
                href={contactInfo.linkedin}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <RiLinkedinLine />
              </Button>
            </div>
          </div>

        </div>
        <div className={styles.imageWrapper}>
          <img src={profileImg} alt={contactInfo.name} className={styles.image} />
          <div className={styles.imageBorder} />
        </div>
      </div>
    </section>
  )
}

export default Hero