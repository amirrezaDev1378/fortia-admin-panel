import {ServerConfig} from "@/config/server/server";
import {axiosInstance} from "@/config/adaptor/axios";
import {SetUser} from "@/services/login/setUser";

type LoginServiceType = (identifier: string, password: string) => Promise<{ isUserSaved: boolean, user: object | null }>;

export const LoginService: LoginServiceType = async (username, password) => {
    const {status, data} = await axiosInstance.post(ServerConfig.routes.login, {
            identifier: username,
            password: password
        }
        , {}
    )
    const {jwt, user} = data;
    const isUserSaved = SetUser(jwt, user);

    return {isUserSaved, user};
}
