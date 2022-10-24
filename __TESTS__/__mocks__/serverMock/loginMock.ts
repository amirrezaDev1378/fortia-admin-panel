import {ServerConfig} from "@/config/server/server";
import {setupServer} from "msw/node";
import {rest} from "msw";

const handlersObject = {
    success: rest.post(ServerConfig.routes.login, async (req, res, ctx) => {
        const {identifier, password} = await req.json();
        if (!identifier || !password) return res(ctx.status(400));

        return res(
            ctx.json({
                token: 'token',
                user: {
                    id: 1,
                    username: 'username',
                    email: 'email',
                    role: 'admin'
                },
                isUserSaved: true
            }),
        )
    }),
    fail: rest.post(ServerConfig.routes.login, async (req, res, ctx) => {

        return res(
            ctx.status(400),
            ctx.json({
                error: 'error',
                isUserSaved: false
            }),
        )
    }),
}
export const handlers = Object.values(handlersObject)
const LoginMock = (type:"success" | "fail") => {
    const handler = handlersObject[type];
    const server = setupServer(
        handler
    )
    server.listen();
    return server;

}
export default LoginMock
