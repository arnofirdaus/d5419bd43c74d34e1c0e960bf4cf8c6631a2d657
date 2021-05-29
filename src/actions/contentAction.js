export const showCart = (show) => {
	return (dispatch) => {
		dispatch({
			type: "showCart",
			payload: show
		})
	}
}

export const showTab = (show) => {
	return (dispatch) => {
		dispatch({
			type: "showTab",
			payload: show
		})
	}
}

