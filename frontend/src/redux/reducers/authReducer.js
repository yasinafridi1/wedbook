const initialState = {
    auth: false,
    user: {}
}

export default function authReducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'user-info': {
            return {
                ...state,
                auth: true,
                user: {
                    payload
                }
            }
        }
        case 'logout': {
            return {
                auth: false,
                user: {}
            }
        }
        default:
            return state;
    }
}