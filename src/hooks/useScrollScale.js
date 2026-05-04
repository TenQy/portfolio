import { useEffect, useRef } from 'react'

export function useScrollScale(scale = 0.97) {
  const ref = useRef()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleScroll = () => {
      const rect = el.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const center = rect.top + rect.height / 2
      const distanceFromCenter = Math.abs(center - viewportHeight / 2)
      const maxDistance = viewportHeight / 2
      const ratio = Math.min(distanceFromCenter / maxDistance, 1)
      const currentScale = 1 - (1 - scale) * ratio
      el.style.transform = `scale(${currentScale})`
      el.style.opacity = 1 - ratio * 0.5
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scale])

  return ref
}