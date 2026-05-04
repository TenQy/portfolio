import { useTranslation } from 'react-i18next'
import { projects } from '../data/projects'

export function useProjects() {
  const { i18n } = useTranslation()
  const lang = i18n.language.startsWith('en') ? 'en' : 'es'

  const allProjects = projects.map(p => ({
    ...p,
    ...(p[lang] ?? p['es']), 
  }))

  const getFeatured = () => allProjects.filter(p => p.featured)

  const getById = (id) => allProjects.find(p => p.id === id) ?? null

  return { allProjects, getFeatured, getById }
}