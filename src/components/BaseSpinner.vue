<script
    setup
    lang="ts"
>
const props = withDefaults(
    defineProps<{
        size: number
    }>(),
    {
        size: 16
    }
)
</script>

<template>
    <div class="flex items-center justify-center">
        <div :class="`w-${props.size} h-${props.size} border-b-2 border-gray-900 rounded-full animate-spin`"></div>
    </div>
</template>
