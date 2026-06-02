
import { digitalExperiments } from '../data/digitalExperiments';
import ExperimentCard from '../components/ExperimentCard';
import { Cpu } from 'lucide-react';

export default function DigitalCircuits() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 p-3 bg-green-50 rounded-full mb-4">
            <Cpu className="h-6 w-6 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold font-serif text-gray-900 mb-4">
            数字电路实验
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            探索逻辑门、触发器和计数器，学习数字系统设计的基础知识
          </p>
        </div>

        {/* Experiment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {digitalExperiments.map((experiment) => (
            <ExperimentCard
              key={experiment.id}
              id={experiment.id}
              title={experiment.title}
              description={experiment.description}
              difficulty={experiment.difficulty}
              image={experiment.circuitImage}
              type="digital"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
