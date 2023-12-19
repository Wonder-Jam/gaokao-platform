export const videoList = [
  'https://bkzs.nju.edu.cn/upload/cms/video/3dc16732de844d53b73f1c60f319cfbe.mp4',
  'https://bkzs.nju.edu.cn/upload/cms/video/92bec00c5c144aa1a8a34aa3a052be5d.mp4',
  'https://bkzs.nju.edu.cn/upload/cms/video/e5663e84db014278a4ca59ba3f33ae00.mp4',
  'https://bkzs.nju.edu.cn/upload/cms/video/fce8244248b145eeae89ee16a5fb49ce.mp4',
  'https://zdzsc.zju.edu.cn/_upload/article/videos/f9/ad/97e15ccf4a619d9f0fb1ceca1c30/48686922-7e4c-48e3-945e-6e5a60b5f6ab-B.mp4',
  'https://zdzsc.zju.edu.cn/_upload/article/videos/13/3a/c74ace004db59744c4134e092c5e/08e0e213-098b-4e30-aa12-c8513c4eedd3.mp4',
  'https://zdzsc.zju.edu.cn/_upload/article/videos/ae/8b/efb9dd37409297f15460d51100f4/3b78cde6-3fc1-47ef-a1e2-e864841625d8-B.mp4',
]
import NJU_LOGO from '@/static/school-badge/南京大学 NJU.svg'
import ZJU_LOGO from '@/static/school-badge/浙江大学 ZJU-1.svg'
import FDU_LOGO from '@/static/school-badge/复旦大学 FDU-1.svg'
import SJTU_LOGO from '@/static/school-badge/上海交通大学 SJTU-1.svg'
import USTC_LOGO from '@/static/school-badge/中国科学技术大学 USTC-1.svg'
import THU_LOGO from '@/static/school-badge/清华大学 THU-1.svg'
import PKU_LOGO from '@/static/school-badge/北京大学 PKU-1.svg'
export interface VideoSchoolType {
  schoolName: string
  schoolLogo: string
  schoolSiteUrl: string
  schoolRecuritmentUrl: string
  videoUrl: string
  schoolBdage: React.ReactNode
  schoolCover: string
}

export const VideoSchoolList: VideoSchoolType[] = [
  {
    schoolName: '南京大学',
    schoolLogo: 'https://www.nju.edu.cn/images/list_box12_ico.png',
    schoolSiteUrl: 'https://www.nju.edu.cn/',
    schoolRecuritmentUrl: 'https://bkzs.nju.edu.cn',
    videoUrl:
      'https://bkzs.nju.edu.cn/upload/cms/video/3dc16732de844d53b73f1c60f319cfbe.mp4',
    schoolBdage: <NJU_LOGO />,
    schoolCover: '/video-image/nju1.jpg',
  },
  {
    schoolName: '南京大学',
    schoolLogo: 'https://www.nju.edu.cn/images/list_box12_ico.png',
    schoolSiteUrl: 'https://www.nju.edu.cn/',
    schoolRecuritmentUrl: 'https://bkzs.nju.edu.cn',
    videoUrl:
      'https://bkzs.nju.edu.cn/upload/cms/video/92bec00c5c144aa1a8a34aa3a052be5d.mp4',

    schoolBdage: <NJU_LOGO />,
    schoolCover: '/video-image/nju2.jpg',
  },
  {
    schoolName: '南京大学',
    schoolLogo: 'https://www.nju.edu.cn/images/list_box12_ico.png',
    schoolSiteUrl: 'https://www.nju.edu.cn/',
    schoolRecuritmentUrl: 'https://bkzs.nju.edu.cn/',
    videoUrl:
      'https://bkzs.nju.edu.cn/upload/cms/video/e5663e84db014278a4ca59ba3f33ae00.mp4',
    schoolBdage: <NJU_LOGO />,
    schoolCover: '/video-image/nju3.jpg',
  },
  {
    schoolName: '南京大学',
    schoolLogo: 'https://www.nju.edu.cn/images/list_box12_ico.png',
    schoolSiteUrl: 'https://www.nju.edu.cn/',
    schoolRecuritmentUrl: 'https://bkzs.nju.edu.cn/',
    videoUrl:
      'https://bkzs.nju.edu.cn/upload/cms/video/fce8244248b145eeae89ee16a5fb49ce.mp4',
    schoolBdage: <NJU_LOGO />,
    schoolCover: '/video-image/nju4.jpg',
  },
  {
    schoolName: '浙江大学',
    schoolLogo:
      'https://www.zju.edu.cn/_upload/tpl/05/e5/1509/template1509/images/logo.png',
    schoolSiteUrl: 'https://www.zju.edu.cn/',
    schoolRecuritmentUrl: 'https://zdzsc.zju.edu.cn/',
    videoUrl:
      'https://zdzsc.zju.edu.cn/_upload/article/videos/f9/ad/97e15ccf4a619d9f0fb1ceca1c30/48686922-7e4c-48e3-945e-6e5a60b5f6ab-B.mp4',
    schoolBdage: <ZJU_LOGO />,
    schoolCover: '/video-image/zju.jpg',
  },
  {
    schoolName: '浙江大学',
    schoolLogo:
      'https://www.zju.edu.cn/_upload/tpl/05/e5/1509/template1509/images/logo.png',
    schoolSiteUrl: 'https://www.zju.edu.cn/',
    schoolRecuritmentUrl: 'https://zdzsc.zju.edu.cn/',
    videoUrl:
      'https://zdzsc.zju.edu.cn/_upload/article/videos/13/3a/c74ace004db59744c4134e092c5e/08e0e213-098b-4e30-aa12-c8513c4eedd3.mp4',
    schoolBdage: <ZJU_LOGO />,
    schoolCover: '/video-image/zju2.jpg',
  },
  {
    schoolName: '复旦大学',
    schoolLogo: 'https://www.fudan.edu.cn/new_/site1/public/images/logo.png',
    schoolSiteUrl: 'https://www.fudan.edu.cn/',
    schoolRecuritmentUrl: 'https://ao.fudan.edu.cn/',
    videoUrl:
      'https://ao.fudan.edu.cn/_upload/article/videos/9d/c1/df6cb8fa4728864e0f1672e08ee0/99b200b7-ff63-430b-83ad-b7f0b57ebdf6-B.mp4',
    schoolBdage: <FDU_LOGO />,
    schoolCover: '/video-image/fdu.jpg',
  },
  {
    schoolName: '上海交通大学',
    schoolLogo: 'https://www.sjtu.edu.cn/images/sjtu_logo.png',
    schoolSiteUrl: 'https://www.sjtu.edu.cn/',
    schoolRecuritmentUrl: 'https://zsb.sjtu.edu.cn/web/jdzsb/3810001.htm',
    videoUrl:
      'https://file.hntv.tv/attachment/dxnum/1668147323975700481/2023/47f207d2a7de1f2870988640d36553e2.mp4',
    schoolBdage: <SJTU_LOGO />,
    schoolCover: '/video-image/SJTU.jpg',
  },
  {
    schoolName: '中国科学技术大学',
    schoolLogo: 'https://www.ustc.edu.cn/_static/image/logo.png',
    schoolSiteUrl: 'https://www.ustc.edu.cn/',
    schoolRecuritmentUrl: 'https://zsb.ustc.edu.cn/main.htm',
    videoUrl:
      'https://zsb.ustc.edu.cn/_upload/article/videos/d1/ad/646006954f7aa9bf726770c65667/ed522026-7e73-4b9f-a734-2a7b8f1ba5d6.mp4',
    schoolBdage: <USTC_LOGO />,
    schoolCover: '/video-image/USTC.jpg',
  },
  {
    schoolName: '清华大学',
    schoolLogo: 'https://www.tsinghua.edu.cn/publish/th/images/logo.png',
    schoolSiteUrl: 'https://www.tsinghua.edu.cn/',
    schoolRecuritmentUrl: 'https://join-tsinghua.edu.cn/',
    videoUrl:
      'https://join-tsinghua.edu.cn/__local/B/FE/07/9CD9395EB7467061A47B20A4256_2A8DCC2C_2B26AB85.mp4?e=.mp4',
    schoolBdage: <THU_LOGO />,
    schoolCover: '/video-image/thu.jpg',
  },
  {
    schoolName: '北京大学',
    schoolLogo:
      '	https://www.pku.edu.cn/Uploads/Picture/2019/12/26/s5e04147ee4a83.png',
    schoolSiteUrl: 'https://www.pku.edu.cn/',
    schoolRecuritmentUrl: 'https://www.gotopku.cn/',
    videoUrl: 'https://www.gotopku.cn/uploads/movie/202007/06/nddxzf.mp4',
    schoolBdage: <PKU_LOGO />,
    schoolCover: '/video-image/pku.jpg',
  },
]

interface WeChatArticle {
  image: string
  title: string
  description: string
  destinationLink: string
}
export const WeChatArticles: WeChatArticle[] = [
  {
    image: '/wechat/1-miss-in-nju.jpg',
    title: '朝思暮念，深情南大，等你相见',
    description: `朝思暮念，深情南大，等你相见
    `,
    destinationLink: 'https://mp.weixin.qq.com/s/sCDiTbGu6AnSkW42NEWy5g',
  },
  {
    image: '/wechat/2-most-beautiful.jpg',
    title: '在南大，翻开最美一“叶”',
    description: `在四季打翻的调色盘里

    树叶是另一个世界的入口
    
    秋冬之交的校园
    
    明媚又温暖 深邃又浪漫
    
    这是属于南大的橙黄橘绿时`,
    destinationLink: 'https://mp.weixin.qq.com/s/j23UT9O_KYlaNeBZJG3NDw',
  },
  {
    image: '/wechat/3-nju-60.jpg',
    title: '越过时间之窗，南大静候君来',
    description: `百余年风霜洗礼

    岁月中披星戴月
    
    甘做一点星火，汇聚未来的光
    
    百廿华诞在即，南大静候君来
    `,
    destinationLink: 'https://mp.weixin.qq.com/s/n3ofv53IyXrri41MyYRFtA',
  },
  {
    image: '/wechat/4-flower.jpg',
    title: '一个南大，两城樱花，共赴春意与校园的约会吧',
    description: `苏州校区 太湖之畔
    樱花嫣然绽放
  
    太湖之滨，庄里山畔
    
    有轨电车缓缓驶过
    
    你是否还记得
    
    那个春天相遇的约定？`,
    destinationLink: 'https://mp.weixin.qq.com/s/mG_1z5-Bknv0WyWXg1oktg',
  },
  {
    image: '/wechat/5-flower-slow.jpg',
    title: '如云似雪，这样的南大春景不容错过',
    description: `三月漫步在南大校园内

    一簇簇枝头摇曳的小花伴着红叶盛开
    
    远观如绯色云霞 
    
    微风拂过
    
    花瓣如冬日里的雪花飘落`,
    destinationLink: 'https://mp.weixin.qq.com/s/PLQTBYrVPXbq53GrMIw27w',
  },
  {
    image: '/wechat/6-double-city.jpg',
    title: '百廿新页码，两城读南大！',
    description: `始于三江，诚耀百廿
    教泽流长
    金陵姑苏，磁极合奏
    双城交响
    南京大学建校120周年
    华诞之际`,
    destinationLink: 'https://mp.weixin.qq.com/s/n3ofv53IyXrri41MyYRFtA',
  },
  {
    image: '/wechat/7-gulou.jpg',
    title: '且听鼓楼钟声回响，追忆南大百廿岁月',
    description: `南京大学鼓楼校区,如画的风景里，坐落端庄的建筑,深厚的历史底蕴，彰显人文关怀就让我们跟随镜头...`,
    destinationLink: 'https://mp.weixin.qq.com/s/0B9rM5AsLyM9UjwsE6YMng',
  },
]
