
import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-accent-400" />
              <span className="text-xl font-bold font-serif">Multisim教程</span>
            </div>
            <p className="text-gray-400 mb-4">
              为电子工程学习者提供全面的Multisim仿真教程，
              涵盖模拟电路、数字电路实验，助力您的电子学习之路。
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">首页</a></li>
              <li><a href="/getting-started" className="text-gray-400 hover:text-white transition-colors">入门指南</a></li>
              <li><a href="/analog-circuits" className="text-gray-400 hover:text-white transition-colors">模拟电路</a></li>
              <li><a href="/digital-circuits" className="text-gray-400 hover:text-white transition-colors">数字电路</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">资源</h3>
            <ul className="space-y-2">
              <li><a href="/tips-tricks" className="text-gray-400 hover:text-white transition-colors">技巧进阶</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">常见问题</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">联系我们</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2026 Multisim教程. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
}
