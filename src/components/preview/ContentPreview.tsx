
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

interface ContentPreviewProps {
  children: React.ReactNode
}

const ContentPreview: React.FC<ContentPreviewProps> = ({ children }) => {
  const [isPreviewMode, setIsPreviewMode] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Check if we're in preview mode
    const urlParams = new URLSearchParams(location.search)
    const preview = urlParams.get('preview') === 'true' || 
                    import.meta.env.VITE_PREVIEW_MODE === 'true'
    
    setIsPreviewMode(preview)

    // Add preview mode styling
    if (preview) {
      document.body.classList.add('stackbit-preview')
    } else {
      document.body.classList.remove('stackbit-preview')
    }
  }, [location])

  if (isPreviewMode) {
    return (
      <div data-sb-object-id="content">
        {children}
      </div>
    )
  }

  return <>{children}</>
}

export default ContentPreview
