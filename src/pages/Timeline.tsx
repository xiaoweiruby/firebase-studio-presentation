import { motion } from 'framer-motion';
import { Calendar, Zap, Users, Sparkles } from 'lucide-react';

/**
 * 时间线数据项类型定义
 */
interface TimelineItem {
  year: string;
  title: string;
  description: string;
  details?: string;
  icon: any;
  color: string;
}

/**
 * Firebase Studio发展历程时间线页面组件
 * 展示从Envolve到Firebase Studio的完整发展历程
 */
export default function Timeline() {
  // 发展历程数据 - 基于真实历史资料的详细时间线
  const timelineData: TimelineItem[] = [
    {
      year: '2011年9月',
      title: 'Envolve 创立与Y Combinator孵化',
      description: 'James Tamplin和Andrew Lee在Y Combinator孵化器支持下创立Envolve，最初专注于为网站提供实时在线聊天功能API。然而，开发者们开始创造性地使用这个聊天API来同步应用数据，这一意外发现揭示了实时数据同步的巨大市场需求。',
      details: '技术洞察：开发者将聊天系统用于数据同步的创新使用方式，启发了创始人对实时数据库架构的思考，为Firebase的诞生奠定了理论基础。',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      year: '2012年4月',
      title: 'Firebase 正式发布',
      description: '基于Envolve的技术积累，Tamplin和Lee将聊天系统与实时架构分离，创建了专门的实时数据库服务Firebase。这标志着Backend-as-a-Service (BaaS)概念的先驱性实践，为移动应用和Web应用提供了革命性的实时数据同步解决方案。',
      details: '技术突破：实时数据库架构的独立化，WebSocket技术的深度应用，为现代应用的实时交互体验奠定了技术基础。',
      icon: Zap,
      color: 'bg-orange-500'
    },
    {
      year: '2014年10月',
      title: 'Google 战略收购',
      description: 'Google以4亿美元收购Firebase，这一战略举措体现了Google对实时数据服务和移动开发生态的重视。收购后，Firebase开始与Google Cloud Platform深度整合，获得了Google强大的基础设施支持和技术资源。',
      details: '战略意义：Google通过收购Firebase，完善了其云服务生态系统，为与AWS和Microsoft Azure的竞争奠定了重要基础。',
      icon: Calendar,
      color: 'bg-green-500'
    },
    {
      year: '2015年10月',
      title: 'Divshot 合并与前端生态',
      description: 'Google将静态网站托管服务Divshot合并到Firebase中，这一举措显著增强了Firebase的前端开发能力。合并后的Firebase开始提供完整的前端到后端的开发解决方案，为全栈开发奠定了基础。',
      details: '生态扩展：静态网站托管能力的加入，使Firebase从纯后端服务演进为全栈开发平台，为现代JAMstack架构提供了重要支撑。',
      icon: Sparkles,
      color: 'bg-purple-500'
    },
    {
      year: '2016年5月',
      title: 'Google I/O 重大升级',
      description: '在Google I/O开发者大会上，Firebase被重新定义为统一的移动开发平台。新版Firebase整合了Google Analytics、AdMob、Google Ads等服务，推出了Firebase Analytics，并引入了Cloud Messaging、Authentication、Cloud Functions等核心服务。',
      details: '平台化转型：从单一的实时数据库服务演进为综合性的BaaS平台，标志着Firebase进入了平台化发展的新阶段。',
      icon: Sparkles,
      color: 'bg-indigo-500'
    },
    {
      year: '2017年1月',
      title: 'Fabric & Crashlytics 整合',
      description: 'Google收购Twitter的移动开发平台Fabric，并将其核心服务Crashlytics整合到Firebase中。这一整合大幅提升了Firebase在移动应用性能监控和崩溃分析方面的能力，完善了移动开发生态。',
      details: '技术整合：崩溃报告和性能监控能力的加入，使Firebase成为移动开发的一站式解决方案，显著提升了开发者体验。',
      icon: Zap,
      color: 'bg-cyan-500'
    },
    {
      year: '2018-2023',
      title: '云原生架构演进',
      description: 'Firebase持续演进，深度整合Google Cloud Platform服务，推出了Cloud Firestore、Firebase Extensions、App Distribution等高级功能。同时，Firebase开始支持多平台开发，包括iOS、Android、Web、Flutter等，成为真正的跨平台开发解决方案。',
      details: '架构升级：云原生架构的全面采用，微服务化的服务拆分，为大规模应用提供了强大的技术支撑和扩展能力。',
      icon: Calendar,
      color: 'bg-emerald-500'
    },
    {
      year: '2024年',
      title: 'Firebase Studio - AI时代的开发革命',
      description: 'Firebase Studio的发布标志着开发工具进入AI时代。集成Google Gemini AI模型和Project IDX云端IDE，Firebase Studio提供了AI驱动的代码生成、智能调试、自动化测试等功能，重新定义了现代应用开发的工作流程。',
      details: 'AI革命：人工智能与传统开发工具的深度融合，代表着软件开发行业向智能化、自动化方向的重大转型，为开发者提供了前所未有的生产力提升。',
      icon: Sparkles,
      color: 'bg-red-500'
    },
    {
      year: '2025年',
      title: 'AI原生开发生态的全面普及',
      description: 'Firebase Studio引领AI原生开发范式的全面普及，无代码/低代码平台达到企业级成熟度。边缘计算与实时数据处理深度融合，开发者体验实现革命性提升。企业级AI应用开始规模化部署，标志着软件开发进入智能化新纪元。',
      details: '未来展望：AI原生架构成为主流，开发效率提升10倍以上，90%的常规开发任务实现自动化，边缘AI计算能力普及到每个应用场景。',
      icon: Sparkles,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500'
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
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            从Y Combinator孵化的Envolve聊天API到Google生态的AI驱动开发平台，深度解析Firebase十三年技术演进与商业战略的完整脉络
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
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{item.year}</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-orange-400 mb-3">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    {item.details && (
                      <div className="bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-lg p-4 border-l-4 border-orange-500">
                        <p className="text-orange-200 text-sm leading-relaxed font-medium">
                          💡 {item.details}
                        </p>
                      </div>
                    )}
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
              🚀 Firebase Studio: 从BaaS先驱到AI开发革命
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="text-left">
                <h4 className="text-lg font-semibold text-orange-400 mb-2">技术演进轨迹</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  • 实时数据库架构的开创性实践<br/>
                  • BaaS概念的先驱性定义<br/>
                  • 云原生架构的全面演进<br/>
                  • AI驱动开发的革命性突破
                </p>
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold text-orange-400 mb-2">商业战略价值</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  • Google云服务生态的重要基石<br/>
                  • 移动开发市场的战略布局<br/>
                  • 开发者生态的深度构建<br/>
                  • AI时代开发工具的前瞻定义
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm text-gray-400">
                © 2024 Firebase Studio Presentation | 基于真实历史资料整理
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}