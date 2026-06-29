import { useTranslation } from 'react-i18next'
import styles from './About.module.css'
import { useMouseGlow } from '../../../../hooks/useMouseGlow'

function About() {
  const { t } = useTranslation()
  const { handleMouseMove, handleMouseLeave } = useMouseGlow()
  const highlights = t('about.highlights', { returnObjects: true })

  return (
    <section className={styles.about} id="about">
      <h2 className={styles.sectionTitle}>{t('about.title')}</h2>

      <div className={styles.container}>
        <div className={styles.text}>
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <p>{t('about.p3')}</p>
          <p>{t('about.p4')}</p>
        </div>

        <div className={styles.highlights}>
          {highlights.map((item) => (
            <div
              key={item.title}
              className={styles.highlightItem}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <span className={styles.highlightTitle}>{item.title}</span>
              <p className={styles.highlightDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About