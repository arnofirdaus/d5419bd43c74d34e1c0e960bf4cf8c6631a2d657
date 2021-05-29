import * as addressAction from './addressAction'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middleware = [thunk]
const mockStore = configureMockStore(middleware)

describe('show modal', () => {
  it('should change state isModalShow to true', () => {
    const expectedActions = [{
			type: 'showModal', 
			payload: true
		}]

    const store = mockStore({ isModalShow: false })
    store.dispatch(addressAction.showModal(true))

    expect(store.getActions()).toEqual(expectedActions)
  })
})

describe('close modal', () => {
  it('should change state isModalShow to false', () => {
    const expectedActions = [{
			type: 'showModal', 
			payload: false
		}]

    const store = mockStore({ isModalShow: true })
    store.dispatch(addressAction.showModal(false))

    expect(store.getActions()).toEqual(expectedActions)
  })
})