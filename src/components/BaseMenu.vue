<script
    setup
    lang="ts"
>
import { computed, ref } from 'vue'

interface MouseEvents {
    mouseenter: () => void
    mouseleave: () => void
}

interface MenuStyle {
    right?: number
    left?: number
    bottom?: string
}

const hover = ref(false)
const events = ref<MouseEvents>({
    mouseenter: () => (hover.value = true),
    mouseleave: () => (hover.value = false)
})

const menu = ref<Element | null>(null)

const menuStyle = computed((): MenuStyle => {
    if (!menu.value) {
        return {}
    }

    const position = menu.value.getBoundingClientRect()
    const xThreshold = position.x > window.innerWidth / 2
    const yThreshold = position.y > window.innerHeight / 2

    return {
        right: xThreshold ? 0 : undefined,
        left: !xThreshold ? 0 : undefined,
        bottom: yThreshold ? '100%' : undefined
    }
})
</script>

<template>
    <div
        ref="menu"
        class="relative"
    >
        <!-- @slot activator -->
        <slot
            name="activator"
            :on="events"
        ></slot>
        <div
            v-show="hover"
            class="absolute z-10"
            :style="menuStyle"
        >
            <div class="bg-gray-100 p-3 rounded-md shadow-xl">
                <!-- @slot menu -->
                <slot name="menu"></slot>
            </div>
        </div>
    </div>
</template>
