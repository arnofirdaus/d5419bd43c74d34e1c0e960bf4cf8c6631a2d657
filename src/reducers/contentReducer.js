const INITIAL_STATE = {
  isCartShow: false,
	isTabShow: true
};


const contentReducer = ( state = INITIAL_STATE, action ) => {
	switch (action.type) {
		case "showCart":
			return {
				...state,
				isCartShow: action.payload
			}	
		case "showTab":
			return {
				...state,
				isTabShow: action.payload
			}	
		default:
			return state
	}
}


export default contentReducer