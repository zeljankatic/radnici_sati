import { IsDate, IsNumber, IsString } from "class-validator";


export class CreateRadniSatiDto {
    @IsNumber()
    radni_sati:number

    @IsString()
    sifra: string

    @IsString()
    datum:string
    
}
