import { IsString } from "class-validator"

export class UpdateUserDto{
    @IsString()
    ime : string
   
    @IsString()
    prezime : string
}