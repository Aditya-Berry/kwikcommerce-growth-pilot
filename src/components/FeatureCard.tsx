
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, link, className }: FeatureCardProps) => {
  return (
    <div className={cn("bg-white p-6 rounded-lg shadow-md card-hover", className)}>
      <div className="feature-icon mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-oxford">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a 
        href={link}
        className="inline-flex items-center gap-1 text-yale font-medium hover:gap-2 transition-all"
      >
        Explore Feature <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
};

export default FeatureCard;
