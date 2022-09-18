import {ServerConfig} from "@/config/server/server";
import {axiosInstance} from "@/config/adaptor/axios";

export const createCard = async (formData) => {
    let response = {
        hasError: null,
        data: null,
        error: null
    }
    const url = ServerConfig.routes.cards.addCard;
    const {status, data} = await axiosInstance.post(url, formData).catch(err => {
        return err.response
    });
    if (status !== 201) {
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
