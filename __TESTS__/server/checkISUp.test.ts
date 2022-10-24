import {axiosInstance} from "@/config/adaptor/axios";
import {ServerConfig} from "@/config/server/server";

describe('Server is Up and working', () => {
    it('should be up', () => {
        axiosInstance.get(ServerConfig.routes.baseRoute).then((response) => {
            expect(response.status).toBe(200);
        }).catch((error) => {
            throw new Error(error);
        })

    });
});
