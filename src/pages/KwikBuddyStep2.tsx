
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Tag, Grid2x2, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import DashboardShell from '@/components/DashboardShell';
import ProductUploader from '@/components/product-catalog/ProductUploader';
import ProductPreview from '@/components/product-catalog/ProductPreview';
import CatalogAIAssistant from '@/components/product-catalog/CatalogAIAssistant';

const KwikBuddyStep2 = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'upload' | 'preview'>('upload');

  const handleNext = () => {
    navigate('/dashboard/kwikbuddy/step3');
  };

  const handleBack = () => {
    navigate('/dashboard/kwikbuddy/step1');
  };

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-oxford mb-2">Product Cataloging</h1>
          <p className="text-gray-600">Upload and manage your product catalog with AI-powered assistance.</p>
        </div>

        <div className="flex gap-4 border-b border-gray-200">
          <Button
            variant={activeTab === 'upload' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('upload')}
            className="relative"
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload Products
          </Button>
          <Button
            variant={activeTab === 'preview' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('preview')}
            className="relative"
          >
            <Grid2x2 className="w-4 h-4 mr-2" />
            Preview Catalog
          </Button>
        </div>

        <div className="mt-6">
          {activeTab === 'upload' ? (
            <ProductUploader onSuccess={() => {
              toast({
                title: "Products uploaded successfully",
                description: "Your products have been uploaded and processed by AI."
              });
              setActiveTab('preview');
            }} />
          ) : (
            <ProductPreview />
          )}
        </div>

        <div className="fixed bottom-0 right-0 p-6 bg-white border-t border-gray-200 w-full md:w-[calc(100%-16rem)]">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <Button variant="outline" onClick={handleBack}>
              Back
            </Button>
            <Button onClick={handleNext} className="bg-yale text-white hover:bg-yale/90">
              Continue to SEO Setup
            </Button>
          </div>
        </div>

        <CatalogAIAssistant />
      </div>
    </DashboardShell>
  );
};

export default KwikBuddyStep2;
