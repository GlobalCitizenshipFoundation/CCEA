
import React from 'react'
import { ComponentType } from '@stackbit/components'

interface DynamicComponentProps {
  type: string
  [key: string]: any
}

const DynamicComponent: React.FC<DynamicComponentProps> = ({ type, ...props }) => {
  // Map component types to actual components
  const componentMap: Record<string, React.ComponentType<any>> = {
    // Add your component mappings here
    // 'hero': HeroComponent,
    // 'features': FeaturesComponent,
    // etc.
  }

  const Component = componentMap[type]

  if (!Component) {
    console.warn(`Component type "${type}" not found`)
    return null
  }

  return <Component {...props} />
}

export default DynamicComponent
