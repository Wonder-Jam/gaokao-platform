export interface VideoSchoolType {
  schoolName: string
  schoolLogo: string
  schoolSiteUrl: string
  schoolRecuritmentUrl: string
  videoUrl: string
  schoolBdage: string
  schoolCover: string
}

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
