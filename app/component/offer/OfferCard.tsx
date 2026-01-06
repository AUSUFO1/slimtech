"use client";

interface OfferCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  id: number;
  isActive: boolean;
  onTouch: (id: number) => void;
}

const OfferCard: React.FC<OfferCardProps> = ({ 
  icon, 
  title, 
  description, 
  id,
  isActive,
  onTouch 
}) => {
  const handleClick = () => {
    onTouch(id);
  };

  return (
    <div 
      onClick={handleClick}
      className={`p-6 rounded-lg shadow-md w-full flex flex-col transition-colors duration-300 cursor-pointer
        ${isActive ? 'bg-brand-dark' : 'bg-white md:hover:bg-brand-dark'}
        group`}
    >
      {/* Icon + Title inline */}
      <div className="flex items-center gap-3 mb-4">
        <div className={`flex-shrink-0 transition-colors duration-300 
          ${isActive ? 'text-white' : 'md:group-hover:text-white'}`}>
          {icon}
        </div>
        <h4 className={`text-lg font-bold transition-colors duration-300
          ${isActive ? 'text-white' : 'text-brand-dark md:group-hover:text-white'}`}>
          {title}
        </h4>
      </div>
      {/* Description left-aligned */}
      <p className={`text-left transition-colors duration-300
        ${isActive ? 'text-white' : 'text-gray-700 md:group-hover:text-white'}`}>
        {description}
      </p>
    </div>
  );
};

export default OfferCard;