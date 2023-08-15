import { PriceValue, QuantityType } from "./priceList";

export interface Food {
    id: string,
    name: string;
    priceList: PriceValue[];
    quantity: QuantityType;
    ingredients: string;
    picture: string;
}