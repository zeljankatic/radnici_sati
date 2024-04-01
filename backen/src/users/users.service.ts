import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  
    constructor(
        @InjectRepository (User)
        private userRepository: Repository<User>,){}

    get(): Promise<User[]>{
        return this.userRepository.find()
    }
    create(createUserDto:CreateUserDto){
        return this.userRepository.save(createUserDto)
    }

    update(updateUserDto:UpdateUserDto,
         userId:number){
return this.userRepository.update(userId,updateUserDto)
    }

    show(id:number){
        return this.userRepository.findOne({where :{id}});

    }

    findByEnail(email:string){
        return this.userRepository.findOne({where:{email}})
    }

    deleteUser(userId:number){
      return this.userRepository.delete(userId);
    }
}
