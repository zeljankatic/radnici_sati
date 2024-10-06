import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRadniSatiDto {
  @IsNumber()
  radni_sati: number;

  @IsString()
  datum: string;

  @IsNotEmpty()
  radnikId: string;
}
