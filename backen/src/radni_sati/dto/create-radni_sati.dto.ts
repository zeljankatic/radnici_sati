import { IsDate, IsNumber } from "class-validator";


export class CreateRadniSatiDto {
    @IsNumber()
    radni_sati:number

    @IsNumber()
        sifra: number  

    @IsDate()
    datum:Date
    
}
