import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum role {
    SUPERADMIN = 'superAdmin',
    ADMIN = 'admin',
    EMPLOYEE = 'employee',
    USER = 'user'
}

@Schema({
    timestamps: true
})
export class User {
    @Prop()
    username: string;

    @Prop()
    password: string;

    @Prop()
    email: string

    @Prop()
    role: role;

    @Prop()
    active: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User)