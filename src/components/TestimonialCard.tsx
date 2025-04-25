
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  rating: number;
}

const TestimonialCard = ({
  quote,
  name,
  role,
  company,
  avatar,
  rating
}: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-gamboge fill-gamboge' : 'text-gray-300'}`}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <div className="mr-4">
          {avatar ? (
            <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
          ) : (
            <div className="w-12 h-12 rounded-full bg-yale text-white flex items-center justify-center font-bold">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-bold text-oxford">{name}</h4>
          <p className="text-sm text-gray-600">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
