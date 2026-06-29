import { useTranslation } from 'react-i18next'
import { skills } from '../../../../data/skills'
import TechIcon from '../../../../components/TechIcon/TechIcon'
import styles from './Skills.module.css'
import { useMouseGlow } from '../../../../hooks/useMouseGlow'

const categories = ['languages', 'frameworks', 'database', 'tools']

function Skills() {
  const { t } = useTranslation()
  const { handleMouseMove, handleMouseLeave } = useMouseGlow()

  return (
    <section className={styles.skills} id="skills">
      <h2 className={styles.sectionTitle}>{t('skills.title')}</h2>

      <div className={styles.grid}>
        {categories.map(category => (
          <div
            key={category}
            className={styles.category}
            style={{ flexGrow: skills[category].length }}
          >
            <span className={styles.categoryTitle}>{t(`skills.${category}`)}</span>
            <div className={styles.techList}>
              {skills[category].map(skill => (
                <div 
                  key={skill.name} 
                  className={styles.techItem}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <TechIcon iconKey={skill.icon} className={styles.techIcon} />
                  <span className={styles.techName}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills