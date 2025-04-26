
import React, { useState } from 'react';
import { Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductPreview = () => {
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-x-2">
          <Button
            variant={viewMode === 'desktop' ? 'default' : 'outline'}
            onClick={() => setViewMode('desktop')}
            size="sm"
          >
            Desktop
          </Button>
          <Button
            variant={viewMode === 'mobile' ? 'default' : 'outline'}
            onClick={() => setViewMode('mobile')}
            size="sm"
          >
            Mobile
          </Button>
        </div>
      </div>

      <div className={`grid gap-6 ${viewMode === 'desktop' ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1'}`}>
        <div className="relative group">
          <div className="aspect-square rounded-lg bg-gray-100 mb-2">
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
              alt="Product"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h3 className="font-medium">Sample Product</h3>
          <p className="text-sm text-gray-600">Product description goes here...</p>
          <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <Edit className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
