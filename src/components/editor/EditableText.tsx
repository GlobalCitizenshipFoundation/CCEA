
import React, { useState, useRef, useEffect } from 'react';
import ContentEditable from 'react-contenteditable';
import { useContent } from '@/contexts/ContentContext';
import { cn } from '@/lib/utils';

interface EditableTextProps {
  id: string;
  defaultContent: string;
  className?: string;
  tagName?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  placeholder?: string;
}

const EditableText: React.FC<EditableTextProps> = ({
  id,
  defaultContent,
  className = '',
  tagName = 'div',
  placeholder = 'Click to edit...'
}) => {
  const { content, isEditMode, updateContent } = useContent();
  const [localContent, setLocalContent] = useState(defaultContent);
  const contentRef = useRef(localContent);

  useEffect(() => {
    const savedContent = content[id]?.content;
    if (savedContent) {
      setLocalContent(savedContent);
      contentRef.current = savedContent;
    }
  }, [content, id]);

  const handleChange = (evt: any) => {
    const newContent = evt.target.value;
    contentRef.current = newContent;
    setLocalContent(newContent);
  };

  const handleBlur = () => {
    updateContent(id, contentRef.current);
  };

  if (!isEditMode) {
    const displayContent = content[id]?.content || defaultContent;
    return React.createElement(tagName, {
      className: className,
      dangerouslySetInnerHTML: { __html: displayContent }
    });
  }

  return (
    <ContentEditable
      html={localContent}
      disabled={!isEditMode}
      onChange={handleChange}
      onBlur={handleBlur}
      tagName={tagName}
      className={cn(
        className,
        isEditMode && 'border border-dashed border-blue-300 bg-blue-50/50 hover:bg-blue-50 transition-colors outline-none focus:border-blue-500 focus:bg-blue-50'
      )}
      data-placeholder={placeholder}
      style={{
        minHeight: isEditMode ? '1.5rem' : 'auto'
      }}
    />
  );
};

export default EditableText;
