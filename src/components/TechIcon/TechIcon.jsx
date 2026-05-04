import { useEffect, useState } from 'react'

function TechIcon({ iconKey, size = 24, className }) {
  const [path, setPath] = useState(null)

  useEffect(() => {
    import('simple-icons').then((mod) => {
      const icon = mod[iconKey]
      if (icon) setPath(icon.path)
    })
  }, [iconKey])

  if (!path) return null

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d={path} />
    </svg>
  )
}

export default TechIcon