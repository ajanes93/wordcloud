<script
    setup
    lang="ts"
>
const props = defineProps<{
    color: string
}>()
</script>

<template>
    <div
        data-testid="alert"
        :class="`bg-${props.color}-100 border border-${props.color}-400 text-${props.color}-700 px-4 py-3 rounded relative text-center`"
        role="alert"
    >
        <slot></slot>
    </div>
</template>
