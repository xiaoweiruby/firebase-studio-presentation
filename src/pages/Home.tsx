import { motion } from 'framer-motion';
import { ArrowRight, Zap, Users, Code, Sparkles, Play, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Firebase Studio演讲网站主页组件
 * 包含英雄区块、核心亮点展示和导航
 */
export default function Home() {
  // Firebase Studio核心特性
  const features = [
    {
      icon: Zap,
      title: 'AI驱动开发',
      description: '集成Gemini AI，提供智能代码生成、调试和优化建议',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Code,
      title: '无代码原型',
      description: 'App Prototyping agent让您用自然语言快速构建应用原型',
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: Users,
      title: '云端协作',
      description: '基于Project IDX的云端IDE，支持团队实时协作开发',
      color: 'from-green-400 to-cyan-500'
    }
  ];

  // 统计数据
  const stats = [
    { number: '2024', label: '最新发布' },
    { number: '3+', label: '免费工作空间' },
    { number: '30+', label: 'GDP会员工作空间' },
    { number: '∞', label: '开发可能性' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* 英雄区块 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 背景动画 */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10 animate-pulse"></div>
          {/* 浮动元素 */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-orange-400 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5
              }}
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + i * 10}%`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              Firebase
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                {' '}Studio
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto">
              AI时代的开发新范式
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              探索Google最新推出的AI驱动开发环境，体验无代码原型设计的强大能力，
              开启云端协作开发的全新篇章
            </p>
          </motion.div>

          {/* CTA按钮组 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link
              to="/timeline"
              className="group flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Play className="w-5 h-5 mr-2" />
              开始探索
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/cases"
              className="flex items-center px-8 py-4 bg-white/10 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <Code className="w-5 h-5 mr-2" />
              查看案例
            </Link>
          </motion.div>

          {/* 统计数据 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 核心特性展示 */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              🚀 核心特性
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Firebase Studio集成了最先进的AI技术，为开发者提供前所未有的开发体验
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 演讲者介绍预览 */}
      <section className="py-20 bg-gradient-to-r from-orange-500/10 to-purple-500/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img
                    src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20tech%20speaker%20avatar%20wearing%20scarf%20confident%20smile%20modern%20style&image_size=square"
                    alt="围巾哥萧尘"
                    className="w-32 h-32 rounded-full border-4 border-orange-500 shadow-2xl"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    👋 演讲者：围巾哥萧尘
                  </h3>
                  <p className="text-xl text-orange-400 mb-4">
                    Firebase Studio 技术布道师 & 云开发专家
                  </p>
                  <p className="text-gray-300 mb-6">
                    专注于Firebase生态系统和AI驱动开发工具的研究与实践，
                    致力于推广现代化云开发理念。
                  </p>
                  <Link
                    to="/profile"
                    className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    了解更多
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 底部CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-12 border border-blue-500/30"
          >
            <Sparkles className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-6">
              准备好探索AI开发的未来了吗？
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              深入了解Firebase Studio的发展历程，学习实战案例，掌握AI辅助开发的核心技能
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/timeline"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300"
              >
                查看发展历程
              </Link>
              <Link
                to="/cases"
                className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                学习实战案例
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}