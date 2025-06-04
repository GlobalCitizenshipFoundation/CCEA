
import React from 'react'
import { urlFor } from '@/lib/sanity'

interface Block {
  _type: string
  _key: string
  style?: string
  children?: any[]
  asset?: any
  alt?: string
  caption?: string
}

interface PortableTextProps {
  value: Block[]
  className?: string
}

const PortableText: React.FC<PortableTextProps> = ({ value, className = '' }) => {
  if (!value || !Array.isArray(value)) {
    return null
  }

  const renderBlock = (block: Block) => {
    const { _type, _key, style, children } = block

    if (_type === 'block') {
      const text = children?.map(child => child.text).join('') || ''
      
      switch (style) {
        case 'h1':
          return <h1 key={_key} className="text-4xl font-bold mb-6">{text}</h1>
        case 'h2':
          return <h2 key={_key} className="text-3xl font-semibold mb-4">{text}</h2>
        case 'h3':
          return <h3 key={_key} className="text-2xl font-medium mb-3">{text}</h3>
        case 'h4':
          return <h4 key={_key} className="text-xl font-medium mb-2">{text}</h4>
        case 'blockquote':
          return (
            <blockquote key={_key} className="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-600">
              {text}
            </blockquote>
          )
        default:
          return <p key={_key} className="mb-4 leading-relaxed">{text}</p>
      }
    }

    if (_type === 'image') {
      const { asset, alt, caption } = block
      if (!asset) return null

      return (
        <figure key={_key} className="my-6">
          <img 
            src={urlFor(asset).width(800).quality(90).url()} 
            alt={alt || ''} 
            className="w-full rounded-lg shadow-md"
          />
          {caption && (
            <figcaption className="text-sm text-gray-600 mt-2 text-center">
              {caption}
            </figcaption>
          )}
        </figure>
      )
    }

    return null
  }

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      {value.map(renderBlock)}
    </div>
  )
}

export default PortableText
