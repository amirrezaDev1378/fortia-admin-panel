import {axiosInstance} from "@/config/adaptor/axios";
import {ServerConfig} from "@/config/server/server";

export const withdraw = async (formData) => {
    const url = ServerConfig.routes.credit.withdraw;
    const data = await axiosInstance.post(url, {
        data: {
            type: 'withdraw',
            amount: +formData.amount
        }
    }).catch((e) => {
        return e;
    })
    if (data instanceof Error || data.status !== 200) {
        throw new Error(data.message);
    } else {
        return data.data;
    }

}
