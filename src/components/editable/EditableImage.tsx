
import React from 'react'
import usePreviewMode from '@/hooks/usePreviewMode'

interface EditableImageProps {
  src: string
  alt: string
  fieldPath?: string
  objectId?: string
  className?: string
  width?: number
  height?: number
}

const EditableImage: React.FC<EditableImageProps> = ({ 
  src, 
  alt, 
  fieldPath, 
  objectId, 
  className = '',
  width,
  height 
}) => {
  const isPreview = usePreviewMode()
  const editableProps: Record<string, any> = {}

  if (isPreview) {
    if (fieldPath) {
      editableProps['data-sb-field-path'] = fieldPath
    }

    if (objectId) {
      editableProps['data-sb-object-id'] = objectId
    }
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      width={width}
      height={height}
      {...editableProps}
    />
  )
}

export default EditableImage
