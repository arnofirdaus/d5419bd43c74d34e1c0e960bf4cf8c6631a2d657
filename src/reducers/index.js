import { combineReducers } from 'redux'
import addressReducer from './addressReducer'
import contentReducer from './contentReducer'


const reducers = combineReducers({
	content: contentReducer,
	address: addressReducer,
})

export default reducers