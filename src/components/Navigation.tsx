import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Home, Clock, Code, User, Sparkles, Heart } from 'lucide-react';

/**
 * 网站导航组件
 * 提供响应式导航菜单和页面路由
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // 导航菜单项
  const navItems = [
    {
      path: '/',
      label: '首页',
      icon: Home
    },
    {
      path: '/profile',
      label: '演讲者',
      icon: User
    },
    {
      path: '/timeline',
      label: '发展历程',
      icon: Clock
    },
    {
      path: '/demo',
      label: '现场演示',
      icon: Sparkles
    },
    {
      path: '/cases',
      label: '实战案例',
      icon: Code
    },
    {
      path: '/thanks',
      label: '致谢',
      icon: Heart
    }
  ];

  /**
   * 切换移动端菜单显示状态
   */
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  /**
   * 关闭移动端菜单
   */
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-white font-bold text-xl"
            onClick={closeMenu}
          >
            <img src="/icon-192.png" alt="Logo" className="w-8 h-8" />
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">AI时代的开发新范式</span>
          </Link>

          {/* 桌面端导航菜单 */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* 移动端菜单按钮 */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="切换菜单"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* 移动端导航菜单 */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-2.5 px-4 py-2.5 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </nav>
  );
}