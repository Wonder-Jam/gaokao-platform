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
  }
}
