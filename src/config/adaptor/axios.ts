import axios from "axios";
import {ServerConfig} from "@/config/server/server";
console.log(ServerConfig.routes.baseRoute)
export const axiosInstance = axios.create({
    baseURL: ServerConfig.routes.baseRoute,
    withCredentials: true,
})
