//socket io events
export interface ServerToClientEvents {
    getAllChats: any,
    sendMessage: any,
}

export interface ClientToServerEvents {
    getAllChats: any,
    sendMessage: any,
}
