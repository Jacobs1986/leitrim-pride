// Reducer function
export function reducer(state, event) {
    if (event.reset) {
        state = {}
        return state
    }
    return {
        ...state,
        [event.name]: event.value
    }
}

// Send the message
export function sendMessage(messageInfo) {
    console.log(messageInfo)
    return
}