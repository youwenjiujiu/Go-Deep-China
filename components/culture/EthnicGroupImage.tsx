'use client'

import { useState } from 'react'

interface EthnicGroupImageProps {
  src: string
  alt: string
  fallbackText: string
  className?: string
}

export default function EthnicGroupImage({
  src,
  alt,
  fallbackText,
  className = ""
}: EthnicGroupImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    setHasError(true)
    setImgSrc(`https://via.placeholder.com/800x600/9CA3AF/ffffff?text=${encodeURIComponent(fallbackText)}`)
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  )
}