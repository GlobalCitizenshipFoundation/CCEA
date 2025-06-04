
import React, { useState } from 'react';
import { FileText, Image, Settings, Download, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useContent } from '@/contexts/ContentContext';
import { useToast } from '@/hooks/use-toast';

const ContentManagement: React.FC = () => {
  const { content, saveContent, loadContent } = useContent();
  const { toast } = useToast();
  const [isExporting, setIsExporting] = useState(false);

  const exportContent = () => {
    setIsExporting(true);
    const dataStr = JSON.stringify(content, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `ccea-content-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    setIsExporting(false);
    toast({
      title: "Content Exported",
      description: "Content has been exported successfully.",
    });
  };

  const importContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedContent = JSON.parse(e.target?.result as string);
          localStorage.setItem('ccea-content', JSON.stringify(importedContent));
          loadContent();
          toast({
            title: "Content Imported",
            description: "Content has been imported successfully.",
          });
        } catch (error) {
          toast({
            title: "Import Error",
            description: "Failed to import content. Please check the file format.",
            variant: "destructive",
          });
        }
      };
      reader.readAsText(file);
    }
  };

  const contentItems = Object.entries(content);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Content Management</h1>
        <div className="flex gap-2">
          <Button onClick={exportContent} disabled={isExporting} variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button asChild variant="outline">
            <label>
              <Upload className="h-4 w-4 mr-2" />
              Import
              <input
                type="file"
                accept=".json"
                onChange={importContent}
                className="hidden"
              />
            </label>
          </Button>
          <Button onClick={saveContent}>
            <Settings className="h-4 w-4 mr-2" />
            Save All
          </Button>
        </div>
      </div>

      <Tabs defaultValue="content" className="space-y-4">
        <TabsList>
          <TabsTrigger value="content">Content Items</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-4">
          {contentItems.length === 0 ? (
            <Card>
              <CardContent className="pt-6">
                <div className="text-center text-gray-500">
                  <FileText className="h-12 w-12 mx-auto mb-4" />
                  <p>No content items found. Start editing pages to create content.</p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {contentItems.map(([id, item]) => (
                <Card key={id}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      {item.type === 'image' ? (
                        <Image className="h-4 w-4" />
                      ) : (
                        <FileText className="h-4 w-4" />
                      )}
                      <CardTitle className="text-sm font-medium">{id}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-gray-600 truncate">
                      {item.type === 'image' ? (
                        <img src={item.content} alt={id} className="h-16 w-16 object-cover rounded" />
                      ) : (
                        <div dangerouslySetInnerHTML={{ __html: item.content.substring(0, 100) + '...' }} />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Content Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">{contentItems.length}</div>
                  <div className="text-sm text-gray-600">Total Content Items</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">
                    {contentItems.filter(([, item]) => item.type === 'text').length}
                  </div>
                  <div className="text-sm text-gray-600">Text Items</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">
                    {contentItems.filter(([, item]) => item.type === 'image').length}
                  </div>
                  <div className="text-sm text-gray-600">Image Items</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentManagement;
