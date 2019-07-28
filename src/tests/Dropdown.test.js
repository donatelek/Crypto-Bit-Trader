import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import * as actions from '../store/actions'
import Dropdown from '../components/Dropdown'
configure({ adapter: new Adapter() })
const setup = (props = {}) => {
    const setupProps = { ...props }
    return shallow(<Dropdown {...setupProps} />)
}
const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[test=${val}]`)
}
describe('<Dropdown/>', () => {
    // let wrapper
    // beforeEach(() => {
    // wrapper = shallow(<Dropdown />);
    // });
    it('should render unlock dragging icon', () => {
        const wrapper = setup()
        const component = findByTestAttr(wrapper, 'wrapper')
        expect(component.length).toBe(1)
        // wrapper.setProps({ lockedDraggable: true })
        // expect(wrapper.find('div')).toHaveLength(10);
    })

})