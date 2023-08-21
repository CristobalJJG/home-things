import { PriceValue, QuantityType } from "./priceList";

export interface Food {
    id: string;
    name: string;
    internName: string;
    priceList: PriceValue[];
    quantity: QuantityType;
    ingredients: string;
    picture: string;
}