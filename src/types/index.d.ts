//socket io events
export interface ServerToClientEvents {
    getAllChats: () =>({result: any[] , pagination: any}),
    sendMessage: any,
}

export interface ClientToServerEvents {
    getAllChats: any,
    sendMessage: any,
}
