import { setActivePinia, createPinia } from 'pinia'
import { TopicFormatted, useTopicsStore } from '../../src/store/topics'
import { beforeEach, expect, spyOn } from 'vitest'
import topic from './fixtures/topic.json'

beforeEach(() => {
    setActivePinia(createPinia())
})

it('fetches topics', () => {
    const store = useTopicsStore()

    const spy = spyOn(store, 'fetchTopicsList')

    store.fetchTopicsList()

    expect(spy).toHaveBeenCalledOnce()
})

it('formats topics', () => {
    const store = useTopicsStore()

    store.topics = [topic]

    expect(store.topicsFormatted[0]).toEqual(<TopicFormatted>{
        ...topic,
        size: 1,
        color: 'green'
    })
})
