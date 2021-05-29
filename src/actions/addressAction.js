export const showModal = (show) => {
	return (dispatch) => {
		dispatch({
			type: "showModal",
			payload: show
		})
	}
}