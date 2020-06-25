const INITIAL_STATE = {
    name: '',
    image: '',
    isSigned: false
};

const users = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SINGIN':
            return { ...state, name: action.payload.name, image: action.payload.image, isSigned: true };
        default:
            return state;
    }
}

export default users;