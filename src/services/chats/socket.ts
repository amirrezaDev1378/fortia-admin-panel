import {io, Socket} from "socket.io-client";

import {ServerConfig} from "@/config/server/server";
import {getUser} from "@/services/login/getUser";
import {ClientToServerEvents, ServerToClientEvents} from "@/types";

const user = getUser()
if (!user) {
    throw new Error('User is not logged in')
}
export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(ServerConfig.routes.socket.path, {
    auth: {
        token: getUser().jwt
    }
});
socket.io.on("error", (error) => {
    throw error;
});



