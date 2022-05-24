// EmailJs
import emailjs from '@emailjs/browser';

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
export function sendMessage(serviceId, templateId, messageInfo, key) {
    emailjs.sendForm (serviceId, templateId, messageInfo, key)
        .then((results => {
            return results;
        }, (error) => {
            return error.text;
        }))
}