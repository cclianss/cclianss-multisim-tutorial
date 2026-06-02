import Card from '../components/Card';
import { Lightbulb, Zap, BarChart3, Keyboard, Settings, Award, BookOpen } from 'lucide-react';

export default function TipsTricks() {
  const tips = [
    {
      icon: <Keyboard className="h-6 w-6 text-primary-600" />,
      title: '实用快捷键',
      items: [
        'Ctrl+N: 新建电路图',
        'Ctrl+S: 保存文件',
        'Ctrl+Z: 撤销操作',
        'Ctrl+Y: 重做操作',
        'R: 旋转选中元件',
        'Space: 运行/暂停仿真',
        'Delete: 删除选中元件',
        'Ctrl+J: 添加节点',
        'Ctrl+D: 复制元件',
        'Ctrl+G: 对齐元件'
      ]
    },
    {
      icon: <Settings className="h-6 w-6 text-accent-600" />,
      title: '高级仿真设置',
      items: [
        '瞬态分析：设置合适的仿真时间和步长',
        '交流扫描：选择合适的频率范围',
        '直流工作点：查看各节点静态电压',
        '参数扫描：分析参数变化影响',
        '蒙特卡洛：统计分析元件容差',
        '傅里叶分析：分析信号频谱成分'
      ]
    },
    {
      icon: <Zap className="h-6 w-6 text-green-600" />,
      title: '电路调试技巧',
      items: [
        '逐步添加元件和连线，分步验证',
        '使用探针查看中间节点电压',
        '检查电源和地线连接是否正确',
        '查看元件参数是否合理',
        '从简单电路开始，逐步复杂化',
        '使用网络名称(Net Name)整理复杂电路图'
      ]
    },
    {
      icon: <Award className="h-6 w-6 text-purple-600" />,
      title: '最佳实践',
      items: [
        '给元件和网络有意义的命名',
        '合理布置元件，保持电路清晰',
        '及时保存文件，避免丢失',
        '使用子电路(Subcircuit)组织复杂电路',
        '为电路图添加注释和说明',
        '定期备份项目文件'
      ]
    }
  ];

  const advancedAnalyses = [
    {
      title: '直流工作点分析',
      description: '分析电路在直流稳态下各节点的电压和支路电流',
      usage: 'Simulate → Analyses → DC Operating Point'
    },
    {
      title: '交流分析',
      description: '分析电路的频率响应，包括幅频特性和相频特性',
      usage: 'Simulate → Analyses → AC Analysis'
    },
    {
      title: '瞬态分析',
      description: '分析电路在时域中的动态响应',
      usage: 'Simulate → Analyses → Transient Analysis'
    },
    {
      title: '参数扫描分析',
      description: '改变某个元件参数，观察对电路性能的影响',
      usage: 'Simulate → Analyses → Parameter Sweep'
    },
    {
      title: '温度扫描',
      description: '分析温度变化对电路特性的影响',
      usage: '在参数扫描中选择温度作为变量'
    },
    {
      title: '蒙特卡洛分析',
      description: '考虑元件容差的统计分析，评估良率',
      usage: 'Simulate → Analyses → Monte Carlo'
    },
    {
      title: '傅里叶分析',
      description: '分析信号的频谱成分和谐波失真',
      usage: 'Simulate → Analyses → Fourier Analysis'
    },
    {
      title: '噪声分析',
      description: '分析电路中的噪声特性和信噪比',
      usage: 'Simulate → Analyses → Noise Analysis'
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 p-3 bg-purple-50 rounded-full mb-4">
            <Lightbulb className="h-6 w-6 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold font-serif text-gray-900 mb-4">
            技巧与进阶
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            掌握Multisim的高级功能，提高仿真效率和精度
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {tips.map((tip, index) => (
            <Card key={index} className="card-hover">
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    {tip.icon}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {tip.title}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {tip.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3 text-gray-700">
                      <svg className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Advanced Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4 flex items-center justify-center">
              <BarChart3 className="h-8 w-8 mr-3 text-primary-600" />
              高级分析功能
            </h2>
            <p className="text-gray-600">Multisim提供多种高级分析功能，帮助深入分析电路特性</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advancedAnalyses.map((analysis, index) => (
              <Card key={index} className="card-hover">
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {analysis.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {analysis.description}
                  </p>
                  <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded-lg">
                    <span className="font-medium">使用方法：</span> {analysis.usage}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* 电路分析方法 */}
        <div className="max-w-5xl mx-auto mt-16">
          <Card>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-primary-600" />
                电路分析方法
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">1. 直流工作点分析</h3>
                  <p className="text-gray-600">用于计算电路在直流稳态条件下各节点的电压和各支路的电流。这是分析模拟电路的基础，可以帮助确定晶体管、运放等器件的静态工作点。</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">2. 交流分析</h3>
                  <p className="text-gray-600">用于分析电路的频率响应特性。通过扫描不同频率的交流信号，可以得到电路的幅频特性和相频特性曲线，常用于分析滤波器、放大器等电路的频率特性。</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">3. 瞬态分析</h3>
                  <p className="text-gray-600">用于观察电路在时域中的动态响应。可以看到信号随时间变化的波形，常用于分析电路的暂态过程，如RC充放电、脉冲响应等。</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">4. 参数扫描分析</h3>
                  <p className="text-gray-600">通过改变某个元件的参数（如电阻值、电容值），观察电路性能的变化。这对于分析元件参数对电路性能的影响非常有用。</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">5. 蒙特卡洛分析</h3>
                  <p className="text-gray-600">考虑元件参数的容差范围，进行多次随机仿真，统计分析电路性能的分布情况。这对于评估批量生产时电路的良率非常有价值。</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
