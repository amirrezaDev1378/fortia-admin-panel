import {MakeServerConfig} from "@/config/server/makeServerConfig";

let server = new MakeServerConfig({
    address: 'http://localhost',
    port: 1337
})

server.setRoutes({
    login: '/api/auth/local',
    register: '/api/auth/local/register',
    cards: {
        getAll: '/api/cards',
        add: '/api/cards',
        delete: '/api/cards/$ID$',
        update: '/api/cards/$ID$'
    },
    credit: {
        getCredit: '/api/credits/getTotal',
        withdraw: '/api/credits',
        charge: '/api/credits',
        getChartData: '/api/credits/getChartData'
    },
    files: {
        image: '/api/upload'
    },
    products: {
        getAll: '/api/products',
        add: '/api/products',
        delete: '/api/products/$ID$',
        update: '/api/products/$ID$',
        getById: '/api/products/$ID$'
    },
    assets: {
        getAll: '/api/assets',
        charge: '/api/assets',
        withdraw: '/api/assets'
    },
    articles: {
        getAll: '/api/articles',
        add: '/api/articles',
        delete: '/api/articles/$ID$',
        update: '/api/articles/$ID$',
        getById: '/api/articles/$ID$'
    },
    socket: {
        path: '/chats'
    }

})

export const ServerContext = server.generateContext();
export const ServerConfig = server.generateObject();
