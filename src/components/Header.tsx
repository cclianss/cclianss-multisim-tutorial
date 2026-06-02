
import { Link } from 'react-router-dom';
import { BookOpen, Zap, Cpu, Lightbulb, Home } from 'lucide-react';

export default function Header() {
  return (
    <header className="gradient-bg shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 text-white">
            <Zap className="h-8 w-8 text-accent-400" />
            <span className="text-2xl font-bold font-serif">Multisim教程</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className="flex items-center space-x-1 px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <Home className="h-4 w-4" />
              <span>首页</span>
            </Link>
            <Link 
              to="/getting-started" 
              className="flex items-center space-x-1 px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <BookOpen className="h-4 w-4" />
              <span>入门指南</span>
            </Link>
            <Link 
              to="/analog-circuits" 
              className="flex items-center space-x-1 px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <Zap className="h-4 w-4" />
              <span>模拟电路</span>
            </Link>
            <Link 
              to="/digital-circuits" 
              className="flex items-center space-x-1 px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <Cpu className="h-4 w-4" />
              <span>数字电路</span>
            </Link>
            <Link 
              to="/tips-tricks" 
              className="flex items-center space-x-1 px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <Lightbulb className="h-4 w-4" />
              <span>技巧进阶</span>
            </Link>
          </div>

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </nav>
      </div>
    </header>
  );
}

function MobileMenu() {
  return (
    <div className="relative group">
      <button className="p-2 text-white hover:bg-white/10 rounded-lg">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
        <div className="py-2">
          <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-primary-50">首页</Link>
          <Link to="/getting-started" className="block px-4 py-2 text-gray-700 hover:bg-primary-50">入门指南</Link>
          <Link to="/analog-circuits" className="block px-4 py-2 text-gray-700 hover:bg-primary-50">模拟电路</Link>
          <Link to="/digital-circuits" className="block px-4 py-2 text-gray-700 hover:bg-primary-50">数字电路</Link>
          <Link to="/tips-tricks" className="block px-4 py-2 text-gray-700 hover:bg-primary-50">技巧进阶</Link>
        </div>
      </div>
    </div>
  );
}
