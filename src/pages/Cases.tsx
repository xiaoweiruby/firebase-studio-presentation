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
  const totalPages = 5;

  /**
   * 获取职业类型对应的头像
   * @param profession - 职业名称
   * @returns 头像URL
   */
  const getAvatarUrl = (profession: string) => {
    const encodedProfession = encodeURIComponent(profession);
    return `https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=${encodedProfession}%20professional%20avatar%20elegant%20style&image_size=square`;
  };

  /**
   * 获取职业类型对应的标签
   * @param profession - 职业名称
   * @returns 标签数组
   */
  const getTags = (profession: string) => {
    if (profession.includes('主厨') || profession.includes('餐厅')) return ['美食', '餐饮', '高端'];
    if (profession.includes('设计师')) return ['设计', '创意', '艺术'];
    if (profession.includes('师傅') || profession.includes('匠')) return ['手工', '传统', '工艺'];
    if (profession.includes('艺术')) return ['艺术', '文化', '传承'];
    if (profession.includes('修复')) return ['修复', '保护', '专业'];
    return ['高端', '定制', '专业'];
  };

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
   * 获取当前页的案例数据
   * @returns 当前页的案例数组
   */
  const getCurrentPageCases = () => {
    const startIndex = (currentPage - 1) * casesPerPage;
    const endIndex = startIndex + casesPerPage;
    return allCases.slice(startIndex, endIndex).map((caseData, index) => ({
      id: startIndex + index + 1,
      author: caseData.profession,
      avatar: getAvatarUrl(caseData.profession),
      title: caseData.business,
      description: `高端大气的${caseData.service}网站需求`,
      tags: getTags(caseData.profession),
      prompt: `我是一个${caseData.profession}，我开了一家${caseData.business}，请你帮我做一个${caseData.service}的网站，要求高端大气。`,
      result: `为${caseData.profession}打造的专业${caseData.service}网站`
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
              这里收录了100个不同职业的AI提示词案例，每个案例都经过精心设计，帮助您快速上手AI辅助开发
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