import { use, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { RiArrowLeftSLine, RiArrowRightSLine, RiGithubLine, RiExternalLinkLine, RiFileTextLine } from 'react-icons/ri'
import { useProjects } from '../../../../hooks/useProjects'
import styles from './Projects.module.css'
import ProjectCard from '../../../../components/ProjectCard/ProjectCard'
import { useScrollScale } from '../../../../hooks/useScrollScale'
import Button from '../../../../components/Button/Button'
import { useMouseGlow } from '../../../../hooks/useMouseGlow'

function ScaledCard({ project }) {
  const ref = useScrollScale(0.9)
  return (
    <div ref={ref} style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}>
      <ProjectCard project={project} />
    </div>
  )
}

function Projects() {
  const { t } = useTranslation()
  const { getFeatured } = useProjects()
  const featured = getFeatured()
  const { handleMouseMove, handleMouseLeave } = useMouseGlow()

  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.sectionTitle}>{t('projects.title')}</h2>

      <div className={styles.list}>
        {featured.map((project, index) => (
          <div key={project.id}>
            <ScaledCard project={project} />
            {index < featured.length - 1 && <div className={styles.separator} />}
          </div>
        ))}
      </div>

      <div className={styles.viewAll}>
        <Button 
          to="/projects" 
          variant="secondary"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {t('projects.viewAll')}
          <RiArrowRightSLine />
        </Button>
      </div>
    </section>
  )
}

export default Projects