import { PriceValue } from "./priceList";

export interface Food {
    name: string;
    priceList?: PriceValue[];
    quantity?: number;
    objectType?: string;
    picture?: string;
}