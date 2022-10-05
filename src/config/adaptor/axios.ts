import axios from "axios";
import {ServerConfig} from "@/config/server/server";

const getCustomHeaders = () => {
    let headers = {};
    if (localStorage.getItem("jwt")) {
        headers["Authorization"] = `Bearer ${localStorage.getItem("jwt")}`;
    }
    return headers;

}
export const axiosInstance = axios.create({
    baseURL: ServerConfig.routes.baseRoute,
    withCredentials: true,
    headers: getCustomHeaders()
})

// TODO delete local storage on usage
