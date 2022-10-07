import {ApiAssetAsset} from "@/types/strapi";

type Coins = ApiAssetAsset["attributes"]["coin_type"]["enum"];
export const ALLOWED_COINS:Coins = ["btc" , "eth" , "thr"]
