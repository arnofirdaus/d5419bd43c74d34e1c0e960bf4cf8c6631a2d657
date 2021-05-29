import * as contentAction from './contentAction'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middleware = [thunk]
const mockStore = configureMockStore(middleware)

describe('show chart', () => {
  it('should change state isCartShow to true', () => {
    const expectedActions = [{
			type: 'showCart', 
			payload: true
		}]

    const store = mockStore({ isCartShow: false })
    store.dispatch(contentAction.showCart(true))

    expect(store.getActions()).toEqual(expectedActions)
  })
})

describe('show tab', () => {
  it('should change state isTabShow to true', () => {
    const expectedActions = [{
			type: 'showTab', 
			payload: true
		}]

    const store = mockStore({ isTabShow: false })
    store.dispatch(contentAction.showTab(true))

    expect(store.getActions()).toEqual(expectedActions)
  })
})