
import React from 'react'
import usePreviewMode from '@/hooks/usePreviewMode'

interface EditableTextProps {
  text: string
  fieldPath?: string
  objectId?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
  className?: string
}

const EditableText: React.FC<EditableTextProps> = ({ 
  text, 
  fieldPath, 
  objectId, 
  as: Component = 'p', 
  className = '' 
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
    <Component className={className} {...editableProps}>
      {text}
    </Component>
  )
}

export default EditableText
