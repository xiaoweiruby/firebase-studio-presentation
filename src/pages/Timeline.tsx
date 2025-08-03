import { motion } from 'framer-motion';
import { 
  Layers, 
  Database, 
  Shield, 
  Cloud, 
  Code, 
  BarChart3, 
  Globe, 
  Bot,
  Server,
  Zap,
  Users,
  MessageSquare,
  Settings,
  Network,
  Cpu,
  HardDrive,
  Monitor
} from 'lucide-react';

/**
 * Firebase技术架构层次数据项类型定义
 */
interface ArchitectureLayer {
  layer: string;
  title: string;
  description: string;
  coreTheory: string;
  services: {
    name: string;
    description: string;
    keyFeatures: string[];
    technicalPrinciples: string[];
  }[];
  icon: any;
  color: string;
  gradient: string;
  position: 'left' | 'right';
}

/**
 * Firebase技术架构层次展示页面组件
 * 基于Firebase BaaS架构理论，构建清晰的技术框架体系
 */
export default function Timeline() {
  // Firebase技术架构四层体系 - 基于BaaS理论的完整架构框架
  const architectureLayers: ArchitectureLayer[] = [
    {
      layer: '基础设施层',
      title: 'Infrastructure Layer - 云原生基础设施',
      description: 'Firebase基础设施层提供全球分布式的云原生基础设施，基于Google Cloud Platform构建，为应用提供高可用、高性能、自动扩展的底层支撑。',
      coreTheory: 'BaaS架构的核心在于将基础设施完全抽象化，开发者无需关心服务器管理、负载均衡、数据中心部署等底层细节，专注于业务逻辑开发。',
      services: [
        {
          name: 'Firebase Hosting',
          description: '全球CDN分发的静态网站托管服务',
          keyFeatures: ['全球CDN网络', '自动SSL证书', '原子化部署', '版本回滚'],
          technicalPrinciples: ['边缘计算就近访问', 'HTTP/2推送优化', '资源压缩与缓存', 'DNS解析优化']
        },
        {
          name: 'Cloud Functions',
          description: '事件驱动的无服务器计算平台',
          keyFeatures: ['自动扩缩容', '事件触发器', '多语言支持', '冷启动优化'],
          technicalPrinciples: ['容器化运行时', '事件驱动架构', '资源按需分配', '函数生命周期管理']
        }
      ],
      icon: Cloud,
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-cyan-500',
      position: 'right'
    },
    {
      layer: '数据层',
      title: 'Data Layer - 实时数据存储与同步',
      description: 'Firebase数据层基于NoSQL理论和实时同步技术，提供多种数据存储解决方案，支持离线优先、实时同步、分布式一致性等现代应用数据需求。',
      coreTheory: '采用CRDT(无冲突复制数据类型)和最终一致性模型，实现多客户端实时数据同步。通过WebSocket长连接和增量更新机制，确保数据变更的实时传播。',
      services: [
        {
          name: 'Cloud Firestore',
          description: '下一代文档型NoSQL数据库',
          keyFeatures: ['复合查询支持', '多区域复制', 'ACID事务', '离线持久化'],
          technicalPrinciples: ['分布式索引系统', '多版本并发控制', '分片与负载均衡', '强一致性保证']
        },
        {
          name: 'Realtime Database',
          description: '实时JSON数据库',
          keyFeatures: ['毫秒级同步', 'JSON树结构', '离线支持', '安全规则'],
          technicalPrinciples: ['WebSocket实时连接', '增量数据传输', '本地缓存策略', '冲突解决算法']
        },
        {
          name: 'Cloud Storage',
          description: '大规模文件存储服务',
          keyFeatures: ['断点续传', '多格式支持', '访问控制', 'CDN加速'],
          technicalPrinciples: ['分布式文件系统', '对象存储架构', '元数据索引', '边缘缓存策略']
        }
      ],
      icon: Database,
      color: 'bg-orange-500',
      gradient: 'from-orange-500 to-red-500',
      position: 'left'
    },
    {
      layer: '业务逻辑层',
      title: 'Business Logic Layer - 安全与业务规则',
      description: 'Firebase业务逻辑层提供身份认证、权限控制、业务规则引擎等核心服务，基于零信任安全模型和声明式规则引擎，确保应用的安全性和业务逻辑的正确执行。',
      coreTheory: '采用基于JWT的无状态认证和细粒度的基于角色的访问控制(RBAC)。通过声明式安全规则和函数式业务逻辑，实现安全与业务的分离。',
      services: [
        {
          name: 'Authentication',
          description: '多因素身份认证服务',
          keyFeatures: ['多种登录方式', 'JWT令牌管理', '多因素认证', '用户生命周期'],
          technicalPrinciples: ['OAuth 2.0协议', 'JWT令牌机制', '密码学哈希', '会话管理策略']
        },
        {
          name: 'Security Rules',
          description: '声明式安全规则引擎',
          keyFeatures: ['细粒度权限', '条件表达式', '数据验证', '实时执行'],
          technicalPrinciples: ['规则编译器', '表达式求值', '权限继承', '缓存优化']
        },
        {
          name: 'Cloud Functions',
          description: '服务端业务逻辑处理',
          keyFeatures: ['事件触发', '数据验证', '第三方集成', '定时任务'],
          technicalPrinciples: ['函数式编程', '事件驱动架构', 'API网关', '中间件模式']
        }
      ],
      icon: Shield,
      color: 'bg-green-500',
      gradient: 'from-green-500 to-emerald-500',
      position: 'right'
    },
    {
      layer: '用户体验层',
      title: 'User Experience Layer - 智能化用户体验',
      description: 'Firebase用户体验层专注于用户参与、性能优化和智能化体验，通过数据驱动的洞察和AI增强功能，帮助开发者构建高质量、高留存的现代应用。',
      coreTheory: '基于用户行为分析和机器学习算法，实现个性化推荐、智能推送和预测性分析。采用实时监控和A/B测试框架，持续优化用户体验。',
      services: [
        {
          name: 'Analytics',
          description: '深度用户行为分析平台',
          keyFeatures: ['用户旅程追踪', '转化漏斗分析', '留存分析', '自定义事件'],
          technicalPrinciples: ['事件流处理', '数据仓库架构', '机器学习模型', '实时计算引擎']
        },
        {
          name: 'Performance Monitoring',
          description: '应用性能实时监控',
          keyFeatures: ['启动时间监控', '网络性能分析', '崩溃报告', '性能基准'],
          technicalPrinciples: ['APM探针技术', '分布式追踪', '异常检测算法', '性能指标聚合']
        },
        {
          name: 'Cloud Messaging',
          description: '智能消息推送服务',
          keyFeatures: ['精准推送', '多平台支持', '推送分析', '用户分群'],
          technicalPrinciples: ['推送网关架构', '消息队列系统', '用户画像算法', '送达率优化']
        },
        {
          name: 'A/B Testing',
          description: '实验驱动的产品优化',
          keyFeatures: ['多变量测试', '统计显著性', '实时结果', '自动分流'],
          technicalPrinciples: ['随机分组算法', '假设检验理论', '贝叶斯统计', '因果推断']
        }
      ],
      icon: BarChart3,
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-pink-500',
      position: 'left'
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
            Firebase 技术架构体系
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            基于BaaS理论构建的四层技术架构，从基础设施到用户体验的完整解决方案
          </p>
          <div className="mt-8 flex justify-center items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-400">基础设施层</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              <span className="text-sm text-gray-400">数据层</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-400">业务逻辑层</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-400">用户体验层</span>
            </div>
          </div>
        </motion.div>

        {/* 时间线 */}
        <div className="relative max-w-4xl mx-auto">
          {/* 中央线条 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-orange-500"></div>
          
          {architectureLayers.map((layer, index) => {
            const isLeft = layer.position === 'left';
            const IconComponent = layer.icon;
            
            return (
              <motion.div
                key={layer.layer}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className={`relative flex items-center mb-20 ${
                  isLeft ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* 内容卡片 */}
                <div className={`w-5/12 ${isLeft ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                    {/* 层次标题 */}
                    <div className="flex items-center mb-6">
                      <div className={`w-14 h-14 rounded-full ${layer.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{layer.layer}</h3>
                        <div className="text-xs text-gray-400 mt-1">Layer {index + 1}</div>
                      </div>
                    </div>
                    
                    <h4 className="text-2xl font-semibold text-orange-400 mb-4">
                      {layer.title}
                    </h4>
                    
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {layer.description}
                    </p>
                    
                    {/* 核心理论 */}
                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-4 border-l-4 border-blue-500 mb-6">
                      <h5 className="text-sm font-semibold text-blue-300 mb-2">🧠 核心理论</h5>
                      <p className="text-sm text-blue-200 leading-relaxed">{layer.coreTheory}</p>
                    </div>
                    
                    {/* 服务组件 */}
                    <div className="space-y-4">
                      <h5 className="text-sm font-semibold text-orange-300 mb-3">🔧 核心服务</h5>
                      {layer.services.map((service, idx) => (
                        <div key={idx} className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg p-4 border border-gray-600/30">
                          <div className="flex items-center justify-between mb-2">
                            <h6 className="font-semibold text-white text-sm">{service.name}</h6>
                            <span className="text-xs text-gray-400">Service {idx + 1}</span>
                          </div>
                          <p className="text-xs text-gray-300 mb-3">{service.description}</p>
                          
                          <div className="grid md:grid-cols-2 gap-3">
                            <div>
                              <h7 className="text-xs font-medium text-green-300 mb-1">关键特性</h7>
                              <ul className="text-xs text-gray-300 space-y-1">
                                {service.keyFeatures.map((feature, fidx) => (
                                  <li key={fidx} className="flex items-start">
                                    <span className="text-green-400 mr-1">•</span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h7 className="text-xs font-medium text-purple-300 mb-1">技术原理</h7>
                              <ul className="text-xs text-gray-300 space-y-1">
                                {service.technicalPrinciples.map((principle, pidx) => (
                                  <li key={pidx} className="flex items-start">
                                    <span className="text-purple-400 mr-1">→</span>
                                    <span>{principle}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* 中央节点 */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-orange-500 z-10 flex items-center justify-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 架构总结 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-center mt-24"
        >
          <div className="bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-orange-500/20 rounded-2xl p-10 border border-blue-500/30">
            <h3 className="text-3xl font-bold text-white mb-8">
              🏗️ Firebase BaaS 架构理论框架
            </h3>
            
            {/* 架构流程图 */}
            <div className="mb-10">
              <div className="flex justify-center items-center space-x-4 mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-2 mx-auto">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-xs text-blue-300 font-medium">基础设施层</div>
                  <div className="text-xs text-gray-400">Infrastructure</div>
                </div>
                <div className="text-orange-400 text-2xl">→</div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-2 mx-auto">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-xs text-orange-300 font-medium">数据层</div>
                  <div className="text-xs text-gray-400">Data Layer</div>
                </div>
                <div className="text-orange-400 text-2xl">→</div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-2 mx-auto">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-xs text-green-300 font-medium">业务逻辑层</div>
                  <div className="text-xs text-gray-400">Business Logic</div>
                </div>
                <div className="text-orange-400 text-2xl">→</div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mb-2 mx-auto">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-xs text-purple-300 font-medium">用户体验层</div>
                  <div className="text-xs text-gray-400">User Experience</div>
                </div>
              </div>
            </div>
            
            {/* 核心价值主张 */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
              <div className="text-left bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-300 mb-4 flex items-center">
                  <Layers className="w-5 h-5 mr-2" />
                  BaaS 核心理念
                </h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span><strong>基础设施抽象化</strong> - 完全托管的云原生基础设施</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span><strong>开发效率提升</strong> - 专注业务逻辑，减少运维负担</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span><strong>弹性扩展能力</strong> - 自动扩缩容，按需付费模式</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span><strong>生态系统集成</strong> - Google Cloud深度整合</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-left bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-orange-300 mb-4 flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  技术架构优势
                </h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span><strong>实时数据同步</strong> - WebSocket + CRDT算法</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span><strong>声明式安全</strong> - 基于规则的访问控制</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span><strong>事件驱动架构</strong> - 松耦合的微服务设计</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span><strong>数据驱动决策</strong> - 内置分析和监控能力</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* 案例应用指导 */}
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg p-6 border-l-4 border-purple-500">
              <h4 className="text-lg font-semibold text-purple-300 mb-3 flex items-center">
                <Code className="w-5 h-5 mr-2" />
                案例应用指导框架
              </h4>
              <p className="text-sm text-purple-200 leading-relaxed mb-4">
                基于以上四层架构理论，我们将在后续案例中展示如何从底层基础设施到上层用户体验，
                逐步构建完整的Firebase应用解决方案，涵盖实时聊天、电商平台、内容管理等典型场景。
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-xs">
                <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300">实时协作应用</span>
                <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300">电商交易平台</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300">内容管理系统</span>
                <span className="bg-orange-500/20 px-3 py-1 rounded-full text-orange-300">社交媒体应用</span>
                <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-cyan-300">IoT数据平台</span>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-sm text-gray-400">
                © 2024 Firebase Studio Presentation | 基于BaaS理论构建的技术架构框架
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}