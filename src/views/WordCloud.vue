<script
    setup
    lang="ts"
>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTopicsStore } from '../store/topics'
import BaseAlert from '../components/BaseAlert.vue'
import BaseList from '../components/BaseList.vue'
import BaseListItem from '../components/BaseListItem.vue'

const topicsStore = useTopicsStore()
const { topicsFormatted } = storeToRefs(topicsStore)
const errorMessage = ref<string | undefined>()

try {
    await topicsStore.fetchTopicsList()
} catch (e) {
    console.error(e)
    errorMessage.value = 'An unexpected error occurred!'
}
</script>

<template>
    <base-alert
        v-if="errorMessage"
        color="red"
    >
        <strong class="text-sm font-bold">
            {{ errorMessage }}
        </strong>
    </base-alert>
    <base-list v-else>
        <base-list-item
            v-for="{ id, label, size, color, volume, sentiment } in topicsFormatted"
            :id="id"
            :key="id"
            class="mt-4 mr-2"
            :label="label"
            :color="color"
            :size="size"
            :volume="volume"
            :sentiment="sentiment"
        ></base-list-item>
    </base-list>
</template>
