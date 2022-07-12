const updatedShows = (state = [], action) => {
    switch (action.type) {
        case 'SET_UPDATED_SHOWS':
            return action.payload;
        default:
            return state;
    }
};


export default updatedShows; 