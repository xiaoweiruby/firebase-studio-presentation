import { motion } from 'framer-motion';
import { Heart, Users, Star, Award, Coffee, Lightbulb } from 'lucide-react';

/**
 * 致谢页面组件
 * 展示对支持者、合作伙伴和社区的感谢
 */
const Thanks = () => {
  // 感谢对象列表
  const thanksList = [
    {
      icon: Users,
      title: '开发团队',
      description: '感谢所有参与项目开发的工程师们',
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      iconColor: 'text-blue-300'
    },
    {
      icon: Star,
      title: '技术社区',
      description: '感谢开源社区提供的宝贵资源和支持',
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
      iconColor: 'text-purple-300'
    },
    {
      icon: Award,
      title: '合作伙伴',
      description: '感谢所有合作伙伴的信任与支持',
      color: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-500/30',
      iconColor: 'text-orange-300'
    },
    {
      icon: Coffee,
      title: '用户反馈',
      description: '感谢用户们的宝贵意见和建议',
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30',
      iconColor: 'text-green-300'
    },
    {
      icon: Lightbulb,
      title: '创新灵感',
      description: '感谢每一个创意和想法的贡献者',
      color: 'from-yellow-500/20 to-amber-500/20',
      borderColor: 'border-yellow-500/30',
      iconColor: 'text-yellow-300'
    },
    {
      icon: Heart,
      title: '所有支持者',
      description: '感谢每一位关注和支持我们的朋友',
      color: 'from-rose-500/20 to-pink-500/20',
      borderColor: 'border-rose-500/30',
      iconColor: 'text-rose-300'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-12 h-12 text-rose-400 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              致谢
            </h1>
            <Heart className="w-12 h-12 text-rose-400 ml-4" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            感谢每一位为AI时代开发新范式贡献力量的朋友们。
            <br />
            正是因为有了大家的支持，我们才能在技术创新的道路上不断前行。
          </p>
        </motion.div>

        {/* 感谢卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {thanksList.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${item.color} backdrop-blur-sm rounded-2xl border ${item.borderColor} p-8 hover:scale-105 transition-all duration-300 group`}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-black/30 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${item.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* 特别感谢区域 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl border border-purple-500/20 p-12 text-center"
        >
          <div className="flex items-center justify-center mb-8">
            <Star className="w-8 h-8 text-yellow-400 mr-2" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              特别感谢
            </h2>
            <Star className="w-8 h-8 text-yellow-400 ml-2" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-black/20 rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">🚀 技术支持</h3>
              <p className="text-gray-300">
                感谢 Firebase、React、Vite 等开源技术栈，
                为我们提供了强大的开发基础。
              </p>
            </div>
            <div className="bg-black/20 rounded-2xl p-6 border border-pink-500/20">
              <h3 className="text-xl font-semibold text-pink-300 mb-3">🎨 设计灵感</h3>
              <p className="text-gray-300">
                感谢设计社区的创意分享，
                让我们的界面更加美观和用户友好。
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">💝 致所有人</h3>
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              每一行代码、每一个创意、每一次反馈都是珍贵的贡献。
              <br />
              让我们一起在AI时代的浪潮中，创造更美好的数字世界！
            </p>
            <div className="flex items-center justify-center mt-6 space-x-2">
              <Heart className="w-6 h-6 text-rose-400 animate-pulse" />
              <span className="text-rose-300 font-medium">感谢有你</span>
              <Heart className="w-6 h-6 text-rose-400 animate-pulse" />
            </div>
          </div>
        </motion.div>

        {/* 底部装饰 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="flex items-center justify-center space-x-4 text-gray-400">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-400" />
            <span className="text-sm">Made with ❤️ for the community</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-400" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Thanks;