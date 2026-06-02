import { useParams, Link } from 'react-router-dom';
import { digitalExperiments } from '../data/digitalExperiments';
import Card from '../components/Card';
import StepItem from '../components/StepItem';
import { ChevronLeft, CheckCircle, List, Table, BookOpen } from 'lucide-react';

export default function DigitalDetail() {
  const { id } = useParams<{ id: string }>();
  const experiment = digitalExperiments.find(exp => exp.id === id);

  if (!experiment) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900">实验未找到</h1>
        <Link to="/digital-circuits" className="text-primary-600 hover:underline mt-4 inline-block">
          返回列表
        </Link>
      </div>
    );
  }

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
    <div className="py-12">
      <div className="container mx-auto px-4">
        <Link 
          to="/digital-circuits" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          返回实验列表
        </Link>

        <div className="mb-12 max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[experiment.difficulty]}`}>
              {difficultyLabels[experiment.difficulty]}
            </span>
          </div>
          <h1 className="text-4xl font-bold font-serif text-gray-900 mb-4">
            {experiment.title}
          </h1>
          <p className="text-xl text-gray-600">
            {experiment.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <img 
                src={experiment.circuitImage} 
                alt={experiment.title} 
                className="w-full h-80 object-cover rounded-t-xl"
              />
            </Card>

            <Card>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <BookOpen className="w-6 h-6 mr-3 text-primary-600" />
                  实验原理
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {experiment.theory}
                </p>
              </div>
            </Card>

            {experiment.truthTable && (
              <Card>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Table className="w-6 h-6 mr-3 text-primary-600" />
                    真值表
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <tbody>
                        {experiment.truthTable.map((row, rowIndex) => (
                          <tr key={rowIndex} className={rowIndex === 0 ? 'bg-gray-100' : ''}>
                            {row.map((cell, cellIndex) => (
                              <td 
                                key={cellIndex}
                                className={`border px-4 py-2 text-center ${
                                  rowIndex === 0 ? 'font-semibold text-gray-900' : 'text-gray-700'
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Card>
            )}

            <Card>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <List className="w-6 h-6 mr-3 text-primary-600" />
                  操作步骤
                </h2>
                <div className="space-y-2">
                  {experiment.steps.map((step, index) => (
                    <StepItem 
                      key={index}
                      number={index + 1}
                      content={step}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">所需元件</h3>
                <ul className="space-y-2">
                  {experiment.components.map((component, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {component}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2 text-green-600" />
                  预期结果
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {experiment.expectedResults}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
