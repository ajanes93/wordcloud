import { render } from '@testing-library/vue'
import BaseSpinner from '../../src/components/BaseSpinner.vue'

test('it sets the size classes', () => {
    const size = 16
    const { getByTestId } = render(BaseSpinner, {
        props: { size }
    })

    const classList = getByTestId('spinner').classList
    const sizeClasses = [`w-${size}`, `h-${size}`]

    sizeClasses.forEach((colorClass) => classList.contains(colorClass))
})
