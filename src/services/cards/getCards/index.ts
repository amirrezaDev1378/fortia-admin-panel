import useSWR from 'swr'
import {axiosInstance} from "@/config/adaptor/axios";
import {ServerConfig} from "@/config/server/server";

export const getCards = () => {
    const url = ServerConfig.routes.cards.getCards;
    const fetcher = async (url) => {
        return await axiosInstance.get(url).then(res => {
            return res.data
        })
    }

    const {data, error , mutate} = useSWR(url, fetcher)

    return {
        data,
        isLoading: !error && !data,
        hasError: !!error,
        error,
        hasNoCards: error?.response?.data?.error === "NO_CARDS_FOUND",
        mutate
    }
}
