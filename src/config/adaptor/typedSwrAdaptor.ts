import {axiosInstance} from "@/config/adaptor/axios";

interface TypedSwrAdaptorTypes<T> {
    data: T;
}

export const TypedSwrAdaptor = async <Data = any>(url: string) => {
    type data = TypedSwrAdaptorTypes<Data>
    return await axiosInstance.get<any, data>(url).then(res => {
        return res.data
    })
}
