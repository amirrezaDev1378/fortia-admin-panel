import {ServerConfig} from "@/config/server/server";
import {axiosInstance} from "@/config/adaptor/axios";

type LoginServiceType = (username: string, password: string) => Promise<{ status:number , data:any }>;

export const LoginService: LoginServiceType = async (username, password) => {
    const {status, data} = await axiosInstance.post(ServerConfig.routes.login, {}
        , {
        params: {
            username,
            password
        },
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'Token',
            "Access-Control-Allow-Origin": "*",
        }
    }
)
    return {status, data};
}
