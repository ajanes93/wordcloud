import axios, { AxiosResponse } from 'axios'
import { Topic } from '../../models/topic.model'

export default class Topics {
    protected client = axios.create({
        baseURL: import.meta.env.VITE_TOPICS_SERVICE_URL,
        timeout: 60000,
        withCredentials: false
    })

    async fetchTopicsList(): Promise<Topic[]> {
        try {
            const { data } = await this.client.get<any, AxiosResponse<{ topics: Topic[] }>>('/')
            const { topics } = data

            return topics
        } catch (e: Error | any) {
            throw e
        }
    }
}
