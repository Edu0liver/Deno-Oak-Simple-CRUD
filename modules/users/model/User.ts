import { uuid } from " https://deno.land/x/uuid/mod.ts";

export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;

    constructor(name: string, email: string, password: string) {
        this.id = uuid();
        this.name = name;
        this.email = email;
        this.password = password;
        this.createdAt = new Date();
    }
}