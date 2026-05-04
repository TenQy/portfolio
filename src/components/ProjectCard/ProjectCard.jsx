import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { RiArrowLeftSLine, RiArrowRightSLine, RiGithubLine, RiExternalLinkLine, RiFileTextLine, RiCloseLine, RiFullscreenLine } from 'react-icons/ri'
import Button from '../Button/Button'
import { useMouseGlow } from '../../hooks/useMouseGlow'
import styles from './ProjectCard.module.css'
import Lightbox from '../Lightbox/Lightbox'

function ProjectCard({ project, hideDetails = false }) {
  const { t } = useTranslation()
  const [current, setCurrent] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [mouseX, setMouseX] = useState(50)
  const [mouseSection, setMouseSection] = useState(null)
  const { handleMouseMove, handleMouseLeave } = useMouseGlow()

  const images = project.images
  const hasImages = images?.length > 0

  const [imageSrc, setImageSrc] = useState(null)

  useEffect(() => {
    if (!hasImages) return
    const loader = images[current]
    if (typeof loader === 'function') {
      loader().then(m => setImageSrc(m.default))
    } else {
      setImageSrc(loader)
    }
  }, [current, images])

  const prev = () => setCurrent(i => (i - 1 + images.length) % images.length)
  const next = () => setCurrent(i => (i + 1) % images.length)

  const handleImageMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = (e.clientY - rect.top) / rect.height
    setMouseX(x)
    setMouseSection(y < 0.5 ? 'top' : 'bottom')
  }

  const handleImageMouseLeave = () => {
    setMouseX(50)
    setMouseSection(null)
  }

  const statusLabel = {
    completed: t('projects.status.completed'),
    prototype: t('projects.status.prototype'),
    inProgress: t('projects.status.inProgress'),
  }

  return (
    <>
      {lightboxOpen && hasImages && (
        <Lightbox
          images={images}
          current={current}
          onClose={() => setLightboxOpen(false)}
          onPrev={prev}
          onNext={next}
        />
      )}

      <div className={styles.card}>
        <div
          className={styles.imageWrapper}
          onMouseMove={handleImageMouseMove}
          onMouseLeave={handleImageMouseLeave}
        >
          <img
            src={imageSrc || 'https://placehold.co/600x375'}
            alt={project.name}
            className={styles.image}
            loading="lazy"
            width={658}
            height={337}
          />

          <div className={styles.overlayTop} style={{ '--mouse-x': `${mouseX}%`, opacity: mouseSection === 'top' ? 1 : 0 }} />
          <div className={styles.overlayBottom} style={{ '--mouse-x': `${mouseX}%`, opacity: mouseSection === 'bottom' ? 1 : 0 }} />

          {hasImages && (
            <button className={styles.expandBtn} onClick={() => setLightboxOpen(true)}>
              <RiFullscreenLine />
            </button>
          )}

          {images?.length > 1 && (
            <>
              <button className={`${styles.navBtn} ${styles.prev}`} onClick={prev}>
                <RiArrowLeftSLine />
              </button>
              <button className={`${styles.navBtn} ${styles.next}`} onClick={next}>
                <RiArrowRightSLine />
              </button>
              <div className={styles.indicators}>
                {images.map((_, i) => (
                  <button
                    key={i}
                    className={`${styles.dot} ${i === current ? styles.active : ''}`}
                    onClick={() => setCurrent(i)}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className={styles.content}>
          <div className={styles.header}>
            <h3 className={styles.projectName}>{project.name}</h3>
            {project.status !== 'completed' && (
              <span className={styles.statusBadge}>{statusLabel[project.status]}</span>
            )}
          </div>

          <p className={styles.description}>{project.shortDescription}</p>

          <div className={styles.technologies}>
            {project.technologies.map(tech => (
              <span key={tech} className={styles.techTag}>{tech}</span>
            ))}
          </div>

          <div className={styles.buttons}>
            {project.preview ? (
              <Button variant="primary" href={project.preview} className={styles.btnFull} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <RiExternalLinkLine />
                {t('projects.liveDemo')}
              </Button>
            ) : (
              <Button disabled className={styles.btnFull}>
                <RiExternalLinkLine />
                {t('projects.liveDemo')}
              </Button>
            )}

            <div className={styles.btnRow}>
              {project.github ? (
                <Button variant="secondary" href={project.github} className={styles.btnGrow} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <RiGithubLine />
                  {t('projects.viewRepo')}
                </Button>
              ) : (
                <Button disabled className={styles.btnGrow}>
                  <RiGithubLine />
                  {t('projects.viewRepo')}
                </Button>
              )}
              {!hideDetails && (
                <Button variant="secondary" to={`/projects/${project.id}`} className={styles.btnGrow} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <RiFileTextLine />
                  {t('projects.viewDetails')}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard