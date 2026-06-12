import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { RiCloseLine, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import styles from './Lightbox.module.css'

function Lightbox({ images, current, onClose, onPrev, onNext }) {
  const [imageSrc, setImageSrc] = useState(null)

  useEffect(() => {
    const loader = images[current]
    if (typeof loader === 'function') {
      loader().then(m => setImageSrc(m.default))
    } else {
      setImageSrc(loader)
    }
  }, [current, images])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose, onPrev, onNext])

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.container} onClick={e => e.stopPropagation()}>
        <img src={imageSrc || ''} alt="preview" className={styles.image} />

        <button aria-label="Cerrar imagen" className={styles.close} onClick={onClose}>
          <RiCloseLine />
        </button>

        {images.length > 1 && (
          <>
            <button aria-label="Imagen anterior" className={`${styles.nav} ${styles.prev}`} onClick={e => { e.stopPropagation(); onPrev() }}>
              <RiArrowLeftSLine />
            </button>
            <button aria-label="Imagen posterior" className={`${styles.nav} ${styles.next}`} onClick={e => { e.stopPropagation(); onNext() }}>
              <RiArrowRightSLine />
            </button>
          </>
        )}
      </div>
    </div>,
    document.body
  )
}

export default Lightbox