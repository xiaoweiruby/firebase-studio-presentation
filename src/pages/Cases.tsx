import { motion } from 'framer-motion';
import { Code, Copy, ExternalLink, User, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

/**
 * Firebase Studio 案例展示页面
 * 展示100个高端大气网站需求提示词案例，分5页展示
 */
export default function Cases() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const casesPerPage = 20;
  const totalPages = 2;

  /**
   * 获取应用类型对应的头像
   * @param category - 应用类别
   * @returns 头像URL
   */
  const getAvatarUrl = (category: string) => {
    const encodedCategory = encodeURIComponent(category);
    return `https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=${encodedCategory}%20app%20icon%20modern%20design&image_size=square`;
  };

  /**
   * 获取应用类型对应的标签
   * @param category - 应用类别
   * @returns 标签数组
   */
  const getTags = (category: string) => {
    if (category.includes('生产力')) return ['效率', '工作', '专注'];
    if (category.includes('健康')) return ['健康', '生活', '习惯'];
    if (category.includes('教育')) return ['学习', '记忆', '教育'];
    if (category.includes('创意')) return ['创意', '艺术', '设计'];
    if (category.includes('管理')) return ['管理', '组织', '数据'];
    return ['应用', '工具', '实用'];
  };

  // 40个应用程序案例数据
  const allCases = [
    { title: '多用途计时器应用', category: '生产力工具', type: '移动应用', language: '英文', prompt: 'A simple and elegant multi-purpose timer app for focused work sessions or cooking. Key features include setting custom countdown timers, a stopwatch function, pause/resume controls, and customizable alert sounds. Use a clean, minimalist theme with soft greens and whites.' },
    { title: '习惯追踪器应用', category: '健康生活', type: '移动应用', language: '英文', prompt: 'A simple, minimalist habit tracker app focused on daily check-ins. Key features include adding new habits, marking habits as complete for the day, viewing a streak calendar for each habit, and setting daily reminders. Use a clean white and soft green color scheme.' },
    { title: '抽认卡学习应用', category: '教育学习', type: '移动应用', language: '英文', prompt: 'A simple and effective flashcard app designed for learning and memorization. Key features include creating custom flashcard decks, adding and editing individual cards, reviewing cards by flipping them, and marking cards as learned. Use a calming green and cream color scheme.' },
    { title: '情绪日记应用', category: '健康生活', type: '移动应用', language: '英文', prompt: 'A personalized mood journal app designed to track and visualize daily emotional states like a mood ring. Key features include creating daily entries with a mood selector, viewing a calendar displaying past moods, searching through journal entries, and generating mood trend reports. Use a serene soft-purple and cool-gray color scheme.' },
    { title: '个人预算工具', category: '财务管理', type: '移动应用', language: '英文', prompt: 'A personal budgeting tool to track income and expenses, allowing users to add transactions with categories, view summary reports, set monthly budgets, and filter past spending. Use a clean, modern green and white color scheme.' },
    { title: '数字日记应用', category: '生活记录', type: '移动应用', language: '英文', prompt: 'A serene digital journaling app for daily reflection and personal thoughts. Key features include creating new dated entries, browsing past entries by date, and searching through your journal. Use warm, earthy tones with subtle cream accents.' },
    { title: '极简待办事项', category: '生产力工具', type: '移动应用', language: '英文', prompt: 'A minimalist productivity app designed to manage daily to-do lists. Key features include quickly adding new tasks, marking tasks as complete, and viewing current and completed task lists. Use a clean white and soft green color scheme.' },
    { title: '奇幻地图制作器', category: '创意工具', type: '桌面应用', language: '英文', prompt: 'A creative fantasy map maker app for world-building. Key features include drawing landmasses and terrain with various brush tools, adding custom labels and icons for cities and landmarks, managing map layers for detail, and exporting finished maps. Use an earthy, parchment-inspired color scheme with muted browns, greens, and sepia tones.' },
    { title: '库存跟踪器', category: '数据管理', type: '移动应用', language: '英文', prompt: 'A clean, data-focused inventory tracker app to manage stock. Key features include adding items with details, updating quantities, viewing current stock levels, and searching/filtering the inventory. Use a blue and gray color scheme.' },
    { title: '情绪追踪日记', category: '健康生活', type: '移动应用', language: '英文', prompt: 'A reflective mood journal app designed for daily self-tracking and emotional awareness. Key features include logging daily mood with optional notes, viewing mood trends over time through charts, exploring past entries via a calendar view, and setting customizable daily reminders. Use a calming pastel color palette.' },
    { title: '创意笔记应用', category: '创意工具', type: '移动应用', language: '英文', prompt: 'A clean, minimalist note-taking app designed for capturing and organizing creative ideas. Key features include quickly adding new ideas, tagging/categorizing notes, searching through all ideas, and browsing a visual list of your inspirations. Use a soft green and cream color scheme.' },
    { title: '食谱管理器', category: '生活助手', type: '移动应用', language: '英文', prompt: 'A warm and inviting recipe manager app for home cooks, focusing on organization and meal planning. Key features include adding and editing custom recipes, searching recipes by ingredients, creating shopping lists, and viewing step-by-step cooking instructions. Use an earthy tones color scheme.' },
    { title: '感恩日记', category: '生活记录', type: '移动应用', language: '英文', prompt: 'A serene daily gratitude journal app to cultivate thankfulness. Key features include adding new entries with date and text, viewing a chronological list of past entries, setting daily reminders, and exporting journal data. Use a soft pastel color scheme with greens and creams.' },
    { title: '植物护理管理', category: '生活助手', type: '移动应用', language: '英文', prompt: 'A personalized plant care management app designed to help users track and nurture their houseplants. Key features include adding new plants with specific care details, setting customized watering and fertilizing reminders, logging completed care actions, and viewing a comprehensive list of all plants with their upcoming needs. Implement an earthy green and terracotta color scheme.' },
    { title: '正念冥想应用', category: '健康生活', type: '移动应用', language: '英文', prompt: 'A peaceful personal mindfulness app offering guided meditation sessions, soothing background soundscapes, customizable breathwork exercises, and progress tracking, all presented with calm green and cream tones.' },
    { title: '任务管理器', category: '生产力工具', type: '移动应用', language: '英文', prompt: 'A minimalist task manager app designed to boost productivity. Key features include adding new tasks with deadlines, marking tasks as complete, viewing tasks by due date, and editing/deleting existing tasks. Use a calm green and white color scheme.' },
    { title: '库存管理系统', category: '数据管理', type: '移动应用', language: '英文', prompt: 'A clean, data-focused inventory tracker app to manage stock. Key features include adding items with details, updating quantities, viewing current stock levels, and searching/filtering the inventory. Use a blue and gray color scheme.' },
    { title: '任务组织应用', category: '生产力工具', type: '移动应用', language: '英文', prompt: 'A clean, minimalist task management app designed to help users organize their daily to-dos. Key interactive features include adding new tasks, marking tasks as complete, viewing all tasks by status, and editing or deleting existing tasks. Use a clean white and subtle green color scheme.' },
    { title: '日常任务管理', category: '生产力工具', type: '移动应用', language: '英文', prompt: 'A minimalist task management app for daily organization. Key features include adding new tasks with details, marking tasks complete, viewing tasks by due date or category, and editing/deleting existing tasks. Use a clean, green and white color scheme.' },
    { title: '食品预算应用', category: '财务管理', type: '移动应用', language: '英文', prompt: 'A personal food budgeting app to track and manage grocery and dining expenses. Key features include adding new food purchases with categories, setting monthly food budgets, viewing expense summaries, and monitoring remaining budget. Use a fresh green and beige color scheme.' },
    { title: '多用途计时器应用', category: '生产力工具', type: '移动应用', language: '中文', prompt: '一个简单而优雅的多用途计时器应用程序，用于集中工作或烹饪。主要功能包括设置自定义倒数计时器、秒表功能、暂停/恢复控制和可自定义的警报声音。使用干净、简约的主题，搭配柔和的绿色和白色。' },
    { title: '习惯追踪器应用', category: '健康生活', type: '移动应用', language: '中文', prompt: '一款简单、简约的习惯追踪器应用程序，专注于日常签到。主要功能包括添加新习惯、将习惯标记为当天完成、查看每个习惯的连续日历以及设置每日提醒。使用干净的白色和柔和的绿色配色方案。' },
    { title: '抽认卡学习应用', category: '教育学习', type: '移动应用', language: '中文', prompt: '专为学习和记忆而设计的简单有效的抽认卡应用程序。主要功能包括创建自定义抽认卡牌组、添加和编辑单个卡片、通过翻转卡片来查看卡片以及将卡片标记为已学习。使用平静的绿色和奶油色配色方案。' },
    { title: '情绪日记应用', category: '健康生活', type: '移动应用', language: '中文', prompt: '个性化的情绪日记应用程序，旨在像情绪环一样跟踪和可视化日常情绪状态。主要功能包括使用情绪选择器创建每日条目、查看显示过去心情的日历、搜索日记条目以及生成情绪趋势报告。使用宁静的柔紫色和冷灰色配色方案。' },
    { title: '个人预算工具', category: '财务管理', type: '移动应用', language: '中文', prompt: '个人预算工具，用于跟踪收入和支出，允许用户添加带有类别的交易、查看汇总报告、设置每月预算和过滤过去的支出。使用干净、现代的绿色和白色配色方案。' },
    { title: '数字日记应用', category: '生活记录', type: '移动应用', language: '中文', prompt: '一款宁静的数字日记应用程序，用于日常反思和个人想法。主要功能包括创建新的日期条目、按日期浏览过去的条目以及搜索您的日记。使用温暖、朴实的色调和微妙的奶油色。' },
    { title: '极简待办事项', category: '生产力工具', type: '移动应用', language: '中文', prompt: '一款极简的生产力应用程序，旨在管理日常待办事项列表。主要功能包括快速添加新任务、将任务标记为完成以及查看当前和已完成的任务列表。使用干净的白色和柔和的绿色配色方案。' },
    { title: '奇幻地图制作器', category: '创意工具', type: '桌面应用', language: '中文', prompt: '用于世界构建的创意奇幻地图制作应用程序。主要功能包括使用各种画笔工具绘制陆地和地形、为城市和地标添加自定义标签和图标、管理地图图层以获取细节以及导出完成的地图。使用朴实的羊皮纸风格配色方案，搭配柔和的棕色、绿色和棕褐色调。' },
    { title: '库存跟踪器', category: '数据管理', type: '移动应用', language: '中文', prompt: '一个干净、以数据为中心的库存跟踪器应用程序来管理库存。主要功能包括添加带有详细信息的项目、更新数量、查看当前库存水平以及搜索/过滤库存。使用蓝色和灰色配色方案。' },
    { title: '情绪追踪日记', category: '健康生活', type: '移动应用', language: '中文', prompt: '一款反思性情绪日记应用程序，专为日常自我跟踪和情绪意识而设计。主要功能包括使用可选笔记记录每日情绪、通过图表查看一段时间内的情绪趋势、通过日历视图探索过去的条目以及设置可自定义的每日提醒。使用平静柔和的调色板。' },
    { title: '创意笔记应用', category: '创意工具', type: '移动应用', language: '中文', prompt: '一款干净、简约的笔记应用程序，专为捕捉和组织创意而设计。主要功能包括快速添加新想法、标记/分类笔记、搜索所有想法以及浏览灵感的可视化列表。使用柔和的绿色和奶油色配色方案。' },
    { title: '食谱管理器', category: '生活助手', type: '移动应用', language: '中文', prompt: '一款温馨宜人的家庭厨师食谱管理器应用程序，专注于组织和膳食计划。主要功能包括添加和编辑自定义食谱、按成分搜索食谱、创建购物清单以及查看分步烹饪说明。使用大地色调的配色方案。' },
    { title: '感恩日记', category: '生活记录', type: '移动应用', language: '中文', prompt: '一个宁静的每日感恩日记应用程序，培养感恩之心。主要功能包括添加带有日期和文本的新条目、查看过去条目的时间顺序列表、设置每日提醒以及导出日记数据。使用带有绿色和奶油色的柔和柔和配色方案。' },
    { title: '植物护理管理', category: '生活助手', type: '移动应用', language: '中文', prompt: '个性化的植物护理管理应用程序，旨在帮助用户跟踪和培育他们的室内植物。主要功能包括添加具有特定护理细节的新植物、设置自定义浇水和施肥提醒、记录已完成的护理作以及查看所有植物及其即将到来的需求的完整列表。实施大地绿色和赤土色配色方案。' },
    { title: '正念冥想应用', category: '健康生活', type: '移动应用', language: '中文', prompt: '一款平静的个人正念应用程序，提供引导冥想课程、舒缓的背景音景、可定制的呼吸练习和进度跟踪，所有这些都以平静的绿色和奶油色调呈现。' },
    { title: '任务管理器', category: '生产力工具', type: '移动应用', language: '中文', prompt: '一款极简的任务管理器应用程序，旨在提高生产力。主要功能包括添加有截止日期的新任务、将任务标记为完成、按截止日期查看任务以及编辑/删除现有任务。使用沉稳的绿色和白色配色方案。' },
    { title: '库存管理系统', category: '数据管理', type: '移动应用', language: '中文', prompt: '一个干净、以数据为中心的库存跟踪器应用程序来管理库存。主要功能包括添加带有详细信息的项目、更新数量、查看当前库存水平以及搜索/过滤库存。使用蓝色和灰色配色方案。' },
    { title: '任务组织应用', category: '生产力工具', type: '移动应用', language: '中文', prompt: '一款干净、简约的任务管理应用程序，旨在帮助用户组织日常待办事项。主要交互功能包括添加新任务、将任务标记为完成、按状态查看所有任务以及编辑或删除现有任务。使用干净的白色和微妙的绿色配色方案。' },
    { title: '日常任务管理', category: '生产力工具', type: '移动应用', language: '中文', prompt: '一款用于日常组织的极简任务管理应用程序。主要功能包括添加包含详细信息的新任务、将任务标记为完成、按截止日期或类别查看任务以及编辑/删除现有任务。使用干净的绿色和白色配色方案。' },
    { title: '食品预算应用', category: '财务管理', type: '移动应用', language: '中文', prompt: '个人食品预算应用程序，用于跟踪和管理杂货和餐饮费用。主要功能包括添加带有类别的新食品购买、设置每月食品预算、查看费用摘要以及监控剩余预算。使用清新的绿色和米色配色方案。' }

  ];

  /**
   * 获取当前页的案例数据
   * @returns 当前页的案例数组
   */
  const getCurrentPageCases = () => {
    const startIndex = (currentPage - 1) * casesPerPage;
    const endIndex = startIndex + casesPerPage;
    return allCases.slice(startIndex, endIndex).map((caseData, index) => ({
      id: startIndex + index + 1,
      author: `${caseData.category}开发者`,
      avatar: getAvatarUrl(caseData.category),
      title: caseData.title,
      description: `${caseData.type} - ${caseData.language}版本`,
      tags: getTags(caseData.category),
      prompt: caseData.prompt,
      result: `使用Firebase Studio构建的${caseData.title}应用`
    }));
  };

  const currentCases = getCurrentPageCases();

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

  /**
   * 处理页面切换
   * @param page - 目标页码
   */
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // 滚动到页面顶部
      window.scrollTo({ top: 0, behavior: 'smooth' });
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



        {/* 分页导航 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center mb-8"
        >
          <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
            <button
               onClick={() => handlePageChange(currentPage - 1)}
               disabled={currentPage === 1}
               className="flex items-center px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors border border-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
             >
               <ChevronLeft className="w-4 h-4 mr-1" />
               上一页
             </button>
             
             <div className="flex items-center space-x-2">
               {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                 <button
                   key={page}
                   onClick={() => handlePageChange(page)}
                   className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
                     currentPage === page
                       ? 'bg-orange-500 text-white shadow-lg'
                       : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                   }`}
                 >
                   {page}
                 </button>
               ))}
             </div>
             
             <button
               onClick={() => handlePageChange(currentPage + 1)}
               disabled={currentPage === totalPages}
               className="flex items-center px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors border border-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
             >
               下一页
               <ChevronRight className="w-4 h-4 ml-1" />
             </button>
          </div>
        </motion.div>

        {/* 案例网格 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {currentCases.map((caseItem, index) => (
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

        {/* 底部分页导航 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center items-center mt-12"
        >
          <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
            <button
               onClick={() => handlePageChange(currentPage - 1)}
               disabled={currentPage === 1}
               className="flex items-center px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors border border-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
             >
               <ChevronLeft className="w-4 h-4 mr-1" />
               上一页
             </button>
             
             <div className="flex items-center space-x-2">
               {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                 <button
                   key={page}
                   onClick={() => handlePageChange(page)}
                   className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
                     currentPage === page
                       ? 'bg-orange-500 text-white shadow-lg'
                       : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                   }`}
                 >
                   {page}
                 </button>
               ))}
             </div>
             
             <button
               onClick={() => handlePageChange(currentPage + 1)}
               disabled={currentPage === totalPages}
               className="flex items-center px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors border border-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
             >
               下一页
               <ChevronRight className="w-4 h-4 ml-1" />
             </button>
          </div>
        </motion.div>



        {/* 底部提示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              💡 使用说明
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-4">
              这里收录了40个不同类型的应用程序开发案例，包含20个英文和20个中文提示词，每个案例都经过精心设计，帮助您快速上手Firebase Studio开发
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center">
                <Copy className="w-4 h-4 mr-1" />
                一键复制
              </span>
              <span className="flex items-center">
                <ExternalLink className="w-4 h-4 mr-1" />
                快速预览
              </span>
              <span className="text-orange-400">
                持续更新中...
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}