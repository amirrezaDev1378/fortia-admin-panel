import useSWR from 'swr'
import {axiosInstance} from "@/config/adaptor/axios";
import {ServerConfig} from "@/config/server/server";

export const getCredit = () => {
    const url = ServerConfig.routes.credit.getCredit;
    const fetcher = async (url) => {
        return await axiosInstance.get(url).then(res => {
            return res.data
        })
    }

    const {data, error , mutate} = useSWR(url, fetcher)

    return {
        CreditData:data,
        isLoadingCreditData: !error && !data,
        CreditHasError: !!error,
        hasNoRecords: !error &&  data?.length === 0,
        CreditMutate:mutate
    }
}
