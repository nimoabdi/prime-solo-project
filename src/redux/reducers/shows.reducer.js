const showsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SHOWS':
            return action.payload;
        default:
            return state;
    }
};

export default showsReducer;