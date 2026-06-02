
import { Link } from 'react-router-dom';
import Card from './Card';

interface ExperimentCardProps {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  image: string;
  type: 'analog' | 'digital';
}

export default function ExperimentCard({ id, title, description, difficulty, image, type }: ExperimentCardProps) {
  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800'
  };

  const difficultyLabels = {
    beginner: '入门',
    intermediate: '中级',
    advanced: '高级'
  };

  return (
    <Link to={`/${type === 'analog' ? 'analog' : 'digital'}-circuits/${id}`}>
      <Card className="card-hover h-full">
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[difficulty]}`}>
              {difficultyLabels[difficulty]}
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 line-clamp-2">{description}</p>
          <div className="mt-4 flex items-center text-primary-600 font-medium">
            <span>查看详情</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Card>
    </Link>
  );
}
