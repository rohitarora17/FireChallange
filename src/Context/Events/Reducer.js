const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: `${action.payload}`,
            };
        case 'SET_DATA':
            return {
                ...state,
                data: action.payload
            };
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;