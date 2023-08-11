import { PriceValue } from "./priceList";

export interface food {
    name: string;
    priceList?: PriceValue[];
    quantity?: number;
    objectType?: string;
    picture?: string;
}