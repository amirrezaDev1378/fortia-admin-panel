import {getAllChats, sendMessage} from "./chats";
import {socket} from "./socket";

export const chatsSocket = {
    socket,
    actions: {
        getAllChats,
        sendMessage
    }
}
