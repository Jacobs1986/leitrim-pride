import axios from "axios";

export function messages(information) {
    return axios.post("/api/message/send", information);
}