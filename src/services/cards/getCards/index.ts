import useSWR from 'swr'
import {ServerConfig} from "@/config/server/server";
import {ApiCardCard} from "@/types/strapi";
import {swrFetcher} from "@/config/adaptor/swrFetcher";


interface GetCardsTypes {
    data: ApiCardCard[] | undefined,

    [key: string]: any

}

export const getCards = (): GetCardsTypes => {
    const url = ServerConfig.routes.cards.getAll;


    const {data, error, mutate} = useSWR(url, swrFetcher)

    return {
        data: data?.data,
        isLoading: !error && !data,
        hasError: !!error,
        error,
        hasNoCards: !error && data?.length === 0,
        mutate
    }
}
