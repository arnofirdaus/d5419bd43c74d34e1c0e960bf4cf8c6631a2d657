const INITIAL_STATE = {
  isShow: false
};


const cartReducer = ( state = INITIAL_STATE, action ) => {
	switch (action.type) {
		case "showCart":
			return {
				...state,
				isShow: action.payload
			}	
		default:
			return state
	}
}


export default cartReducer