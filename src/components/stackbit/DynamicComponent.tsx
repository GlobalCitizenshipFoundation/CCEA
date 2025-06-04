
import React from 'react'

interface DynamicComponentProps {
  type: string
  [key: string]: any
}

const DynamicComponent: React.FC<DynamicComponentProps> = ({ type, ...props }) => {
  // Map component types to actual components
  const componentMap: Record<string, React.ComponentType<any>> = {
    // Add your component mappings here as needed
    // 'hero': HeroComponent,
    // 'features': FeaturesComponent,
    // etc.
  }

  const Component = componentMap[type]

  if (!Component) {
    console.warn(`Component type "${type}" not found`)
    return (
      <div 
        data-sb-object-id={props['data-sb-object-id']} 
        data-sb-field-path={props['data-sb-field-path']}
        className="p-4 bg-gray-100 border-2 border-dashed border-gray-300 text-center"
      >
        <p className="text-gray-600">Component type "{type}" not implemented</p>
      </div>
    )
  }

  return <Component {...props} />
}

export default DynamicComponent
