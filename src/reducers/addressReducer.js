const INITIAL_STATE = {
  isModalShow: false
};


const addressReducer = ( state = INITIAL_STATE, action ) => {
	switch (action.type) {
		case "showModal":
			return {
				...state,
				isModalShow: action.payload
			}	
		default:
			return state
	}
}


export default addressReducer