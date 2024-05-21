import { role } from "../schemas/user.schema"

export class UpdateUserDto {
    readonly username: string
    readonly password: string
    readonly email: string
    readonly role: role
    readonly active: boolean
}