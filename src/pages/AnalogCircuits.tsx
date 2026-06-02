
import { analogExperiments } from '../data/analogExperiments';
import ExperimentCard from '../components/ExperimentCard';
import { Zap } from 'lucide-react';

export default function AnalogCircuits() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 p-3 bg-orange-50 rounded-full mb-4">
            <Zap className="h-6 w-6 text-accent-600" />
          </div>
          <h1 className="text-4xl font-bold font-serif text-gray-900 mb-4">
            模拟电路实验
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            从基础RC电路到复杂运放应用，掌握模拟电子技术的核心知识
          </p>
        </div>

        {/* Experiment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {analogExperiments.map((experiment) => (
            <ExperimentCard
              key={experiment.id}
              id={experiment.id}
              title={experiment.title}
              description={experiment.description}
              difficulty={experiment.difficulty}
              image={experiment.circuitImage}
              type="analog"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
