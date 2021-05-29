const INITIAL_STATE = {
  isModalShow: false,
	address: null
};


const addressReducer = ( state = INITIAL_STATE, action ) => {
	switch (action.type) {
		case "showModal":
			return {
				...state,
				isModalShow: action.payload
			}	
		case "setAddress":
			return {
				...state,
				address: action.payload
			}	
		default:
			return state
	}
}


export default addressReducer