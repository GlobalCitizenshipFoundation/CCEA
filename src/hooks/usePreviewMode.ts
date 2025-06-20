import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function usePreviewMode() {
  const [isPreview, setIsPreview] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const preview =
      params.get('preview') === 'true' || import.meta.env.VITE_PREVIEW_MODE === 'true'

    if (preview) {
      document.body.classList.add('stackbit-preview')
    }

    setIsPreview(preview)
  }, [location])

  return isPreview
}
