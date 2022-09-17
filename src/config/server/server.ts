import {MakeServerConfig} from "@/config/server/makeServerConfig";

let server = new MakeServerConfig({
    address: 'http://localhost',
    port: 3000
})

server.setRoutes({
    login: '/rest/loginUser',
    register: '/register',
    cards: {
        getCards: '/rest/getAllCards',
        addCard: '/cards/add',
        deleteCard: '/cards/delete',
        updateCard: '/cards/update'
    },
    credit: {
        getCredit: '/credit',
        withdraw: '/credit/withdraw',
        charge: '/credit/charge'
    },
})

export const ServerContext = server.generateContext();
export const ServerConfig = server.generateObject();
