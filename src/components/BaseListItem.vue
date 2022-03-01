<script
    setup
    lang="ts"
>
import { computed } from 'vue'
import { TopicColor } from '../store/topics'
import { Sentiment } from '../models/topic.model'
import BaseMenu from './BaseMenu.vue'

const props = defineProps<{
    id: string
    label: string
    size: number
    color: TopicColor
    volume: number
    sentiment: Sentiment
}>()

const sentimentFormatted = computed(
    (): Sentiment => ({
        positive: props.sentiment?.positive ?? 0,
        neutral: props.sentiment?.neutral ?? 0,
        negative: props.sentiment?.negative ?? 0
    })
)
</script>

<template>
    <li class="flex text-center">
        <base-menu>
            <template #activator="{ on }">
                <div
                    data-testid="label"
                    :class="`text-${props.color}-600 hover:text-${props.color}-400 cursor-pointer`"
                    :style="`font-size: ${size}em`"
                    v-on="on"
                >
                    {{ props.label }}
                </div>
            </template>
            <template #menu>
                <div data-testid="menu">
                    <h1 class="text-sm whitespace-nowrap font-bold">Information on topic "{{ props.label }}"</h1>
                    <ul class="my-3">
                        <li class="mb-3 font-medium text-sm">Total Mentions: {{ props.volume }}</li>
                        <li class="mt-1 text-sm">
                            Positive Mentions:
                            <span class="text-green-600 font-bold">{{ sentimentFormatted.positive }}</span>
                        </li>
                        <li class="mt-1 text-sm">
                            Neutral Mentions:
                            <span class="text-gray-600 font-bold">{{ sentimentFormatted.neutral }}</span>
                        </li>
                        <li class="mt-1 text-sm">
                            Negative Mentions:
                            <span class="text-red-600 font-bold">{{ sentimentFormatted.negative }}</span>
                        </li>
                    </ul>
                </div>
            </template>
        </base-menu>
    </li>
</template>
