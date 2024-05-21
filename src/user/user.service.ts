import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import mongoose from 'mongoose';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private UserModel: mongoose.Model<User>
    ) { }
    async findAll(): Promise<User[]> {
        const users = await this.UserModel.find();
        return users;
    }
    async findByID(id: string): Promise<User> {
        const user = await this.UserModel.findById(id);
        if (!user) {
            throw new BadRequestException("User not found!")
        }
        return user;
    }
    async create(user: User): Promise<User> {
        const res = await this.UserModel.create(user);
        return res;
    }

    async updateByID(id: string, user: User): Promise<User> {
        const update = await this.UserModel.findByIdAndUpdate(id, user, {
            new: true,
            runValidators: true
        });
        if (!update) {
            throw new BadRequestException("User not found!")
        }
        return user;
    }

    async deleteByID(id: string): Promise<User> {
        const res = await this.UserModel.findByIdAndDelete(id);
        if (!res) {
            throw new BadRequestException("User not found!")
        }
        return res;
    }
}
