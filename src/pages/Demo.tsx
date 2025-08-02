import { motion } from 'framer-motion';
import { Play, Star, Zap, Gift, Shuffle, Trophy, Copy, Check } from 'lucide-react';
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

  // 100个职业案例数据
  const allCases = [
    { profession: '米其林三星主厨', business: '私厨餐厅「星曜」', service: '私厨餐厅' },
    { profession: '高级珠宝设计师', business: '珠宝定制工作室「晶璨」', service: '珠宝定制' },
    { profession: '调香师', business: '香气实验室「馥境」', service: '香氛品牌' },
    { profession: '独立制表师', business: '手工腕表工坊「时冕」', service: '腕表品牌' },
    { profession: '室内建筑设计师', business: '全案设计事务所「境造」', service: '设计事务所' },
    { profession: '高级西装裁缝', business: '定制西装会所「绅裁」', service: '西装定制' },
    { profession: '古董车修复师', business: '老爷车修复中心「御驰」', service: '古董车修复' },
    { profession: '高级花艺师', business: '花艺艺术馆「花御」', service: '花艺品牌' },
    { profession: '威士忌桶艺师', business: '橡木桶艺廊「醇樽」', service: '威士忌艺术装置' },
    { profession: '钢琴调律师', business: '钢琴精调工作室「律韵」', service: '钢琴服务' },
    { profession: '雪茄卷制大师', business: '雪茄会所「烟岚」', service: '雪茄文化' },
    { profession: '高级皮革匠', business: '皮具定制坊「革隐」', service: '皮具品牌' },
    { profession: '游艇室内设计师', business: '游艇美学事务所「澜舱」', service: '游艇设计' },
    { profession: '高端宠物美容师', business: '宠物奢护中心「宠爵」', service: '宠物美学' },
    { profession: '黑胶唱片修复师', business: '声学档案馆「声纹」', service: '黑胶修复' },
    { profession: '高级瓷器修复师', business: '古瓷修复馆「瓷隐」', service: '瓷器修复' },
    { profession: '高级茶艺师', business: '茶空间「茗境」', service: '茶道体验' },
    { profession: '高端影像修复师', business: '老照片修复工作室「映纪」', service: '影像修复' },
    { profession: '高级金缮师', business: '金缮美学馆「缮物」', service: '金缮艺术' },
    { profession: '高级手工书装帧师', business: '装帧艺术坊「书笈」', service: '手工书' },
    { profession: '高级制琴师', business: '手工吉他工坊「弦造」', service: '手工吉他' },
    { profession: '高级腕表微绘师', business: '表盘微绘工作室「微时」', service: '表盘艺术' },
    { profession: '高级香道师', business: '香道馆「篆香」', service: '香道文化' },
    { profession: '高级手工皂师', business: '冷制皂艺廊「皂界」', service: '手工皂' },
    { profession: '高级银匠', business: '银饰工作室「银序」', service: '银饰定制' },
    { profession: '高级玻璃艺术师', business: '玻璃吹制工坊「琉光」', service: '玻璃艺术' },
    { profession: '高级手工地毯设计师', business: '地毯高定坊「毯韵」', service: '地毯定制' },
    { profession: '高级手工笔匠', business: '钢笔定制工坊「笔藏」', service: '高端钢笔' },
    { profession: '高级手工刀匠', business: '刀具工作室「刃隐」', service: '手工刀' },
    { profession: '高级手工扇师', business: '折扇艺术馆「扇雅」', service: '折扇品牌' },
    { profession: '高级手工伞匠', business: '油纸伞工作室「伞语」', service: '手工伞' },
    { profession: '高级手工灯笼师', business: '宫灯艺术馆「灯煌」', service: '宫灯品牌' },
    { profession: '高级手工风筝师', business: '风筝艺术馆「鸢阁」', service: '风筝品牌' },
    { profession: '高级手工剪纸师', business: '剪纸艺术馆「剪影」', service: '剪纸艺术' },
    { profession: '高级手工糖画师', business: '糖艺馆「糖朝」', service: '糖画艺术' },
    { profession: '高级手工面塑师', business: '面塑艺术馆「面魂」', service: '面塑艺术' },
    { profession: '高级手工皮影师', business: '皮影艺术馆「影戏」', service: '皮影艺术' },
    { profession: '高级手工木偶师', business: '木偶艺术馆「偶语」', service: '木偶艺术' },
    { profession: '高级手工脸谱师', business: '京剧脸谱馆「谱韵」', service: '脸谱艺术' },
    { profession: '高级手工年画师', business: '年画艺术馆「画岁」', service: '年画品牌' },
    { profession: '高级手工刺绣师', business: '苏绣工作室「绣隐」', service: '苏绣' },
    { profession: '高级手工缂丝师', business: '缂丝艺术馆「缂华」', service: '缂丝' },
    { profession: '高级手工扎染师', business: '扎染艺术馆「染境」', service: '扎染' },
    { profession: '高级手工蜡染师', business: '蜡染艺术馆「蜡语」', service: '蜡染' },
    { profession: '高级手工蓝染师', business: '蓝染工作室「蓝序」', service: '蓝染' },
    { profession: '高级手工织锦师', business: '织锦艺术馆「锦章」', service: '织锦' },
    { profession: '高级手工竹编师', business: '竹编艺术馆「竹间」', service: '竹编' },
    { profession: '高级手工草编师', business: '草编艺术馆「草语」', service: '草编' },
    { profession: '高级手工藤编师', business: '藤编艺术馆「藤境」', service: '藤编' },
    { profession: '高级手工榫卯师', business: '榫卯艺术馆「卯构」', service: '榫卯' },
    { profession: '高级手工古琴师', business: '古琴坊「徽音」', service: '古琴' },
    { profession: '高级手工尺八师', business: '尺八工坊「八空」', service: '尺八' },
    { profession: '高级手工箜篌师', business: '箜篌艺术馆「箜鸣」', service: '箜篌' },
    { profession: '高级手工编钟师', business: '编钟艺术馆「钟律」', service: '编钟' },
    { profession: '高级手工埙师', business: '陶埙艺术馆「埙声」', service: '陶埙' },
    { profession: '高级手工笛箫师', business: '笛箫工坊「箫韶」', service: '笛箫' },
    { profession: '高级手工琵琶师', business: '琵琶工坊「琵语」', service: '琵琶' },
    { profession: '高级手工二胡师', business: '二胡工坊「胡琴」', service: '二胡' },
    { profession: '高级手工古筝师', business: '古筝工坊「筝鸣」', service: '古筝' },
    { profession: '高级手工扬琴师', business: '扬琴工坊「扬韵」', service: '扬琴' },
    { profession: '高级手工漆器师', business: '漆器艺术馆「漆隐」', service: '漆器' },
    { profession: '高级手工珐琅师', business: '珐琅艺术馆「琅华」', service: '珐琅' },
    { profession: '高级手工錾刻师', business: '錾刻艺术馆「錾境」', service: '錾刻' },
    { profession: '高级手工鎏金师', business: '鎏金艺术馆「金缮」', service: '鎏金' },
    { profession: '高级手工镶嵌师', business: '镶嵌艺术馆「嵌语」', service: '镶嵌' },
    { profession: '高级手工錾银师', business: '錾银艺术馆「银錾」', service: '錾银' },
    { profession: '高级手工烧蓝师', business: '烧蓝艺术馆「蓝焰」', service: '烧蓝' },
    { profession: '高级手工掐丝师', business: '掐丝艺术馆「丝韵」', service: '掐丝' },
    { profession: '高级手工点翠师', business: '点翠艺术馆「翠羽」', service: '点翠' },
    { profession: '高级手工螺钿师', business: '螺钿艺术馆「钿光」', service: '螺钿' },
    { profession: '高级手工砚雕师', business: '砚雕艺术馆「砚山」', service: '砚雕' },
    { profession: '高级手工印章篆刻师', business: '篆刻艺术馆「印篆」', service: '篆刻' },
    { profession: '高级手工碑拓师', business: '碑拓艺术馆「拓影」', service: '碑拓' },
    { profession: '高级手工装裱师', business: '书画装裱馆「裱古」', service: '装裱' },
    { profession: '高级手工拓片师', business: '拓片艺术馆「片语」', service: '拓片' },
    { profession: '高级手工古籍修复师', business: '古籍修复馆「籍修」', service: '古籍修复' },
    { profession: '高级手工碑刻师', business: '碑刻艺术馆「碑魂」', service: '碑刻' },
    { profession: '高级手工拓印师', business: '拓印艺术馆「印痕」', service: '拓印' },
    { profession: '高级手工木版水印师', business: '水印艺术馆「水印」', service: '木版水印' },
    { profession: '高级手工活字印刷师', business: '活字印刷馆「字活」', service: '活字印刷' },
    { profession: '高级手工皮影雕刻师', business: '皮影雕刻艺术馆「影雕」', service: '皮影雕刻' },
    { profession: '高级手工木偶雕刻师', business: '木偶雕刻艺术馆「偶雕」', service: '木偶雕刻' },
    { profession: '高级手工面具师', business: '面具艺术馆「面魂」', service: '面具' },
    { profession: '高级手工木偶头雕刻师', business: '木偶头艺术馆「偶首」', service: '木偶头' },
    { profession: '高级手工根雕师', business: '根雕艺术馆「根语」', service: '根雕' },
    { profession: '高级手工核雕师', business: '核雕艺术馆「核境」', service: '核雕' },
    { profession: '高级手工牙雕师', business: '牙雕艺术馆「牙刻」', service: '牙雕' },
    { profession: '高级手工角雕师', business: '角雕艺术馆「角韵」', service: '角雕' },
    { profession: '高级手工贝雕师', business: '贝雕艺术馆「贝语」', service: '贝雕' },
    { profession: '高级手工椰雕师', business: '椰雕艺术馆「椰刻」', service: '椰雕' },
    { profession: '高级手工糖艺师', business: '糖艺艺术馆「糖境」', service: '糖艺' },
    { profession: '高级手工巧克力师', business: '巧克力艺术馆「巧境」', service: '巧克力' },
    { profession: '高级手工翻糖师', business: '翻糖艺术馆「翻境」', service: '翻糖' },
    { profession: '高级手工冰雕师', business: '冰雕艺术馆「冰境」', service: '冰雕' },
    { profession: '高级手工沙画师', business: '沙画艺术馆「沙境」', service: '沙画' },
    { profession: '高级手工面塑师', business: '面塑艺术馆「塑境」', service: '面塑' },
    { profession: '高级手工糖塑师', business: '糖塑艺术馆「糖塑」', service: '糖塑' },
    { profession: '高级手工纸艺师', business: '纸艺艺术馆「纸境」', service: '纸艺' },
    { profession: '高级手工羊毛毡师', business: '羊毛毡艺术馆「毡境」', service: '羊毛毡' },
    { profession: '高级手工微缩景观师', business: '微缩景观艺术馆「微境」', service: '微缩景观' }
  ];

  /**
   * 执行抽奖功能
   * 随机抽取1-100号案例用于现场讲解
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
      const randomNum = Math.floor(Math.random() * 100) + 1;
      setDrawnNumber(randomNum);
      count++;
      
      if (count >= maxCount) {
        clearInterval(drawInterval);
        
        // 最终抽奖结果
        const finalNumber = Math.floor(Math.random() * 100) + 1;
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
                  <p className="text-blue-300">高端餐厅网站</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-black/30 rounded-lg p-4 border border-blue-500/30">
                  <h4 className="text-blue-300 font-semibold mb-2">🎭 角色设定</h4>
                  <p className="text-gray-300 text-sm">米其林三星主厨，经营高端法式餐厅</p>
                </div>
                
                <div className="bg-black/30 rounded-lg p-4 border border-blue-500/30">
                  <h4 className="text-blue-300 font-semibold mb-2">🎯 演示重点</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• AI提示词优化技巧</li>
                    <li>• 高端品牌视觉设计</li>
                    <li>• 用户体验优化</li>
                  </ul>
                </div>
                
                <div className="bg-black/30 rounded-lg p-4 border border-blue-500/30">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-blue-300 font-semibold">💬 AI提示词</h4>
                    <button
                      onClick={() => copyPrompt(
                        '我是一个米其林三星主厨，我开了一家高端法式餐厅「星曜」，请你帮我做一个私厨餐厅的网站。要求：1. 体现米其林三星的品质和声誉 2. 展现法式料理的精致与艺术感 3. 营造奢华而温馨的用餐氛围 4. 包含预约系统和主厨介绍 5. 响应式设计，支持移动端浏览。所有回答，请你用中文回复我。',
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
                  <p className="text-gray-300 text-xs leading-relaxed bg-blue-500/10 p-3 rounded border border-blue-500/20">
                    我是一个米其林三星主厨，我开了一家高端法式餐厅「星曜」，请你帮我做一个私厨餐厅的网站。要求：1. 体现米其林三星的品质和声誉 2. 展现法式料理的精致与艺术感 3. 营造奢华而温馨的用餐氛围 4. 包含预约系统和主厨介绍 5. 响应式设计，支持移动端浏览。所有回答，请你用中文回复我。
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-4">
                  <span className="text-blue-300 text-sm font-medium">预计时长: 10分钟</span>
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
                  <p className="text-orange-300">珠宝定制工作室</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-black/30 rounded-lg p-4 border border-orange-500/30">
                  <h4 className="text-orange-300 font-semibold mb-2">🎭 角色设定</h4>
                  <p className="text-gray-300 text-sm">高级珠宝设计师，专注奢华定制</p>
                </div>
                
                <div className="bg-black/30 rounded-lg p-4 border border-orange-500/30">
                  <h4 className="text-orange-300 font-semibold mb-2">🎯 演示重点</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• 奢华品牌定位</li>
                    <li>• 交互动效设计</li>
                    <li>• 移动端适配</li>
                  </ul>
                </div>
                
                <div className="bg-black/30 rounded-lg p-4 border border-purple-500/30">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-purple-300 font-semibold">💬 AI提示词</h4>
                    <button
                      onClick={() => copyPrompt(
                        '我是一位资深珠宝设计师，拥有20年高端定制经验，现在要为我的珠宝定制工作室「璀璨工坊」创建一个展示网站。要求：1. 展现珠宝的奢华与精致 2. 突出个人设计师品牌故事 3. 展示定制流程和工艺细节 4. 包含作品集和客户见证 5. 提供在线咨询和预约功能 6. 体现工匠精神和艺术价值。所有回答，请你用中文回复我。',
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
                    我是一位资深珠宝设计师，拥有20年高端定制经验，现在要为我的珠宝定制工作室「璀璨工坊」创建一个展示网站。要求：1. 展现珠宝的奢华与精致 2. 突出个人设计师品牌故事 3. 展示定制流程和工艺细节 4. 包含作品集和客户见证 5. 提供在线咨询和预约功能 6. 体现工匠精神和艺术价值。所有回答，请你用中文回复我。
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-4">
                  <span className="text-purple-300 text-sm font-medium">预计时长: 12分钟</span>
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
              <p className="text-lg text-gray-300">
                随机抽取1-100号案例，现场演示AI开发过程
              </p>
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
                        <p className="text-green-300">第{drawnNumber}号 - {drawnCase.profession}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-black/30 rounded-lg p-4 border border-green-500/30">
                          <h4 className="text-green-300 font-semibold mb-2">👤 职业角色</h4>
                          <p className="text-white font-medium">{drawnCase.profession}</p>
                        </div>
                        
                        <div className="bg-black/30 rounded-lg p-4 border border-green-500/30">
                          <h4 className="text-green-300 font-semibold mb-2">🏢 业务名称</h4>
                          <p className="text-white font-medium">{drawnCase.business}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-black/30 rounded-lg p-4 border border-green-500/30">
                          <h4 className="text-green-300 font-semibold mb-2">🎯 服务类型</h4>
                          <p className="text-white font-medium">{drawnCase.service}</p>
                        </div>
                        
                        <div className="bg-black/30 rounded-lg p-4 border border-green-500/30">
                          <h4 className="text-green-300 font-semibold mb-2">💡 AI提示词</h4>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            我是一个{drawnCase.profession}，我开了一家{drawnCase.business}，请你帮我做一个{drawnCase.service}的网站，要求高端大气。
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                      <div className="flex items-center mb-2">
                        <Star className="w-5 h-5 text-yellow-400 mr-2" />
                        <span className="text-yellow-400 font-semibold">现场演示重点</span>
                      </div>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• 如何优化AI提示词获得更好的结果</li>
                        <li>• 针对{drawnCase.service}的设计要点分析</li>
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