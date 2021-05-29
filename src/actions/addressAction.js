export const showModal = (show) => {
	return (dispatch) => {
		dispatch({
			type: "showModal",
			payload: show
		})
	}
}

export const setAddress = (value) => {
	return (dispatch => {
		dispatch({
			type: "setAddress",
			payload: value
		})
	})
}