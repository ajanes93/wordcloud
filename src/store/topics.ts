import { defineStore } from 'pinia'
import { Topic } from '../models/topic.model'
import TopicsService from '../services/topics'

const topicsService = new TopicsService()

export type RootState = {
    topics: Topic[]
    volumeRanges: number[][]
    maxRangeItems: number
    negativeThreshold: number
    positiveThreshold: number
}

export type TopicColor = 'green' | 'red' | 'gray'

export interface TopicFormatted extends Topic {
    color: TopicColor
    size: number
}

export const useTopicsStore = defineStore({
    id: 'topics',
    state: () =>
        ({
            topics: [],
            volumeRanges: [],
            maxRangeItems: 6,
            negativeThreshold: 40,
            positiveThreshold: 60
        } as RootState),
    actions: {
        async fetchTopicsList() {
            try {
                const topics = await topicsService.fetchTopicsList()

                this.topics = topics.sort((a, b) => b.volume - a.volume)

                this.$patch((state) => {
                    const volumes = topics.map((topic) => topic.volume).sort((a, b) => a - b)
                    const volumeRanges: number[][] = []

                    for (let i = state.maxRangeItems; i > 0; i--) {
                        volumeRanges.push(volumes.splice(0, Math.ceil(volumes.length / i)))
                    }

                    state.volumeRanges = volumeRanges.map((range) => {
                        return [Math.min(...range), Math.max(...range)]
                    })
                })
            } catch (e: Error | any) {
                throw e
            }
        }
    },
    getters: {
        topicsFormatted(): TopicFormatted[] {
            return this.topics.map((topic) => {
                const { volume, sentimentScore } = topic
                const rangeIndex = this.volumeRanges.findIndex(([min, max]) => volume >= min && volume <= max)
                let size = 1
                let color: TopicColor

                if (rangeIndex > 0) {
                    size = rangeIndex + 0.4
                }

                if (sentimentScore > this.positiveThreshold) {
                    color = 'green'
                } else if (sentimentScore < this.negativeThreshold) {
                    color = 'red'
                } else {
                    color = 'gray'
                }

                return {
                    ...topic,
                    color,
                    size
                }
            })
        }
    }
})
