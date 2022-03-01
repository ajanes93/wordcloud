import itRendersSlotData from './utils/itRendersSlotData'
import BaseMenu from '../../src/components/BaseMenu.vue'

test('it renders slot data', () =>
    itRendersSlotData(BaseMenu, {
        activator: 'Activator',
        menu: 'Menu'
    }))
