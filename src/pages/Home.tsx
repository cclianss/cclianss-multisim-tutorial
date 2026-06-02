import { Link } from 'react-router-dom';
import { BookOpen, Zap, Cpu, Lightbulb, CheckCircle, Award } from 'lucide-react';
import Card from '../components/Card';

export default function Home() {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary-600" />,
      title: '入门指南',
      description: '从软件安装到基础操作，带你快速上手Multisim',
      link: '/getting-started',
      color: 'from-blue-50 to-blue-100'
    },
    {
      icon: <Zap className="h-8 w-8 text-accent-600" />,
      title: '模拟电路',
      description: 'RC电路、运放、整流电路等经典模拟实验',
      link: '/analog-circuits',
      color: 'from-orange-50 to-orange-100'
    },
    {
      icon: <Cpu className="h-8 w-8 text-green-600" />,
      title: '数字电路',
      description: '逻辑门、触发器、计数器等数字系统实验',
      link: '/digital-circuits',
      color: 'from-green-50 to-green-100'
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-purple-600" />,
      title: '技巧进阶',
      description: '高级仿真功能和实用技巧，提升你的效率',
      link: '/tips-tricks',
      color: 'from-purple-50 to-purple-100'
    }
  ];

  const highlights = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: '循序渐进的内容',
      description: '从基础操作到高级实验，一步步引导你掌握Multisim'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: '实用的实验案例',
      description: '精选模电、数电经典实验，每个都有详细步骤'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: '清晰的图文说明',
      description: '每个步骤都有详细说明，让你轻松跟随操作'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: '理论与实践结合',
      description: '每个实验都包含原理讲解和操作步骤'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <Zap className="h-5 w-5 text-accent-400" />
              <span className="text-sm">NI Multisim 14.x 官方教程</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">
              掌握 Multisim 电路仿真
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
              从模拟电路到数字系统，从入门到精通，一站式学习平台
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/getting-started" 
                className="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg"
              >
                开始学习
              </Link>
              <Link 
                to="/analog-circuits" 
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-colors border border-white/30"
              >
                浏览实验
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">
              探索我们的教程
            </h2>
            <p className="text-gray-600">选择适合你的学习路径，开始电子电路之旅</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link}>
                <Card className={`card-hover bg-gradient-to-br ${feature.color} h-full`}>
                  <div className="p-6">
                    <div className="mb-4 p-3 bg-white rounded-lg w-fit shadow-sm">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <div className="flex items-center text-primary-600 font-medium text-sm">
                      <span>了解更多</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-serif text-gray-900 mb-6">
                为什么选择我们的教程？
              </h2>
              <div className="space-y-6">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop" 
                alt="Multisim Tutorial" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">实践导向</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-accent-50 rounded-full px-4 py-2 mb-6">
              <Award className="h-5 w-5 text-accent-600" />
              <span className="text-sm text-accent-700">开始你的电子之旅</span>
            </div>
            <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">
              准备好开始学习了吗？
            </h2>
            <p className="text-gray-600 mb-8">
              加入数千名学习者的行列，掌握Multisim电路仿真技能
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/getting-started" 
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                免费开始学习
              </Link>
              <Link 
                to="/analog-circuits" 
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                浏览全部实验
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
