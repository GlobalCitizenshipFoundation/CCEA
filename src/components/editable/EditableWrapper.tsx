
import React from 'react'

interface EditableWrapperProps {
  children: React.ReactNode
  fieldPath?: string
  objectId?: string
  className?: string
  as?: keyof JSX.IntrinsicElements
}

const EditableWrapper: React.FC<EditableWrapperProps> = ({ 
  children, 
  fieldPath, 
  objectId, 
  className = '',
  as: Component = 'div' 
}) => {
  const editableProps: Record<string, any> = {}
  
  if (fieldPath) {
    editableProps['data-sb-field-path'] = fieldPath
  }
  
  if (objectId) {
    editableProps['data-sb-object-id'] = objectId
  }

  return (
    <Component className={className} {...editableProps}>
      {children}
    </Component>
  )
}

export default EditableWrapper
