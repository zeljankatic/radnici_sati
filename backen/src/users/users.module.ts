import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './entity/user.entity';

@Module({
controllers:[UsersController],
providers:[UsersService],
imports:[TypeOrmModule.forFeature([User])]

})
export class UsersModule {}
