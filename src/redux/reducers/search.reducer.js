const searchReducer = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_SERIES':
            return action.payload
            default:
            return state
    }
};
export default searchReducer;