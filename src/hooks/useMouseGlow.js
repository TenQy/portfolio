import { useCallback } from 'react'

export function useMouseGlow() {
  const handleMouseMove = useCallback((e) => {
    const btn = e.currentTarget
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    btn.style.setProperty('--mouse-x', `${x}px`)
    btn.style.setProperty('--mouse-y', `${y}px`)
  }, [])

  const handleMouseLeave = useCallback((e) => {
    e.currentTarget.style.removeProperty('--mouse-x')
    e.currentTarget.style.removeProperty('--mouse-y')
  }, [])

  return { handleMouseMove, handleMouseLeave }
}