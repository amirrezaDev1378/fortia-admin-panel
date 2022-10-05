import {ServerConfig} from "@/config/server/server";
import {axiosInstance} from "@/config/adaptor/axios";
import {ApiCardCard} from "@/types/strapi";

interface CreateCardTypes {
    data: ApiCardCard[] | null,

    [key: string]: any
}

export const createCard = async (formData) => {
    let response: CreateCardTypes = {
        hasError: null,
        data: null,
        error: null
    }
    const url = ServerConfig.routes.cards.add;
    const {status, data} = await axiosInstance.post<ApiCardCard>(url, {data:formData}).catch(err => {
        return err.response
    });
    if (status !== 200) {
        response.data = null;
        response.hasError = true;
        response.error = data;
        return response;
    }

    response.data = data;
    response.hasError = false;
    response.error = null;
    return response;
}
