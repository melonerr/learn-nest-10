import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service'
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    async getAllUser(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    async getUser(@Param("id") id: string): Promise<User> {
        return this.userService.findByID(id);
    }

    @Post()
    async createUser(@Body() user: CreateUserDto): Promise<User> {
        return this.userService.create(user);
    }

    @Put(':id')
    async updateUser(@Param("id") id: string, @Body() user: UpdateUserDto): Promise<User> {
        return this.userService.updateByID(id, user);
    }

    
    @Delete(':id')
    async deleteUser(@Param("id") id: string): Promise<User> {
        return this.userService.deleteByID(id);
    }
}
