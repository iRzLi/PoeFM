import axios from "axios";

export const getLeagues = () => {
    return axios.get("/api/leagues");
}