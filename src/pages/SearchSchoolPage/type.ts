export interface ScorelineDataType {
  key: React.Key
  arts: number
  science: number
  year: number
}

export interface MajorDataType {
  key: React.Key
  major: string[]
  majorGroup: string
  admissionType: string
  category: string
  requirement: string
  year: number
  scoreLine: number
}

export interface UniversityDetailProps {
  name: string
  description: string
  tags: string[]
  website: string
  backgroundUrl: string
  logoUrl: string
  motto: string
  created: string
  dominant: string
  location: [
    {
      name: string
      place: string
    }
  ]
}
