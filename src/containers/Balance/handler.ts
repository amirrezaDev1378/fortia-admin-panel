import {charge} from "@/services/credit/charge";
import {withdraw} from "@/services/credit/withdraw";
import {toast} from "react-toastify";

export const initialStates = {
    open: false, type: "", submit: (data) => {
    }
}
export const MakeHandler = (setDialog, mutate) => {


    const CreditHandler = (type: "charge" | "withdraw") => {
        setDialog({
            open: true, type: type, submit: (data) => {
                const handler = type === "charge" ? charge : withdraw;
                handler(data).then(async () => {
                    await mutate();
                    toast("Operation done successfully", {
                        type: "success"
                    })
                }).catch((e) => {
                    toast("Error while doing your request", {
                        type: "error"
                    })
                }).finally(() => {
                    setDialog({...initialStates})
                })
            }
        })
    }
    const closeModal = () => {
        setDialog({...initialStates})
    }
    return {CreditHandler, initialStates, closeModal}
}
