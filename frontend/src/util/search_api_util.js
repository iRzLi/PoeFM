import axios from "axios";

export const getItemKeys = (obj) => {
    return axios.post('/api/itemKeys', {searchObj: obj})
}