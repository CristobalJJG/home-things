import { PriceValue } from "./priceList";

export interface Food {
    name: string;
    priceList?: PriceValue[];
    quantity?: number;
    ingredients?: string;
    objectType?: string;
    picture?: string;
}