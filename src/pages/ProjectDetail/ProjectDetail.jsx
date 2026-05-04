import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  RiArrowLeftSLine,
  RiArrowDownSLine,
  RiGithubLine,
  RiExternalLinkLine,
} from 'react-icons/ri'
import { useProjects } from '../../hooks/useProjects'
import styles from './ProjectDetail.module.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard'

function ProjectDetail() {
  const { id } = useParams()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { getById } = useProjects()
  const project = getById(id)

  const [activeImg, setActiveImg] = useState(0)

  if (!project) {
    return (
      <main className={styles.page}>
        <Link to="/projects" className={styles.navLink}>
          <RiArrowLeftSLine /> {t('projects.allTitle')}
        </Link>
        <div className={styles.notFound}>
          <h2>404</h2>
          <p>{t('projects.notFound')}</p>
        </div>
      </main>
    )
  }

  const statusLabel = {
    completed: t('projects.status.completed'),
    prototype: t('projects.status.prototype'),
    inProgress: t('projects.status.inProgress'),
  }

  const images = project.images ?? []

  return (
    <main className={styles.page}>

      {/* ── Nav row ── */}
      <div className={styles.navRow}>
        <button className={styles.navLink} onClick={() => navigate(-1)}>
          <RiArrowLeftSLine /> {t('projects.goBack')}
        </button>
        <Link to="/projects" className={styles.navLink}>
          {t('projects.allTitle')} <RiArrowLeftSLine className={styles.flipIcon} />
        </Link>
      </div>

      {/* ── Project Card ── */}
      <ProjectCard project={project} hideDetails />

      <div className={styles.separator} />

      <div className={styles.twocol}>

        {project.fullDescription && (
          <div className={styles.tcRow}>
            <span className={styles.tcLabel}>{t('projects.detail.overview')}</span>
            <p className={styles.tcText}>{project.fullDescription}</p>
          </div>
        )}

        {Array.isArray(project.features) && project.features.length > 0 && (
          <div className={styles.tcRow}>
            <span className={styles.tcLabel}>{t('projects.detail.features')}</span>
            <ul className={styles.tcFeatures}>
              {project.features.map((f, i) => (
                <li key={i} className={styles.tcFeature}>
                  <span className={styles.tcFeatName}>{f.name}</span>
                  <span className={styles.tcFeatDesc}>{f.description}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {Array.isArray(project.futureImprovements) && project.futureImprovements.length > 0 && (
          <div className={styles.tcRow}>
            <span className={styles.tcLabel}>{t('projects.detail.futureImprovements')}</span>
            <ul className={styles.tcFeatures}>
              {project.futureImprovements.map((item, i) => (
                <li key={i} className={styles.tcFeature}>
                  <span className={styles.tcFeatName}>{item.name}</span>
                  <span className={styles.tcFeatDesc}>{item.description}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.learnings && (
          <div className={styles.tcRow}>
            <span className={styles.tcLabel}>{t('projects.detail.learnings')}</span>
            <p className={styles.tcText}>{project.learnings}</p>
          </div>
        )}

      </div>
    </main>
  )
}

export default ProjectDetail