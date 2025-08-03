import { motion } from 'framer-motion';
import { Play, Star, Zap, Gift, Shuffle, Trophy, Copy, Check, Code } from 'lucide-react';
import { useState } from 'react';

/**
 * Firebase Studio 演示页面
 * 包含实操案例导航和抽奖功能
 */
export default function Demo() {
  // 抽奖功能状态
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawnNumber, setDrawnNumber] = useState<number | null>(null);
  const [drawnCase, setDrawnCase] = useState<any | null>(null);
  const [drawHistory, setDrawHistory] = useState<number[]>([]);
  
  // 复制功能状态
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);

  // 40个应用程序案例数据（包含完整的 prompt 字段）
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
   * 执行抽奖功能
   * 随机抽取1-40号案例用于现场讲解
   */
  const handleDraw = () => {
    if (isDrawing) return;
    
    setIsDrawing(true);
    setDrawnNumber(null);
    setDrawnCase(null);
    
    // 模拟抽奖动画效果
    let count = 0;
    const maxCount = 20; // 动画次数
    
    const drawInterval = setInterval(() => {
      const randomNum = Math.floor(Math.random() * 40) + 1;
      setDrawnNumber(randomNum);
      count++;
      
      if (count >= maxCount) {
        clearInterval(drawInterval);
        
        // 最终抽奖结果
        const finalNumber = Math.floor(Math.random() * 40) + 1;
        const finalCase = allCases[finalNumber - 1];
        
        setDrawnNumber(finalNumber);
        setDrawnCase(finalCase);
        setDrawHistory(prev => [finalNumber, ...prev.slice(0, 4)]); // 保留最近5次记录
        setIsDrawing(false);
        
        // 滚动到抽奖结果
        setTimeout(() => {
          const lotteryElement = document.getElementById('lottery-section');
          if (lotteryElement) {
            lotteryElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 500);
      }
    }, 100);
  };

  /**
   * 重置抽奖结果
   */
  const resetDraw = () => {
    setDrawnNumber(null);
    setDrawnCase(null);
  };

  /**
   * 复制提示词到剪贴板
   */
  const copyPrompt = async (prompt: string, promptId: string) => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopiedPrompt(promptId);
      setTimeout(() => setCopiedPrompt(null), 2000);
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
            🎯 Firebase Studio 现场演示
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            通过实操案例和互动抽奖，深度体验AI辅助开发的魅力
          </p>
        </motion.div>

        {/* 实操案例导航 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
              <Play className="w-8 h-8 mr-3 text-orange-400" />
              🎯 实操案例演示
            </h2>
            <p className="text-lg text-gray-300">
              现场演示两个精选案例，展示AI辅助开发的实际应用
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* 案例1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl border border-blue-500/30 p-8 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-500/30 rounded-2xl flex items-center justify-center mr-4">
                  <Star className="w-8 h-8 text-blue-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">案例一</h3>
                  <p className="text-blue-300">GreenNote 笔记应用</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-black/30 rounded-lg p-4 border border-blue-500/30">
                  <h4 className="text-blue-300 font-semibold mb-2">🎭 角色设定</h4>
                  <p className="text-gray-300 text-sm">产品经理，开发极简笔记应用</p>
                </div>
                
                <div className="bg-black/30 rounded-lg p-4 border border-blue-500/30">
                    <h4 className="text-blue-300 font-semibold mb-2">🎯 演示重点</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• 创建和编辑笔记功能</li>
                      <li>• 标签分类系统设计</li>
                      <li>• 搜索功能实现</li>
                    </ul>
                  </div>
                  
                  <div className="bg-black/30 rounded-lg p-4 border border-blue-500/30">
                    <h4 className="text-blue-300 font-semibold mb-2">🔗 演示链接</h4>
                    <div className="space-y-2">
                      <a 
                        href="https://studio--greennote-4roah.us-central1.hosted.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-blue-400 hover:text-blue-300 text-sm underline"
                      >
                        🌐 在线演示
                      </a>
                      <a 
                        href="https://www.bilibili.com/video/BV1MqhTzFEAa/?spm_id_from=333.1387.homepage.video_card.click&vd_source=921270471e745ada21af6b8406e3ff55" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-blue-400 hover:text-blue-300 text-sm underline"
                      >
                        📺 视频教程
                      </a>
                    </div>
                  </div>
                
                <div className="bg-black/30 rounded-lg p-4 border border-blue-500/30">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-blue-300 font-semibold">💬 AI提示词</h4>
                    <button
                      onClick={() => copyPrompt(
                        '请帮我创建一个名为"GreenNote"的极简笔记应用。这是一款专注于快速思维捕捉和组织的笔记工具。主要功能包括：创建新笔记、编辑现有笔记、使用标签对笔记进行分类、搜索已保存的笔记。请使用沉稳的绿色和灰白色配色方案，营造平静专注的使用体验。界面要简洁明了，突出内容本身。',
                        'case1'
                      )}
                      className={`flex items-center px-3 py-1 rounded-lg text-xs transition-all duration-200 ${
                        copiedPrompt === 'case1'
                          ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                          : 'bg-blue-500/20 text-blue-300 border border-blue-500/30 hover:bg-blue-500/30'
                      }`}
                    >
                      {copiedPrompt === 'case1' ? (
                        <>
                          <Check className="w-3 h-3 mr-1" />
                          已复制
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 mr-1" />
                          复制
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-gray-300 text-xs leading-relaxed bg-blue-500/10 p-3 rounded border border-blue-500/20">A minimalist note-taking app for quick thought capture and organization. Key features include creating new notes, editing existing notes, categorizing notes with tags, and searching through saved notes. Use a calm green and off-white color scheme.</p>
                </div>
                
                <div className="flex items-center justify-between pt-4">
                  <span className="text-blue-300 text-sm font-medium">预计时长: 3分钟</span>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="text-sm">精选案例</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* 案例2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl border border-orange-500/30 p-8 hover:from-orange-500/30 hover:to-red-500/30 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-500/30 rounded-2xl flex items-center justify-center mr-4">
                  <Zap className="w-8 h-8 text-orange-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">案例二</h3>
                  <p className="text-orange-300">绿色笔记 中文版</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-black/30 rounded-lg p-4 border border-orange-500/30">
                  <h4 className="text-orange-300 font-semibold mb-2">🎭 角色设定</h4>
                  <p className="text-gray-300 text-sm">产品经理，开发中文笔记应用</p>
                </div>
                
                <div className="bg-black/30 rounded-lg p-4 border border-orange-500/30">
                    <h4 className="text-orange-300 font-semibold mb-2">🎯 演示重点</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• 中文界面本地化</li>
                      <li>• 笔记管理功能</li>
                      <li>• 用户体验优化</li>
                    </ul>
                  </div>
                  
                  <div className="bg-black/30 rounded-lg p-4 border border-orange-500/30">
                    <h4 className="text-orange-300 font-semibold mb-2">🔗 演示链接</h4>
                    <div className="space-y-2">
                      <a 
                        href="https://studio--greennote-4roah.us-central1.hosted.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-orange-400 hover:text-orange-300 text-sm underline"
                      >
                        🌐 在线演示
                      </a>
                      <a 
                        href="https://www.bilibili.com/video/BV1MqhTzFEAa/?spm_id_from=333.1387.homepage.video_card.click&vd_source=921270471e745ada21af6b8406e3ff55" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-orange-400 hover:text-orange-300 text-sm underline"
                      >
                        📺 视频教程
                      </a>
                    </div>
                  </div>
                
                <div className="bg-black/30 rounded-lg p-4 border border-purple-500/30">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-purple-300 font-semibold">💬 AI提示词</h4>
                    <button
                      onClick={() => copyPrompt(
                        '请为我开发一款名为"绿色笔记"的极简笔记应用。这是一个专为中文用户设计的思维整理工具。核心功能包括：新建笔记、编辑笔记内容、为笔记添加分类标签、全文搜索笔记内容。采用沉稳的绿色和灰白色设计风格，界面简洁清爽，让用户专注于内容创作。支持快速记录灵感和想法。',
                        'case2'
                      )}
                      className={`flex items-center px-3 py-1 rounded-lg text-xs transition-all duration-200 ${
                        copiedPrompt === 'case2'
                          ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                          : 'bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30'
                      }`}
                    >
                      {copiedPrompt === 'case2' ? (
                        <>
                          <Check className="w-3 h-3 mr-1" />
                          已复制
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 mr-1" />
                          复制
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-gray-300 text-xs leading-relaxed bg-purple-500/10 p-3 rounded border border-purple-500/20">
                    请为我开发一款名为"绿色笔记"的极简笔记应用。这是一个专为中文用户设计的思维整理工具。核心功能包括：新建笔记、编辑笔记内容、为笔记添加分类标签、全文搜索笔记内容。采用沉稳的绿色和灰白色设计风格，界面简洁清爽，让用户专注于内容创作。支持快速记录灵感和想法。
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-4">
                  <span className="text-purple-300 text-sm font-medium">预计时长: 3分钟</span>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="text-sm">精选案例</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 抽奖功能模块 */}
        <motion.div
          id="lottery-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl border border-purple-500/30 p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
                <Gift className="w-8 h-8 mr-3 text-purple-400" />
                🎲 现场抽奖互动
              </h2>
              <p className="text-lg text-gray-300">随机抽取1-40号案例，现场演示AI开发过程</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 抽奖控制区 */}
              <div className="lg:col-span-1">
                <div className="bg-black/30 rounded-2xl p-6 border border-purple-500/30">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                    <Shuffle className="w-6 h-6 mr-2 text-purple-400" />
                    抽奖控制
                  </h3>
                  
                  {/* 抽奖数字显示 */}
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                      <span className="text-3xl font-bold text-white">
                        {drawnNumber || '?'}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      {isDrawing ? '抽奖中...' : drawnNumber ? `第${drawnNumber}号案例` : '点击开始抽奖'}
                    </p>
                  </div>
                  
                  {/* 抽奖按钮 */}
                  <div className="space-y-3">
                    <button
                      onClick={handleDraw}
                      disabled={isDrawing}
                      className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center ${
                        isDrawing
                          ? 'bg-gray-500/50 text-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {isDrawing ? (
                        <>
                          <Shuffle className="w-5 h-5 mr-2 animate-spin" />
                          抽奖中...
                        </>
                      ) : (
                        <>
                          <Gift className="w-5 h-5 mr-2" />
                          开始抽奖
                        </>
                      )}
                    </button>
                    
                    {drawnNumber && (
                      <button
                        onClick={resetDraw}
                        className="w-full py-2 px-4 bg-gray-500/20 text-gray-300 rounded-lg hover:bg-gray-500/30 transition-colors text-sm"
                      >
                        重新抽奖
                      </button>
                    )}
                  </div>
                </div>
                
                {/* 抽奖历史 */}
                {drawHistory.length > 0 && (
                  <div className="bg-black/30 rounded-2xl p-6 border border-purple-500/30 mt-6">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <Trophy className="w-5 h-5 mr-2 text-yellow-400" />
                      抽奖记录
                    </h4>
                    <div className="space-y-2">
                      {drawHistory.map((num, index) => (
                        <div key={index} className="flex items-center justify-between py-2 px-3 bg-purple-500/10 rounded-lg">
                          <span className="text-gray-300 text-sm">第{index + 1}次</span>
                          <span className="text-purple-300 font-semibold">#{num}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* 抽奖结果展示区 */}
              <div className="lg:col-span-2">
                {drawnCase ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl border border-green-500/30 p-6"
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-green-500/30 rounded-2xl flex items-center justify-center mr-4">
                        <Trophy className="w-8 h-8 text-green-300" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">🎉 抽中案例</h3>
                        <p className="text-green-300">第{drawnNumber}号 - {drawnCase.title}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-black/30 rounded-lg p-4 border border-green-500/30">
                          <h4 className="text-green-300 font-semibold mb-2">📱 应用标题</h4>
                          <p className="text-white font-medium">{drawnCase.title}</p>
                        </div>
                        
                        <div className="bg-black/30 rounded-lg p-4 border border-green-500/30">
                          <h4 className="text-green-300 font-semibold mb-2">🏷️ 应用类别</h4>
                          <p className="text-white font-medium">{drawnCase.category}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-black/30 rounded-lg p-4 border border-green-500/30">
                          <h4 className="text-green-300 font-semibold mb-2">📱 应用类型</h4>
                          <p className="text-white font-medium">{drawnCase.type}</p>
                        </div>
                        
                        <div className="bg-black/30 rounded-lg p-4 border border-green-500/30">
                          <h4 className="text-green-300 font-semibold mb-2">🌐 语言版本</h4>
                          <p className="text-white font-medium">{drawnCase.language}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* AI提示词显示模块 */}
                    <div className="mt-6 bg-black/30 rounded-lg p-4 border border-green-500/30">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-green-300 font-semibold flex items-center">
                          <Code className="w-5 h-5 mr-2" />
                          💬 AI提示词
                        </h4>
                        <button
                          onClick={() => copyPrompt(drawnCase.prompt, `lottery-${drawnNumber}`)}
                          className={`flex items-center px-3 py-1 rounded-lg text-xs transition-all duration-200 ${
                            copiedPrompt === `lottery-${drawnNumber}`
                              ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                              : 'bg-green-500/20 text-green-300 border border-green-500/30 hover:bg-green-500/30'
                          }`}
                        >
                          {copiedPrompt === `lottery-${drawnNumber}` ? (
                            <>
                              <Check className="w-3 h-3 mr-1" />
                              已复制
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3 mr-1" />
                              复制
                            </>
                          )}
                        </button>
                      </div>
                      <div className="bg-green-500/10 p-4 rounded border border-green-500/20 max-h-32 overflow-y-auto">
                        <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
                          {drawnCase.prompt}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                      <div className="flex items-center mb-2">
                        <Star className="w-5 h-5 text-yellow-400 mr-2" />
                        <span className="text-yellow-400 font-semibold">现场演示重点</span>
                      </div>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• 如何优化AI提示词获得更好的结果</li>
                        <li>• 针对{drawnCase.category}应用的设计要点分析</li>
                        <li>• {drawnCase.language}版本的本地化开发技巧</li>
                        <li>• 实时调整和迭代开发过程</li>
                      </ul>
                    </div>
                  </motion.div>
                ) : (
                  <div className="bg-black/30 rounded-2xl border border-gray-600 p-12 text-center">
                    <div className="w-24 h-24 mx-auto bg-gray-500/20 rounded-full flex items-center justify-center mb-6">
                      <Gift className="w-12 h-12 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-400 mb-2">等待抽奖结果</h3>
                    <p className="text-gray-500">点击左侧"开始抽奖"按钮，随机选择一个案例进行现场演示</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 底部提示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              💡 演示说明
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-4">
              通过实操案例和抽奖互动，让您深度体验Firebase Studio的AI辅助开发能力
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center">
                <Play className="w-4 h-4 mr-1" />
                实操演示
              </span>
              <span className="flex items-center">
                <Gift className="w-4 h-4 mr-1" />
                互动抽奖
              </span>
              <span className="text-orange-400">
                现场体验AI开发
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}