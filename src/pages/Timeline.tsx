import { motion } from 'framer-motion';
import { Calendar, Zap, Users, Sparkles } from 'lucide-react';

/**
 * Firebase Studio发展历程时间线页面组件
 * 展示从Envolve到Firebase Studio的完整发展历程
 */
export default function Timeline() {
  // 发展历程数据
  const timelineData = [
    {
      year: '2011',
      title: 'Envolve 创立',
      description: 'James Tamplin和Andrew Lee创立Envolve，提供在线聊天API服务',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      year: '2012',
      title: 'Firebase 诞生',
      description: '从Envolve分离出实时数据库架构，Firebase正式发布',
      icon: Zap,
      color: 'bg-orange-500'
    },
    {
      year: '2014',
      title: 'Google 收购',
      description: 'Google收购Firebase，开始整合Google云服务生态',
      icon: Calendar,
      color: 'bg-green-500'
    },
    {
      year: '2016-2020',
      title: '产品线扩展',
      description: '推出Authentication、Cloud Functions、Analytics等服务',
      icon: Sparkles,
      color: 'bg-purple-500'
    },
    {
      year: '2024',
      title: 'Firebase Studio',
      description: '发布AI驱动的开发环境，集成Gemini和Project IDX',
      icon: Sparkles,
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* 页面标题 */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            Firebase Studio 发展历程
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            从2011年的Envolve聊天服务到2024年的AI驱动开发平台，见证Firebase的技术演进之路
          </p>
        </motion.div>

        {/* 时间线 */}
        <div className="relative max-w-4xl mx-auto">
          {/* 中央线条 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-orange-500"></div>
          
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            const IconComponent = item.icon;
            
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-16 ${
                  isEven ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* 内容卡片 */}
                <div className={`w-5/12 ${isEven ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center mr-4`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{item.year}</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-orange-400 mb-3">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* 中央节点 */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-orange-500 z-10"></div>
              </motion.div>
            );
          })}
        </div>

        {/* 底部总结 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-2xl p-8 border border-orange-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              🚀 Firebase Studio: AI时代的开发革命
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              从简单的聊天API到AI驱动的全栈开发平台，Firebase Studio代表着开发工具的未来方向
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}