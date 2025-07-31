import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Award, Code, Users, Zap, BookOpen, Star } from 'lucide-react';

/**
 * 围巾哥萧尘个人简介页面组件
 * 展示演讲者的技术背景和专业经历
 */
export default function Profile() {
  // 技能数据
  const skills = [
    { name: 'Firebase', level: 95, color: 'bg-orange-500' },
    { name: 'React/Vue', level: 90, color: 'bg-blue-500' },
    { name: 'Node.js', level: 85, color: 'bg-green-500' },
    { name: 'AI/ML', level: 80, color: 'bg-purple-500' },
    { name: 'Cloud Architecture', level: 88, color: 'bg-cyan-500' },
    { name: 'DevOps', level: 82, color: 'bg-red-500' }
  ];

  // 成就数据
  const achievements = [
    {
      icon: Users,
      title: '技术社区贡献',
      description: '活跃于各大技术社区，分享Firebase最佳实践',
      stats: '10K+ 关注者'
    },
    {
      icon: Code,
      title: '开源项目',
      description: '维护多个Firebase相关的开源项目',
      stats: '50+ 项目'
    },
    {
      icon: BookOpen,
      title: '技术文章',
      description: '发表Firebase和云开发相关技术文章',
      stats: '100+ 文章'
    },
    {
      icon: Award,
      title: '行业认证',
      description: 'Google Cloud认证架构师',
      stats: 'GCP 专家'
    }
  ];

  // 项目经验
  const projects = [
    {
      title: 'Firebase Studio 深度实践',
      description: '深入研究Firebase Studio的AI功能，探索最佳开发模式',
      tech: ['Firebase Studio', 'Gemini AI', 'Project IDX'],
      impact: '帮助团队提升50%开发效率'
    },
    {
      title: '企业级Firebase架构设计',
      description: '为多家企业设计基于Firebase的云原生应用架构',
      tech: ['Firebase', 'Cloud Functions', 'Firestore'],
      impact: '服务100万+用户'
    },
    {
      title: 'AI驱动的开发工具链',
      description: '构建集成AI能力的开发工具，提升开发者体验',
      tech: ['AI/ML', 'DevOps', 'Automation'],
      impact: '开发效率提升3倍'
    }
  ];

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
            Firebase Studio 技术布道师 & 云开发专家
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            专注于Firebase生态系统和AI驱动开发工具的研究与实践，致力于推广现代化云开发理念，
            帮助开发者拥抱AI时代的开发新范式。
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

        {/* 技能展示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            🛠️ 技术技能
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + 0.1 * index }}
                    className={`h-3 rounded-full ${skill.color}`}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 成就展示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            🏆 专业成就
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    {achievement.description}
                  </p>
                  <div className="text-orange-400 font-bold">
                    {achievement.stats}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 项目经验 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            💼 项目经验
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <h3 className="text-xl font-bold text-orange-400 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-green-400">
                  <Zap className="w-4 h-4 mr-2" />
                  <span className="font-semibold">{project.impact}</span>
                </div>
              </motion.div>
            ))}
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