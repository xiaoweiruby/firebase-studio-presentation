import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Lightbulb, 
  Bot, 
  Hammer, 
  Play, 
  FileText, 
  Code2,
  ExternalLink,
  Zap,
  Database,
  Shield,
  Cloud,
  BarChart3,
  Smartphone,
  Globe,
  Settings
} from 'lucide-react';

/**
 * Firebase理论基础数据项类型定义
 */
interface TheorySection {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  gradient: string;
  items: {
    title: string;
    description: string;
    link: string;
    features: string[];
  }[];
}

/**
 * Firebase理论基础页面组件
 * 基于Firebase官方文档结构，提供完整的理论知识体系
 */
export default function TheoryBase() {
  // Firebase理论基础数据 - 基于官方文档结构
  const theorySections: TheorySection[] = [
    {
      id: 'overview',
      title: '概览 - Firebase平台整体介绍',
      description: 'Firebase是Google提供的应用开发平台，为移动和Web应用提供完整的后端即服务(BaaS)解决方案。',
      icon: BookOpen,
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-cyan-500',
      items: [
        {
          title: 'Firebase平台概述',
          description: '了解Firebase的核心价值主张、服务架构和生态系统',
          link: 'https://firebase.google.com/docs?hl=zh-cn',
          features: [
            '后端即服务(BaaS)架构',
            '实时数据同步能力',
            'Google Cloud集成',
            '多平台SDK支持'
          ]
        },
        {
          title: 'Firebase产品矩阵',
          description: '全面了解Firebase提供的各项服务和功能模块',
          link: 'https://firebase.google.com/products',
          features: [
            '数据存储服务',
            '身份认证系统',
            '云函数计算',
            '分析监控工具'
          ]
        }
      ]
    },
    {
      id: 'fundamentals',
      title: '基础知识 - 核心概念和原理',
      description: '深入理解Firebase的核心概念、技术原理和最佳实践，为实际开发奠定坚实基础。',
      icon: Lightbulb,
      color: 'bg-orange-500',
      gradient: 'from-orange-500 to-red-500',
      items: [
        {
          title: 'Firebase项目管理',
          description: '学习如何创建、配置和管理Firebase项目',
          link: 'https://firebase.google.com/docs/projects/learn-more',
          features: [
            '项目创建和配置',
            '应用注册流程',
            '配置文件管理',
            '环境隔离策略'
          ]
        },
        {
          title: '安全规则系统',
          description: '掌握Firebase安全规则的编写和最佳实践',
          link: 'https://firebase.google.com/docs/rules',
          features: [
            '规则语法和结构',
            '数据访问控制',
            '用户权限管理',
            '安全测试方法'
          ]
        }
      ]
    },
    {
      id: 'ai',
      title: 'AI功能 - Firebase AI相关服务',
      description: 'Firebase集成的AI和机器学习服务，为应用添加智能化功能和用户体验。',
      icon: Bot,
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-pink-500',
      items: [
        {
          title: 'Firebase ML Kit',
          description: '移动端机器学习SDK，提供文本识别、图像标记等功能',
          link: 'https://firebase.google.com/docs/ml',
          features: [
            '文本识别(OCR)',
            '人脸检测',
            '条码扫描',
            '图像标记'
          ]
        },
        {
          title: 'Vertex AI集成',
          description: '与Google Cloud Vertex AI深度集成，提供高级AI能力',
          link: 'https://firebase.google.com/docs/vertex-ai',
          features: [
            '自然语言处理',
            '计算机视觉',
            '推荐系统',
            '预测分析'
          ]
        }
      ]
    },
    {
      id: 'build',
      title: '构建指南 - 开发构建流程',
      description: '从项目初始化到应用发布的完整开发流程指南，涵盖最佳实践和工具链。',
      icon: Hammer,
      color: 'bg-green-500',
      gradient: 'from-green-500 to-emerald-500',
      items: [
        {
          title: 'Firebase CLI工具',
          description: '命令行工具的安装、配置和使用方法',
          link: 'https://firebase.google.com/docs/cli',
          features: [
            '项目初始化',
            '本地开发服务器',
            '部署和发布',
            '数据导入导出'
          ]
        },
        {
          title: '开发工作流',
          description: '建立高效的Firebase应用开发工作流程',
          link: 'https://firebase.google.com/docs/guides',
          features: [
            '环境配置管理',
            '版本控制策略',
            '持续集成部署',
            '团队协作流程'
          ]
        }
      ]
    },
    {
      id: 'run',
      title: '运行管理 - 部署和运维',
      description: '应用部署、监控、性能优化和故障排查的运维管理指南。',
      icon: Play,
      color: 'bg-indigo-500',
      gradient: 'from-indigo-500 to-blue-500',
      items: [
        {
          title: 'Firebase Hosting',
          description: '静态网站和单页应用的托管部署服务',
          link: 'https://firebase.google.com/docs/hosting',
          features: [
            '全球CDN分发',
            '自动SSL证书',
            '版本管理',
            '自定义域名'
          ]
        },
        {
          title: '性能监控',
          description: '应用性能监控和优化策略',
          link: 'https://firebase.google.com/docs/perf-mon',
          features: [
            '启动时间监控',
            '网络请求分析',
            '自定义指标',
            '性能报告'
          ]
        }
      ]
    },
    {
      id: 'reference',
      title: '参考文档 - API和技术参考',
      description: '完整的API文档、SDK参考和技术规范，为开发提供详细的技术支持。',
      icon: FileText,
      color: 'bg-cyan-500',
      gradient: 'from-cyan-500 to-teal-500',
      items: [
        {
          title: 'JavaScript SDK',
          description: 'Web应用开发的JavaScript SDK完整参考',
          link: 'https://firebase.google.com/docs/reference/js',
          features: [
            'Authentication API',
            'Firestore API',
            'Storage API',
            'Functions API'
          ]
        },
        {
          title: 'REST API',
          description: 'Firebase服务的REST API接口文档',
          link: 'https://firebase.google.com/docs/reference/rest',
          features: [
            'Database REST API',
            'Auth REST API',
            'FCM REST API',
            'Analytics API'
          ]
        }
      ]
    },
    {
      id: 'samples',
      title: '示例代码 - 实际应用示例',
      description: '丰富的代码示例和完整项目模板，帮助快速理解和应用Firebase功能。',
      icon: Code2,
      color: 'bg-emerald-500',
      gradient: 'from-emerald-500 to-green-500',
      items: [
        {
          title: '快速入门示例',
          description: '各平台的Firebase快速入门代码示例',
          link: 'https://firebase.google.com/docs/samples',
          features: [
            'Web应用示例',
            'React Native示例',
            'Flutter示例',
            'Node.js示例'
          ]
        },
        {
          title: '完整项目模板',
          description: '基于Firebase的完整应用项目模板和最佳实践',
          link: 'https://github.com/firebase/quickstart-js',
          features: [
            '聊天应用模板',
            '电商平台模板',
            '博客系统模板',
            '管理后台模板'
          ]
        }
      ]
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
            Firebase 理论基础
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            基于Firebase官方文档的完整理论知识体系，为实际开发和案例讲解提供坚实的理论基础
          </p>
        </motion.div>

        {/* 理论基础模块 */}
        <div className="space-y-16">
          {theorySections.map((section, sectionIndex) => {
            const IconComponent = section.icon;
            
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                {/* 模块标题 */}
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 rounded-xl ${section.color} flex items-center justify-center mr-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {section.title}
                    </h2>
                    <p className="text-gray-300 text-lg">
                      {section.description}
                    </p>
                  </div>
                </div>

                {/* 模块内容 */}
                <div className="grid md:grid-cols-2 gap-6">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (sectionIndex * 0.1) + (itemIndex * 0.1) }}
                      className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 border border-white/20 hover:border-orange-500/50 transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors">
                          {item.title}
                        </h3>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-orange-400 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-orange-300 mb-2">🔧 核心特性</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          {item.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <span className="text-orange-400 mr-2">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
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
            <h3 className="text-2xl font-bold text-white mb-6">
              🎓 Firebase理论基础学习路径
            </h3>
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="text-left">
                <h4 className="text-lg font-semibold text-orange-400 mb-2">📚 基础理论</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  • 平台概览和架构理解<br/>
                  • 核心概念和原理掌握<br/>
                  • 安全规则和最佳实践<br/>
                  • 项目管理和配置
                </p>
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold text-orange-400 mb-2">🛠️ 开发实践</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  • CLI工具使用<br/>
                  • 开发工作流建立<br/>
                  • 代码示例学习<br/>
                  • 项目模板应用
                </p>
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold text-orange-400 mb-2">🚀 高级功能</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  • AI功能集成<br/>
                  • 性能优化<br/>
                  • 监控和分析<br/>
                  • 扩展和定制
                </p>
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold text-orange-400 mb-2">📊 运维管理</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  • 部署和发布<br/>
                  • 监控和告警<br/>
                  • 故障排查<br/>
                  • 团队协作
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="text-center mb-4">
                <h4 className="text-lg font-semibold text-blue-300 mb-2">🌟 学习成果</h4>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300">理论基础扎实</span>
                  <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300">实践能力强</span>
                  <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300">架构思维清晰</span>
                  <span className="bg-orange-500/20 px-3 py-1 rounded-full text-orange-300">问题解决能力</span>
                  <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-cyan-300">团队协作效率</span>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                © 2024 Firebase Studio Presentation | 基于Firebase官方文档整理的理论基础知识体系
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/**
 * 获取理论基础模块数据
 * @returns 理论基础模块数据数组
 */
export function getTheorySections(): TheorySection[] {
  return [
    // 这里可以返回理论基础数据，供其他组件使用
  ];
}

/**
 * 根据ID获取特定理论模块
 * @param id 模块ID
 * @returns 对应的理论模块数据
 */
export function getTheorySectionById(id: string): TheorySection | undefined {
  const sections = getTheorySections();
  return sections.find(section => section.id === id);
}