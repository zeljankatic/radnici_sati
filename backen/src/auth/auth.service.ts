import { Injectable } from '@nestjs/common';
import { Auth } from './entity/auth.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm/dist';


@Injectable()
export class AuthService {

    constructor(
        @InjectRepository (Auth)
        private authRepository: Repository<Auth>,){}

        async validateAuth(email:string , password:string){
            const auth=await this.authRepository.findBy
        }

    findByEmail(email:string){
        return this.authRepository.findOne({where:{email}})
    }
}
