export type Sentiment = {
    negative?: number
    neutral?: number
    positive?: number
}

export type Day = {
    date: string
    volume: number
}

export type PageType = {
    blog: number
    facebook: number
    forum: number
    general: number
    image: number
    news: number
    review: number
    twitter: number
    video: number
}

export type Query = {
    id: number
    name: string
    volume: number
}

export interface Topic {
    id: string
    label: string
    volume: number
    type: string
    sentimentScore: number
    sentiment: Sentiment
    days: Day[]
    pageType: PageType
    queries: Query[]
}
