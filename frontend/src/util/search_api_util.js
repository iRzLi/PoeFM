import axios from "axios";

export const getItemKeys = (obj) => {
    return axios.post('/api/itemKeys', {searchObj: obj})
}

export const getItems = (itemKeyObj, offset) => {
    return axios.post('/api/itemKeys/getItems', { itemKeyObj, offset })
}