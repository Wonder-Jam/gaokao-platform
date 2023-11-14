export const videoList = [
  'https://bkzs.nju.edu.cn/upload/cms/video/3dc16732de844d53b73f1c60f319cfbe.mp4',
  'https://bkzs.nju.edu.cn/upload/cms/video/92bec00c5c144aa1a8a34aa3a052be5d.mp4',
  'https://bkzs.nju.edu.cn/upload/cms/video/e5663e84db014278a4ca59ba3f33ae00.mp4',
  'https://bkzs.nju.edu.cn/upload/cms/video/fce8244248b145eeae89ee16a5fb49ce.mp4',
  'https://zdzsc.zju.edu.cn/_upload/article/videos/f9/ad/97e15ccf4a619d9f0fb1ceca1c30/48686922-7e4c-48e3-945e-6e5a60b5f6ab-B.mp4',
  'https://zdzsc.zju.edu.cn/_upload/article/videos/13/3a/c74ace004db59744c4134e092c5e/08e0e213-098b-4e30-aa12-c8513c4eedd3.mp4',
  'https://zdzsc.zju.edu.cn/_upload/article/videos/ae/8b/efb9dd37409297f15460d51100f4/3b78cde6-3fc1-47ef-a1e2-e864841625d8-B.mp4',
]

export interface VideoSchoolType {
  schoolName: string
  schoolLogo: string
  schoolSiteUrl: string
  schoolRecuritmentUrl: string
  videoUrl: string
}

export const VideoSchoolList: VideoSchoolType[] = [
  {
    schoolName: '南京大学',
    schoolLogo: 'https://www.nju.edu.cn/images/list_box12_ico.png',
    schoolSiteUrl: 'https://www.nju.edu.cn/',
    schoolRecuritmentUrl: 'https://bkzs.nju.edu.cn',
    videoUrl:
      'https://bkzs.nju.edu.cn/upload/cms/video/3dc16732de844d53b73f1c60f319cfbe.mp4',
  },
  {
    schoolName: '南京大学',
    schoolLogo: 'https://www.nju.edu.cn/images/list_box12_ico.png',
    schoolSiteUrl: 'https://www.nju.edu.cn/',
    schoolRecuritmentUrl: 'https://bkzs.nju.edu.cn',
    videoUrl:
      'https://bkzs.nju.edu.cn/upload/cms/video/92bec00c5c144aa1a8a34aa3a052be5d.mp4',
  },
  {
    schoolName: '南京大学',
    schoolLogo: 'https://www.nju.edu.cn/images/list_box12_ico.png',
    schoolSiteUrl: 'https://www.nju.edu.cn/',
    schoolRecuritmentUrl: 'https://bkzs.nju.edu.cn/',
    videoUrl:
      'https://bkzs.nju.edu.cn/upload/cms/video/e5663e84db014278a4ca59ba3f33ae00.mp4',
  },
  {
    schoolName: '南京大学',
    schoolLogo: 'https://www.nju.edu.cn/images/list_box12_ico.png',
    schoolSiteUrl: 'https://www.nju.edu.cn/',
    schoolRecuritmentUrl: 'https://bkzs.nju.edu.cn/',
    videoUrl:
      'https://bkzs.nju.edu.cn/upload/cms/video/fce8244248b145eeae89ee16a5fb49ce.mp4',
  },
  {
    schoolName: '浙江大学',
    schoolLogo:
      'https://www.zju.edu.cn/_upload/tpl/05/e5/1509/template1509/images/logo.png',
    schoolSiteUrl: 'https://www.zju.edu.cn/',
    schoolRecuritmentUrl: 'https://zdzsc.zju.edu.cn/',
    videoUrl:
      'https://zdzsc.zju.edu.cn/_upload/article/videos/f9/ad/97e15ccf4a619d9f0fb1ceca1c30/48686922-7e4c-48e3-945e-6e5a60b5f6ab-B.mp4',
  },
  {
    schoolName: '浙江大学',
    schoolLogo:
      'https://www.zju.edu.cn/_upload/tpl/05/e5/1509/template1509/images/logo.png',
    schoolSiteUrl: 'https://www.zju.edu.cn/',
    schoolRecuritmentUrl: 'https://zdzsc.zju.edu.cn/',
    videoUrl:
      'https://zdzsc.zju.edu.cn/_upload/article/videos/13/3a/c74ace004db59744c4134e092c5e/08e0e213-098b-4e30-aa12-c8513c4eedd3.mp4',
  },
  {
    schoolName: '复旦大学',
    schoolLogo: 'https://www.fudan.edu.cn/new_/site1/public/images/logo.png',
    schoolSiteUrl: 'https://www.fudan.edu.cn/',
    schoolRecuritmentUrl: 'https://ao.fudan.edu.cn/',
    videoUrl: 'xxx',
  },
  {
    schoolName: '上海交通大学',
    schoolLogo: 'https://www.sjtu.edu.cn/images/sjtu_logo.png',
    schoolSiteUrl: 'https://www.sjtu.edu.cn/',
    schoolRecuritmentUrl: 'https://zsb.sjtu.edu.cn/web/jdzsb/3810001.htm',
    videoUrl: 'xxx',
  },
  {
    schoolName: '中国科学技术大学',
    schoolLogo: 'https://www.ustc.edu.cn/_static/image/logo.png',
    schoolSiteUrl: 'https://www.ustc.edu.cn/',
    schoolRecuritmentUrl: 'https://zsb.ustc.edu.cn/main.htm',
    videoUrl: 'xxx',
  },
  {
    schoolName: '清华大学',
    schoolLogo: 'https://www.tsinghua.edu.cn/publish/th/images/logo.png',
    schoolSiteUrl: 'https://www.tsinghua.edu.cn/',
    schoolRecuritmentUrl: 'https://join-tsinghua.edu.cn/',
    videoUrl: '',
  },
  {
    schoolName: '北京大学',
    schoolLogo:
      '	https://www.pku.edu.cn/Uploads/Picture/2019/12/26/s5e04147ee4a83.png',
    schoolSiteUrl: 'https://www.pku.edu.cn/',
    schoolRecuritmentUrl: 'https://www.gotopku.cn/',
    videoUrl: '',
  },
]

export const data: any[] = VideoSchoolList.map(data => {
  return {
    ...data,
    image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  }
})
