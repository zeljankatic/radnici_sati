import { IsString } from "class-validator"

export class CreateUserDto{
    @IsString()
    ime : string

    @IsString()
    prezime : string
}