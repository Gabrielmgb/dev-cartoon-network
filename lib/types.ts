export interface Show {
  id: string
  name: string
  image:string
  banner:string
  posterQuery: string
  bannerQuery: string
  description: string
  characters: {
    name: string
    query: string
    char: string
  }[]
  details: {
    creator: string
    year: string
    episodes: string
  }
}

export interface Game {
  id: string
  title: string
  description: string
  imageQuery: string
  category: string
  href: string
  image: string
}

export interface Video {
  id: string
  title: string
  show: string
  thumbnailQuery: string
  duration: string
  youtubeUrl: string
}

export interface LigaToonTeam {
  name: string
  logoQuery: string
  captain: string
}

export interface ClimateTip {
  title: string
  description: string
  iconQuery: string
  characterQuery: string
}

export interface AppDetails {
  name: string
  description: string
  iconQuery: string
  screenshots: string[]
  ios_href: string
  android_href: string
}

export interface NewsArticle {
  id: string
  category: string
  headline: string
  snippet: string
  imageQuery: string
  href: string
}
