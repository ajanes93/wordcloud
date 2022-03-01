import { render, fireEvent, getByText } from '@testing-library/vue'
import BaseListItem from '../../src/components/BaseListItem.vue'
import { expect } from 'vitest'

const props = {
    id: 'test_id',
    label: 'Test',
    size: 2,
    color: 'red',
    volume: 6,
    sentiment: {
        positive: 1,
        neutral: 2,
        negative: 3
    }
}

it('displays the label with the correct color and size', () => {
    const { getByText, getByTestId } = render(BaseListItem, { props })

    getByText(props.label)

    const label = getByTestId('label')
    const labelClassList = label.classList
    const colorClasses = [`text-${props.color}`, `hover:text-${props.color}`]

    colorClasses.forEach((colorClass) => labelClassList.contains(colorClass))

    expect(label.style.fontSize).toEqual(`${props.size}em`)
})

it('displays menu content', () => {
    const { getByTestId } = render(BaseListItem, { props })

    const menuText = getByTestId('menu').textContent
    const menuItems = [
        `Information on topic "${props.label}"`,
        `Total Mentions: ${props.volume}`,
        `Positive Mentions: ${props.sentiment.positive}`,
        `Neutral Mentions: ${props.sentiment.neutral}`,
        `Negative Mentions: ${props.sentiment.negative}`
    ]

    menuItems.forEach((item) => {
        expect(menuText).toContain(item)
    })
})
