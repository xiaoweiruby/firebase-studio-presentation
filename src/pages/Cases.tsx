import { motion } from 'framer-motion';
import { Code, Copy, ExternalLink, User, Lightbulb } from 'lucide-react';
import { useState } from 'react';

/**
 * Firebase Studio案例展示页面组件
 * 展示不同博主的实战案例和提示词
 */
export default function Cases() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // 案例数据
  const cases = [
    {
      id: 1,
      author: '前端小智',
      avatar: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20developer%20avatar%20cartoon%20style%20friendly%20smile&image_size=square',
      title: 'AI驱动的电商应用原型开发',
      description: '使用Firebase Studio的App Prototyping agent快速构建电商应用原型',
      tags: ['电商', 'AI原型', 'Next.js'],
      prompt: `请帮我创建一个现代化的电商应用原型，包含以下功能：

1. 用户注册和登录系统
2. 商品展示页面，支持分类筛选
3. 购物车功能
4. 订单管理系统
5. 用户个人中心

技术要求：
- 使用Next.js框架
- 集成Firebase Authentication
- 使用Tailwind CSS进行样式设计
- 响应式设计，支持移动端
- 添加商品搜索功能

请生成完整的项目结构和核心组件代码。`,
      result: '成功生成了包含用户认证、商品管理、购物车等完整功能的电商应用原型'
    },
    {
      id: 2,
      author: '云开发小哥',
      avatar: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=cloud%20developer%20avatar%20tech%20style%20glasses&image_size=square',
      title: '实时协作文档编辑器',
      description: '利用Firebase Studio构建类似Google Docs的实时协作编辑器',
      tags: ['实时协作', 'WebSocket', 'React'],
      prompt: `创建一个实时协作文档编辑器，类似Google Docs：

核心功能：
1. 多用户实时编辑
2. 文档版本历史
3. 用户权限管理（查看/编辑/评论）
4. 实时光标显示
5. 评论和建议功能

技术栈：
- React + TypeScript
- Firebase Realtime Database
- 富文本编辑器（Quill.js或类似）
- WebRTC用于实时通信
- 用户认证和权限控制

请实现文档的实时同步和冲突解决机制。`,
      result: '构建了支持多人实时编辑、版本控制和权限管理的协作文档平台'
    },
    {
      id: 3,
      author: 'AI应用开发者',
      avatar: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20developer%20avatar%20futuristic%20style%20neural%20network&image_size=square',
      title: '智能客服聊天机器人',
      description: '结合Gemini AI和Firebase Studio开发智能客服系统',
      tags: ['AI聊天', 'Gemini', '客服系统'],
      prompt: `开发一个智能客服聊天机器人系统：

功能需求：
1. 自然语言理解和回复
2. 多轮对话上下文保持
3. 知识库集成和检索
4. 人工客服无缝切换
5. 对话历史记录和分析
6. 多语言支持

技术实现：
- 集成Gemini API进行AI对话
- Firebase Functions处理后端逻辑
- Firestore存储对话历史
- 实时消息推送
- 管理后台用于知识库维护

请实现完整的聊天界面和后端API。`,
      result: '开发了具备智能回复、上下文理解和人工切换的客服机器人系统'
    },
    {
      id: 4,
      author: '移动开发专家',
      avatar: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=mobile%20developer%20avatar%20modern%20style%20smartphone&image_size=square',
      title: '跨平台任务管理应用',
      description: '使用Firebase Studio快速原型设计和开发任务管理应用',
      tags: ['任务管理', '跨平台', 'PWA'],
      prompt: `创建一个功能完整的任务管理应用：

核心功能：
1. 任务创建、编辑、删除
2. 任务分类和标签系统
3. 截止日期和提醒功能
4. 团队协作和任务分配
5. 进度跟踪和统计报表
6. 离线同步支持

技术要求：
- PWA应用，支持离线使用
- 响应式设计，适配各种设备
- Firebase Authentication用户系统
- Firestore数据存储
- Cloud Functions后端逻辑
- 推送通知功能

请生成完整的应用架构和主要组件。`,
      result: '构建了支持离线同步、团队协作和智能提醒的任务管理应用'
    }
  ];

  /**
   * 复制提示词到剪贴板
   * @param text - 要复制的文本
   * @param index - 案例索引
   */
  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            🚀 Firebase Studio 实战案例
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            探索不同开发者如何使用Firebase Studio构建创新应用，学习AI辅助开发的最佳实践
          </p>
        </motion.div>

        {/* 案例网格 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300"
            >
              {/* 案例头部 */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center mb-4">
                  <img
                    src={caseItem.avatar}
                    alt={caseItem.author}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-orange-500"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {caseItem.author}
                    </h3>
                    <p className="text-gray-400 text-sm">Firebase Studio 实践者</p>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-orange-400 mb-2">
                  {caseItem.title}
                </h4>
                
                <p className="text-gray-300 mb-4">
                  {caseItem.description}
                </p>
                
                {/* 标签 */}
                <div className="flex flex-wrap gap-2">
                  {caseItem.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm border border-orange-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 提示词展示 */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-lg font-semibold text-white flex items-center">
                    <Code className="w-5 h-5 mr-2" />
                    AI 提示词
                  </h5>
                  <button
                    onClick={() => copyToClipboard(caseItem.prompt, index)}
                    className="flex items-center px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors border border-blue-500/30"
                  >
                    <Copy className="w-4 h-4 mr-1" />
                    {copiedIndex === index ? '已复制' : '复制'}
                  </button>
                </div>
                
                <div className="bg-black/30 rounded-lg p-4 border border-gray-600">
                  <pre className="text-gray-300 text-sm whitespace-pre-wrap overflow-x-auto">
                    {caseItem.prompt}
                  </pre>
                </div>
                
                {/* 实现结果 */}
                <div className="mt-4 p-4 bg-green-500/10 rounded-lg border border-green-500/30">
                  <div className="flex items-center mb-2">
                    <Lightbulb className="w-5 h-5 text-green-400 mr-2" />
                    <span className="text-green-400 font-semibold">实现结果</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    {caseItem.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 底部提示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              💡 提示词使用技巧
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-4">
              复制这些提示词到Firebase Studio中，体验AI辅助开发的强大能力
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <span className="flex items-center">
                <ExternalLink className="w-4 h-4 mr-1" />
                在Firebase Studio中使用
              </span>
              <span className="flex items-center">
                <Copy className="w-4 h-4 mr-1" />
                一键复制提示词
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}