
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface PricingFeature {
  feature: string;
  included: boolean;
}

interface PricingCardProps {
  plan: string;
  price: string;
  description: string;
  features: PricingFeature[];
  ctaText: string;
  ctaLink: string;
  popular?: boolean;
}

const PricingCard = ({
  plan,
  price,
  description,
  features,
  ctaText,
  ctaLink,
  popular = false
}: PricingCardProps) => {
  return (
    <div className={`rounded-lg overflow-hidden ${popular ? 'border-2 border-yale shadow-lg' : 'border border-gray-200'}`}>
      {popular && (
        <div className="bg-yale text-white font-medium py-1 px-4 text-center text-sm">
          Most Popular
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{plan}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
          {price !== 'Custom' && <span className="text-gray-600">/month</span>}
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <Button 
          className={`w-full mb-6 ${popular ? 'bg-yale text-white hover:bg-yale/90' : 'bg-white border border-yale text-yale hover:bg-yale/10'}`}
          asChild
        >
          <Link to={ctaLink}>{ctaText}</Link>
        </Button>
        
        <div className="space-y-3">
          {features.map((item, index) => (
            <div key={index} className="flex items-center">
              <Check className={`mr-2 h-5 w-5 flex-shrink-0 ${item.included ? 'text-yale' : 'text-gray-300'}`} />
              <span className={item.included ? 'text-gray-700' : 'text-gray-400'}>{item.feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
