import { useRouter } from 'next/router'

export function usePageNavigation() {
  const router = useRouter()
  return {
    goToMainPage() {
      router.push('/MainPage')
    },
    goToSearchSchoolPage() {
      router.push('/SearchSchoolPage')
    },
    goToSearchMajorPage() {
      router.push('/SearchMajorPage')
    },
    goToYangGuangGaoKaoPage(){
      window.location.href = 'https://gaokao.chsi.com.cn/'
    },
    goToEolPage(){
      window.location.href = 'https://www.eol.cn/'
    }
  }
}
