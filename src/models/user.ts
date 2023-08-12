import { Type } from "./type";

export class User {

    name: string = "";
    surname: string = "";
    fullname: string = "";
    username: string = "";
    email: string = "";
    isAdmin: boolean = false;
    registerDate: Date | undefined;
    lastLoginDate: Date | undefined;
    isKitchenValidated: boolean = false;
    isMoneyValidated: boolean = false;
    data: Type[] = [];

    constructor(name: string, surname: string, fullname: string, username: string, email: string
        , isAdmin: boolean, rd: Date, lld: Date, ikv: boolean, imv: boolean, data: Type[]) {
        this.name = name;
        this.surname = surname;
        this.fullname = fullname;
        this.username = username;
        this.email = email;
        this.isAdmin = isAdmin;
        this.registerDate = rd;
        this.lastLoginDate = lld;
        this.isKitchenValidated = ikv;
        this.isMoneyValidated = imv;
        this.data = data;
    }

    static fromJsonToUser(user: any) {
        return new User(
            user['name'],
            user['surname'],
            user['fullname'],
            user['username'],
            user['email'],
            user['isAdmin'],
            user['registerDate'],
            user['lastLoginDate'],
            user['isKitchenValidated'],
            user['isMoneyValidated'],
            user['data']
        );
    }
}