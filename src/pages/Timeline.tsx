import { motion } from 'framer-motion';
import { 
  Calendar, 
  Zap, 
  Users, 
  Sparkles, 
  Database, 
  Shield, 
  Cloud, 
  Code, 
  BarChart3, 
  Smartphone, 
  Globe, 
  Bot,
  Server,
  Lock,
  MessageSquare,
  FileText,
  Settings
} from 'lucide-react';

/**
 * Firebase功能特性数据项类型定义
 */
interface FeatureItem {
  category: string;
  title: string;
  description: string;
  features: string[];
  useCases: string[];
  icon: any;
  color: string;
  gradient: string;
}

/**
 * Firebase核心功能特性展示页面组件
 * 基于Firebase官方文档，全面展示Firebase的技术能力和应用场景
 */
export default function Timeline() {
  // Firebase核心功能特性数据 - 基于官方文档的完整功能介绍
  const featuresData: FeatureItem[] = [
    {
      category: '实时数据库',
      title: 'Realtime Database - 实时数据同步引擎',
      description: 'Firebase Realtime Database是一个云托管的NoSQL数据库，支持实时数据同步。当数据发生变化时，所有连接的客户端都会在毫秒级时间内收到更新，为构建协作应用和实时体验提供强大支撑。',
      features: [
        '实时数据同步 - 毫秒级数据更新推送',
        'JSON数据结构 - 灵活的文档存储模式',
        '离线支持 - 本地缓存与自动同步',
        '安全规则 - 细粒度的数据访问控制'
      ],
      useCases: [
        '聊天应用和社交平台',
        '协作编辑工具',
        '实时游戏和竞技应用',
        '物联网设备数据监控'
      ],
      icon: Database,
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      category: '云数据库',
      title: 'Cloud Firestore - 下一代文档数据库',
      description: 'Cloud Firestore是Firebase的旗舰数据库产品，提供更强大的查询能力、更好的性能和更灵活的数据模型。支持复杂查询、事务处理和多区域复制，是构建现代应用的理想选择。',
      features: [
        '强大查询引擎 - 复合索引与复杂查询支持',
        '多区域复制 - 全球数据分布与低延迟访问',
        'ACID事务 - 数据一致性保障',
        '自动扩展 - 无服务器架构，按需付费'
      ],
      useCases: [
        '电商平台和内容管理系统',
        '企业级应用和数据分析',
        '多用户协作平台',
        '金融和医疗等高可靠性应用'
      ],
      icon: Server,
      color: 'bg-orange-500',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      category: '身份认证',
      title: 'Authentication - 全方位身份验证解决方案',
      description: 'Firebase Authentication提供完整的身份验证服务，支持多种登录方式和安全特性。内置用户管理、多因素认证和安全规则，让开发者专注于业务逻辑而非安全实现。',
      features: [
        '多种登录方式 - 邮箱、手机、社交账号登录',
        '多因素认证 - SMS、TOTP等二次验证',
        '用户管理 - 完整的用户生命周期管理',
        '安全令牌 - JWT令牌与自定义声明'
      ],
      useCases: [
        '移动应用和Web应用用户系统',
        '企业级单点登录(SSO)',
        '社交平台和内容社区',
        'B2B SaaS产品用户管理'
      ],
      icon: Shield,
      color: 'bg-green-500',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      category: '云存储',
      title: 'Cloud Storage - 安全可扩展的文件存储',
      description: 'Firebase Cloud Storage为应用提供强大的文件存储和分发服务。支持任意大小的文件上传下载，内置安全规则和CDN加速，是构建富媒体应用的完美选择。',
      features: [
        '无限容量存储 - 支持任意大小文件存储',
        '全球CDN加速 - 快速文件分发网络',
        '安全规则控制 - 细粒度的文件访问权限',
        '断点续传 - 可靠的大文件上传机制'
      ],
      useCases: [
        '图片和视频分享应用',
        '文档管理和协作平台',
        '音频播客和流媒体服务',
        '备份和同步应用'
      ],
      icon: Cloud,
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      category: '云函数',
      title: 'Cloud Functions - 无服务器后端逻辑',
      description: 'Firebase Cloud Functions让开发者能够运行后端代码而无需管理服务器。支持事件驱动的函数执行，与Firebase服务深度集成，是构建现代无服务器应用的核心组件。',
      features: [
        '事件驱动执行 - 响应数据库、存储等事件',
        '自动扩展 - 根据负载自动调整资源',
        'HTTP触发器 - 构建RESTful API和Webhook',
        '多语言支持 - JavaScript、TypeScript、Python等'
      ],
      useCases: [
        'API后端和微服务架构',
        '数据处理和ETL管道',
        '第三方集成和Webhook处理',
        '定时任务和批处理作业'
      ],
      icon: Code,
      color: 'bg-indigo-500',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      category: '应用托管',
      title: 'Firebase Hosting - 快速安全的Web托管',
      description: 'Firebase Hosting为现代Web应用提供快速、安全的托管服务。支持静态和动态内容，内置SSL证书和全球CDN，是部署单页应用和渐进式Web应用的理想平台。',
      features: [
        '全球CDN分发 - 超快的内容加载速度',
        '自动SSL证书 - 免费的HTTPS安全连接',
        '版本管理 - 一键回滚和A/B测试',
        '自定义域名 - 完整的域名和子域名支持'
      ],
      useCases: [
        '单页应用(SPA)和PWA部署',
        '静态网站和博客托管',
        '营销页面和落地页',
        '开发和测试环境部署'
      ],
      icon: Globe,
      color: 'bg-cyan-500',
      gradient: 'from-cyan-500 to-teal-500'
    },
    {
      category: '数据分析',
      title: 'Analytics & Performance - 深度应用洞察',
      description: 'Firebase Analytics和Performance Monitoring提供全面的应用数据分析和性能监控。帮助开发者了解用户行为、优化应用性能，并做出数据驱动的产品决策。',
      features: [
        '用户行为分析 - 详细的用户旅程追踪',
        '性能监控 - 应用启动时间和网络性能',
        '崩溃报告 - 实时崩溃检测和分析',
        '自定义事件 - 业务指标的灵活追踪'
      ],
      useCases: [
        '产品优化和用户体验改进',
        '营销效果分析和转化追踪',
        '应用性能优化和故障排查',
        'A/B测试和功能验证'
      ],
      icon: BarChart3,
      color: 'bg-emerald-500',
      gradient: 'from-emerald-500 to-green-500'
    },
    {
      category: '消息推送',
      title: 'Cloud Messaging - 可靠的消息推送服务',
      description: 'Firebase Cloud Messaging (FCM)是一个跨平台的消息推送解决方案，支持免费发送通知和数据消息。提供强大的定向推送和分析功能，是用户参与和留存的重要工具。',
      features: [
        '跨平台推送 - iOS、Android、Web统一推送',
        '精准定向 - 基于用户属性和行为的智能推送',
        '消息类型丰富 - 通知消息、数据消息、主题订阅',
        '推送分析 - 详细的推送效果和用户反馈数据'
      ],
      useCases: [
        '用户参与和留存提升',
        '营销活动和促销推广',
        '实时通知和提醒服务',
        '新闻资讯和内容分发'
      ],
      icon: MessageSquare,
      color: 'bg-red-500',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      category: 'AI与扩展',
      title: 'Extensions & AI - 智能化开发生态',
      description: 'Firebase Extensions提供预构建的解决方案，而AI集成则为应用带来智能化能力。通过简单配置即可添加复杂功能，大幅提升开发效率和应用智能化水平。',
      features: [
        'Extensions市场 - 丰富的预构建功能扩展',
        'AI/ML集成 - 机器学习模型的无缝集成',
        '第三方服务 - Stripe、SendGrid等服务集成',
        '自定义扩展 - 企业级定制化解决方案'
      ],
      useCases: [
        '支付处理和电商功能',
        '图像识别和文本分析',
        '邮件发送和通知服务',
        '数据同步和备份服务'
      ],
      icon: Bot,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      gradient: 'from-purple-500 to-pink-500'
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
            Firebase 核心功能特性
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            基于Firebase官方文档的完整功能介绍，深度解析Firebase各项服务的技术特点、应用场景和开发者价值
          </p>
        </motion.div>

        {/* 时间线 */}
        <div className="relative max-w-4xl mx-auto">
          {/* 中央线条 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-orange-500"></div>
          
          {featuresData.map((item, index) => {
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
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{item.category}</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-orange-400 mb-3">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    
                    {/* 核心功能特性 */}
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-blue-300 mb-2">🔧 核心功能</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-orange-400 mr-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* 应用场景 */}
                    <div className="bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-lg p-4 border-l-4 border-orange-500">
                      <h5 className="text-sm font-semibold text-orange-300 mb-2">🎯 应用场景</h5>
                      <ul className="text-sm text-orange-200 space-y-1">
                        {item.useCases.map((useCase, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-orange-400 mr-2">→</span>
                            <span>{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
            <h3 className="text-2xl font-bold text-white mb-6">
              🚀 Firebase: 全栈开发的完整解决方案
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="text-left">
                <h4 className="text-lg font-semibold text-orange-400 mb-2">🗄️ 数据存储</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  • Realtime Database - 实时数据同步<br/>
                  • Cloud Firestore - 强大查询引擎<br/>
                  • Cloud Storage - 文件存储分发<br/>
                  • 离线支持与自动同步
                </p>
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold text-orange-400 mb-2">🔧 开发工具</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  • Cloud Functions - 无服务器计算<br/>
                  • Firebase Hosting - 快速Web托管<br/>
                  • Authentication - 身份验证服务<br/>
                  • Extensions - 预构建解决方案
                </p>
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold text-orange-400 mb-2">📊 运营分析</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  • Analytics - 用户行为分析<br/>
                  • Performance - 性能监控<br/>
                  • Cloud Messaging - 消息推送<br/>
                  • Crashlytics - 崩溃报告
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="text-center mb-4">
                <h4 className="text-lg font-semibold text-blue-300 mb-2">🌟 Firebase的核心优势</h4>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300">实时数据同步</span>
                  <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300">无服务器架构</span>
                  <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300">全球CDN加速</span>
                  <span className="bg-orange-500/20 px-3 py-1 rounded-full text-orange-300">多平台支持</span>
                  <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-cyan-300">Google生态集成</span>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                © 2024 Firebase Studio Presentation | 基于Firebase官方文档整理
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}