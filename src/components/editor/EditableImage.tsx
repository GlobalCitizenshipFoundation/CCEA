
import React, { useState } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';
import { useContent } from '@/contexts/ContentContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface EditableImageProps {
  id: string;
  defaultSrc: string;
  alt: string;
  className?: string;
}

const EditableImage: React.FC<EditableImageProps> = ({
  id,
  defaultSrc,
  alt,
  className = ''
}) => {
  const { content, isEditMode, updateContent } = useContent();
  const [isDragOver, setIsDragOver] = useState(false);

  const currentSrc = content[id]?.content || defaultSrc;

  const handleFileChange = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        updateContent(id, result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    handleFileChange(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileChange(file);
    }
  };

  if (!isEditMode) {
    return (
      <img
        src={currentSrc}
        alt={alt}
        className={className}
      />
    );
  }

  return (
    <div className="relative group">
      <div
        className={cn(
          "relative border-2 border-dashed border-blue-300 rounded-lg overflow-hidden",
          isDragOver && "border-blue-500 bg-blue-50",
          className
        )}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <img
          src={currentSrc}
          alt={alt}
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="text-center text-white">
            <Upload className="h-8 w-8 mx-auto mb-2" />
            <p className="text-sm">Drop image or click to upload</p>
          </div>
        </div>
        
        <input
          type="file"
          accept="image/*"
          onChange={handleInputChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default EditableImage;
