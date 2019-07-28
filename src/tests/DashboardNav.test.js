import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'

import DashboardNav from '../components/DashboardNav'
configure({ adapter: new Adapter() })

describe('<NavigationItems/>', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<DashboardNav />);
    });
    it('should render unlock dragging icon', () => {
        wrapper.setProps({ lockedDraggable: true })
        expect(wrapper.find('div.czx')).toHaveLength(1);
    })
    it('should render two navitems if not authenticated', () => {
        wrapper.setProps({ lockedDraggable: false })
        expect(wrapper.find('.div.czx')).toHaveLength(0);
    })
})