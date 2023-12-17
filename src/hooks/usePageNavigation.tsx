import { useRouter } from 'next/router'

export function usePageNavigation() {
  const router = useRouter()
  return {
    goToMainPage() {
      router.push('/MainPage')
    },
    goToSearchSchoolPage(params: any = null) {
      router.push({
        pathname: '/SearchSchoolPage',
        query: params,
      })
    },
    goToSearchMajorPage() {
      router.push('/SearchMajorPage')
    },
    goToYangGuangGaoKaoPage() {
      window.location.href = 'https://gaokao.chsi.com.cn/'
    },
    goToEolPage() {
      window.open('https://www.eol.cn/', '_blank')
    },
    goToSchoolDetailPage() {
      router.push('/SchoolDetailPage')
    },
  }
}
