import {socket} from "@/services/chats/socket";

export const getAllChats = () => {
    return new Promise(async (resolve, reject) => {
        await socket.emit("getAllChats")
        socket.on("getAllChats", (data) => {
            resolve(data)
        })
    })
}

export const sendMessage = (message: string, chatId: string) => {
    return new Promise((resolve, reject) => {
        socket.emit("sendMessage", {message, chatId}, (data) => {
            resolve(data);
        });
    })
}


