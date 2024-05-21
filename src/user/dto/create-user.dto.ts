import { role } from "../schemas/user.schema"

export class CreateUserDto {
    readonly username: string
    readonly password: string
    readonly email: string
    readonly role: role
    readonly active: boolean
}