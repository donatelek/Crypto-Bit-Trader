import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import * as actions from '../store/actions'
import { storeFactory } from './testutils';
import Dropdown from '../components/Dropdown'
configure({ adapter: new Adapter() })
const setup = (state = {}) => {
    const store = storeFactory(state);
    const wrapper = shallow(<Dropdown store={store} />).dive();
    return wrapper;
}
const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[test=${val}]`)
}
describe('<Dropdown/>', () => {
    it('should render unlock dragging icon', () => {
        const showCalculator = true;
        const wrapper = setup({ showCalculator });
        const successProp = wrapper.instance().props.showCalculator;
        expect(successProp).toBe(showCalculator);
    })
})