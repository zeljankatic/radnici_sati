import { IsString, IsNumber } from 'class-validator';
import { CreateDateColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

export class CreateRadniciDto {
    @IsString()
    ime: string;

    @IsString()
    prezime: string;

    @CreateDateColumn()
    createdAt: Date;

    // @IsNumber()
    // godine: number;

    // @IsString()
    // pozicija: string;

    // @OneToOne(() => CreateRadniciDto)
    // radni_sati: number;
}
