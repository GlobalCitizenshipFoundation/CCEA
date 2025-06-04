
import React from 'react';
import { Edit3, Save, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useContent } from '@/contexts/ContentContext';
import { useToast } from '@/hooks/use-toast';

const VisualEditor: React.FC = () => {
  const { isEditMode, toggleEditMode, saveContent } = useContent();
  const { toast } = useToast();

  const handleSave = () => {
    saveContent();
    toast({
      title: "Content Saved",
      description: "Your changes have been saved successfully.",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex gap-2">
      <Button
        onClick={toggleEditMode}
        variant={isEditMode ? "default" : "outline"}
        size="sm"
        className="shadow-lg"
      >
        {isEditMode ? (
          <>
            <EyeOff className="h-4 w-4 mr-2" />
            Exit Edit
          </>
        ) : (
          <>
            <Edit3 className="h-4 w-4 mr-2" />
            Edit Page
          </>
        )}
      </Button>
      
      {isEditMode && (
        <Button
          onClick={handleSave}
          variant="default"
          size="sm"
          className="shadow-lg bg-green-600 hover:bg-green-700"
        >
          <Save className="h-4 w-4 mr-2" />
          Save
        </Button>
      )}
    </div>
  );
};

export default VisualEditor;
