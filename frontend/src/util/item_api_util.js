import axios from "axios";

export const getItems = () => {
    return axios.get("/api/items");
}