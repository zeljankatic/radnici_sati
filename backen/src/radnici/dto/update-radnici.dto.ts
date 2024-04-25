import { PartialType } from '@nestjs/mapped-types';
import { CreateRadniciDto } from './create-radnici.dto';
import { CreateDateColumn } from 'typeorm';

export class UpdateRadniciDto extends PartialType(CreateRadniciDto) {
    @CreateDateColumn()
    updatedAt: Date;
}
