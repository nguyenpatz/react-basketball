const reducer = (state, action) => {
	switch (action.type) {
		case "LOADING":
			return { ...state, loading: true };
			break;
		case "NO_LOADING":
			return { ...state, loading: false };
			break;
		case "UPLOAD_IMAGE":
			return { ...state, images: action.payload };
		default:
			return state;
	}
};

export default reducer;
