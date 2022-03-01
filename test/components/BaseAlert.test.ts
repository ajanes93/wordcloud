import { render } from '@testing-library/vue'
import itRendersSlotData from './utils/itRendersSlotData'
import BaseAlert from '../../src/components/BaseAlert.vue'

test('it renders slot data', () => itRendersSlotData(BaseAlert))

test('it sets the color classes', () => {
    const color = 'red'
    const { getByTestId } = render(BaseAlert, {
        props: { color }
    })

    const classList = getByTestId('alert').classList
    const colorClasses = [`bg-${color}`, `border-${color}`, `text-${color}`]

    colorClasses.forEach((colorClass) => classList.contains(colorClass))
})
