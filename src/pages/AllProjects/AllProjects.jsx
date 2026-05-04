import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { RiArrowLeftSLine, RiArrowDownSLine, RiGithubLine, RiExternalLinkLine, RiFileTextLine } from 'react-icons/ri'
import { useProjects } from '../../hooks/useProjects'
import styles from './AllProjects.module.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { useScrollScale } from '../../hooks/useScrollScale'

const FILTERS = ['all', 'web', 'mobile', 'ai']

function ScaledCard({ project }) {
  const ref = useScrollScale(0.9)
  return (
    <div ref={ref} style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}>
      <ProjectCard project={project} />
    </div>
  )
}

function AllProjects() {
  const { t } = useTranslation()
  const { allProjects } = useProjects()
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('all')
  const [filterOpen, setFilterOpen] = useState(false)
  const dropdownRef = useRef(null)

  const filterLabels = {
    all: t('projects.filters.all'),
    web: t('projects.filters.web'),
    mobile: t('projects.filters.mobile'),
    ai: t('projects.filters.ai'),
  }

  const filtered = activeFilter === 'all'
    ? allProjects
    : allProjects.filter(p => p.category?.includes(activeFilter))

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setFilterOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleScroll = () => setFilterOpen(false)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <button className={styles.back} onClick={() => navigate(-1)}>
          <RiArrowLeftSLine /> {t('projects.goBack')}
        </button>
        <div className={styles.titleRow}>
          <h1 className={styles.title}>{t('projects.allTitle')}</h1>
          <div className={styles.dropdown} ref={dropdownRef}>
            <button
              className={styles.dropdownBtn}
              onClick={() => setFilterOpen(prev => !prev)}
            >
              {filterLabels[activeFilter]}
              <RiArrowDownSLine className={`${styles.dropdownArrow} ${filterOpen ? styles.open : ''}`} />
            </button>
            {filterOpen && (
              <div className={styles.dropdownMenu}>
                {FILTERS.map(f => (
                  <button
                    key={f}
                    className={`${styles.dropdownItem} ${activeFilter === f ? styles.active : ''}`}
                    onClick={() => { setActiveFilter(f); setFilterOpen(false) }}
                  >
                    {filterLabels[f]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        {filtered.map((project) => (
          <div key={`${activeFilter}-${project.id}`}>
            <ScaledCard project={project} />
          </div>
        ))}
      </div>
    </main>
  )
}

export default AllProjects