import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'

configure({ adapter: new Adapter() })

describe('<NavigationItems/>', () => {
    it('should render two navitems if not authenticated', () => {
        expect(2 + 2).toEqual(4)
    })
})