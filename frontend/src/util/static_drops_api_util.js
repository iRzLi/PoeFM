import axios from "axios";

export const getStaticDrops = () => {
    return axios.get("/api/static");
}