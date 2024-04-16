import { IsDate, IsNumber, IsString } from "class-validator";


export class CreateRadniSatiDto {
    @IsNumber()
    radni_sati:number

    @IsNumber()
        sifra: number  

    @IsString()
    datum:string
    
}
