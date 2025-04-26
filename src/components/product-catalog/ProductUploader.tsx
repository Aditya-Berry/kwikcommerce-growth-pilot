
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductUploaderProps {
  onSuccess: () => void;
}

const ProductUploader = ({ onSuccess }: ProductUploaderProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // In a real app, you would upload these files to your backend
    console.log('Files to upload:', acceptedFiles);
    // Simulate upload success
    setTimeout(onSuccess, 2000);
  }, [onSuccess]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp'],
      'text/csv': ['.csv'],
      'application/json': ['.json']
    }
  });

  return (
    <div className="space-y-6">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-yale bg-yale/5' : 'border-gray-300 hover:border-yale'}`}
      >
        <input {...getInputProps()} />
        <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
        <p className="text-lg font-medium mb-2">
          {isDragActive ? 'Drop your files here' : 'Drag & drop product images here'}
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Support for JPG, PNG, WebP — or upload a CSV/JSON file for bulk import
        </p>
        <Button variant="outline">Browse Files</Button>
      </div>
    </div>
  );
};

export default ProductUploader;
