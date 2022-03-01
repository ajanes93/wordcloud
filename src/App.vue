<script
    setup
    lang="ts"
>
import BaseSpinner from './components/BaseSpinner.vue'
import WordCloud from './views/WordCloud.vue'
</script>

<template>
    <div
        class="flex h-screen"
        style="font-size: 10px"
    >
        <div class="max-w-screen-lg m-auto leading-none">
            <h1
                style="font-size: 5em"
                class="font-light text-center text-gray-700"
            >
                My Topics Challenge
            </h1>
            <hr class="my-6" />
            <suspense>
                <template #fallback>
                    <base-spinner></base-spinner>
                </template>
                <template #default>
                    <div class="pt-0 pb-12 px-12">
                        <word-cloud></word-cloud>
                    </div>
                </template>
            </suspense>
        </div>
    </div>
</template>
