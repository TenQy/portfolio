import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { RiMoonLine, RiSunLine, RiMenuLine, RiCloseLine } from 'react-icons/ri'
import { useTheme } from '../../hooks/useTheme'
import logoLight from '../../assets/images/logoLight.webp'
import logoDark from '../../assets/images/logoDark.webp'
import sidebarLogo from '../../assets/images/sidebarLogo.webp'
import styles from './Navbar.module.css'

function Navbar() {
  const { t, i18n } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Active por IntersectionObserver en /
  useEffect(() => {
    if (location.pathname !== '/') return

    const sections = ['home', 'about', 'projects', 'contact']
    const allSections = ['home', 'about', 'skills', 'projects', 'contact']
    const observers = []

    allSections.forEach(id => {
    const el = document.getElementById(id)
    if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Si es skills, limpiar active
            if (id === 'skills') {
              setActiveSection('')
            } else {
              setActiveSection(id)
            }
          }
        },
        { threshold: 0.3, rootMargin: '-60px 0px 0px 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [location.pathname])

  // Active por ruta
  useEffect(() => {
    if (location.pathname === '/') {
      // lo maneja el IntersectionObserver
    } else {
      setActiveSection('')
    }
  }, [location.pathname])

  const toggleLanguage = () => {
    const next = i18n.language === 'es' ? 'en' : 'es'
    i18n.changeLanguage(next)
    localStorage.setItem('language', next)
  }

  const closeMenu = () => setMenuOpen(false)

  const handleNavClick = (section) => {
    closeMenu()
    if (location.pathname === '/') {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: section } })
    }
  }

  const navItems = [
    { key: 'home',     label: t('nav.home') },
    { key: 'about',    label: t('nav.about') },
    { key: 'projects', label: t('nav.projects') },
    { key: 'contact',  label: t('nav.contact') },
  ]

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.hidden : ''}`}>
      <button onClick={() => handleNavClick('home')} className={styles.logoBtn}>
        <img 
          src={theme === 'dark' ? logoDark : logoLight} 
          className={styles.logo} 
          alt="Angel Arroyo" 
        />
      </button>

        <div className={styles.navLinks}>
          {navItems.map(({ key, label }) => (
            <button
              key={key}
              className={`${styles.navLink} ${activeSection === key ? styles.active : ''}`}
              onClick={() => handleNavClick(key)}
            >
              <span className={styles.navLinkText}>{label}</span>
              <span className={styles.navLinkClone}>{label}</span>
            </button>
          ))}
        </div>

        <div className={styles.controls}>
          <button className={styles.langBtn} onClick={toggleLanguage}>
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>
          <button className={styles.iconBtn} onClick={toggleTheme}>
            {theme === 'dark' ? <RiSunLine /> : <RiMoonLine />}
          </button>
          <button className={styles.menuBtn} onClick={() => setMenuOpen(prev => !prev)}>
            <RiMenuLine />
          </button>
        </div>
      </nav>

      <div
        className={`${styles.overlay} ${menuOpen ? styles.open : ''}`}
        onClick={closeMenu}
      />

      <div className={`${styles.sidebar} ${menuOpen ? styles.open : ''}`}>
        <div className={styles.sidebarTop}>
          <Link to='/' >
            <img src={sidebarLogo} className={styles.sidebarLogo} alt='AA Logo'/>
          </Link>
          <button className={styles.sidebarClose} onClick={closeMenu}>
            <RiCloseLine />
          </button>
        </div>

        <div className={styles.sidebarLinks}>
          {navItems.map(({ key, label }) => (
            <button
              key={key}
              className={`${styles.sidebarLink} ${activeSection === key ? styles.active : ''}`}
              onClick={() => handleNavClick(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className={styles.sidebarControls}>
          <button className={styles.langBtn} onClick={toggleLanguage}>
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>
          <button className={styles.iconBtn} onClick={toggleTheme}>
            {theme === 'dark' ? <RiSunLine /> : <RiMoonLine />}
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar