export const auth = (data) => {
    return {
        type: 'user-info',
        payload: data
    }
}

export const logout = () => {
    return {
        type: 'logout'
    }
}