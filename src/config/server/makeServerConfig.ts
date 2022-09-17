import React from "react";

type constructor = {
    address: string;
    port?: number;

}
export type appRoutes = {
    login: string,
    register: string,
    cards: {
        getCards: string,
        addCard: string,
        deleteCard: string,
        updateCard?: string
    }
    credit: {
        getCredit: string,
        withdraw: string,
        charge: string
    },
    baseRoute?: string
}


export class MakeServerConfig {
    private readonly port;
    private readonly address;
    private routes: appRoutes | {} = {};

    constructor(config: constructor) {
        this.port = config.port;
        this.address = config.address;
    }

    generateBaseRoute() {
        let baseRoute=""
        if (this.port) {
            baseRoute =  this.address + ":" + this.port
        } else {
            baseRoute =  this.address
        }
        return baseRoute;
    }

    generateRoutes = (r: string | object) => {
        if (typeof r === "string") {
            if (this.port) {
                return this.address + ":" + this.port + r;
            }
            return this.address + r;
        } else {

            const obj: any = {};
            Object.keys(r).forEach((key) => {
                obj[key] = this.generateRoutes(r[key]);
            });
            return obj;
        }
    }
    setRoutes = (routes: appRoutes) => {
        let r = {};

        Object.keys(routes).forEach((key) => {
            r[key] = this.generateRoutes(routes[key]);
        })
        this.routes = {
            ...r,
            baseRoute: this.generateBaseRoute()
        }

    };

    generateContext = () => {
        return React.createContext({
            routes: this.routes as appRoutes,
        })
    }
    generateObject = () => {
        return {
            routes: this.routes as appRoutes,
        }
    }

}



