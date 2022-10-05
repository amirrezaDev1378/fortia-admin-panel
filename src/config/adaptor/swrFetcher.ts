import {axiosInstance} from "@/config/adaptor/axios";

export const swrFetcher = async (url) => {
    return await axiosInstance.get(url).then(res => {
        return res.data
    })
}
