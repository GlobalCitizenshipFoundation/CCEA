
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ContentItem {
  id: string;
  type: 'text' | 'image' | 'section';
  content: string;
  metadata?: Record<string, any>;
}

interface ContentContextType {
  content: Record<string, ContentItem>;
  isEditMode: boolean;
  updateContent: (id: string, newContent: string) => void;
  toggleEditMode: () => void;
  saveContent: () => void;
  loadContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<Record<string, ContentItem>>({});
  const [isEditMode, setIsEditMode] = useState(false);

  const updateContent = (id: string, newContent: string) => {
    setContent(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        content: newContent
      }
    }));
  };

  const toggleEditMode = () => {
    setIsEditMode(prev => !prev);
  };

  const saveContent = () => {
    localStorage.setItem('ccea-content', JSON.stringify(content));
    console.log('Content saved to localStorage');
  };

  const loadContent = () => {
    const savedContent = localStorage.getItem('ccea-content');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  };

  useEffect(() => {
    loadContent();
  }, []);

  return (
    <ContentContext.Provider value={{
      content,
      isEditMode,
      updateContent,
      toggleEditMode,
      saveContent,
      loadContent
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
