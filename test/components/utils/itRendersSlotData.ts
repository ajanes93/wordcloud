import { render } from '@testing-library/vue'
import { Component } from 'vue'

type Slots = {
    [key: string]: string
}

export default function itRendersSlotData(component: Component, slots: Slots = { default: 'Test Item' }) {
    const { getByText } = render(component, { slots })

    Object.keys(slots).forEach((key) => {
        getByText(slots[key])
    })
}
