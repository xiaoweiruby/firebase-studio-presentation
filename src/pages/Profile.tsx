import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Star } from 'lucide-react';

/**
 * 围巾哥萧尘个人简介页面组件
 * 展示演讲者的技术背景和专业经历
 */
export default function Profile() {


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* 个人信息头部 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block mb-8">
            <img
              src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20tech%20speaker%20avatar%20wearing%20scarf%20confident%20smile%20modern%20style&image_size=square"
              alt="围巾哥萧尘"
              className="w-32 h-32 rounded-full border-4 border-orange-500 shadow-2xl"
            />
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center border-4 border-white">
              <Star className="w-5 h-5 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-4">
            围巾哥萧尘
          </h1>
          <p className="text-2xl text-orange-400 mb-6">
            VibeCoding践行者 | AI编程工具类优质作者 | 黑客马拉松优秀选手
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            专注于现代Web开发技术，致力于推广AI辅助编程理念。在AI编程技术领域有丰富的实战经验，
            曾在多个黑客马拉松比赛中获得优异成绩。作为VibeCoding的践行者，倡导高效、优雅的编程方式，
            帮助开发者提升技术水平。
          </p>
          
          {/* 社交链接 */}
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Twitter, href: '#', label: 'Twitter' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: '#', label: 'Email' }
            ].map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors border border-white/20"
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>







        {/* 演讲主题关联 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-2xl p-8 border border-orange-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              🎯 本次演讲主题
            </h3>
            <h4 className="text-3xl font-bold text-orange-400 mb-6">
              "Firebase Studio: AI时代的开发新范式"
            </h4>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-6">
              分享Firebase Studio如何革命性地改变开发流程，探讨AI驱动开发的最佳实践，
              帮助开发者掌握未来开发工具的核心能力。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['AI辅助开发', 'Firebase生态', '云原生架构', '开发效率提升'].map((topic, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full border border-orange-500/30"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}