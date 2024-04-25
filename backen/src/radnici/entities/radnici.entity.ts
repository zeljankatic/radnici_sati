import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Radnici{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    ime: string

    @Column()
    prezime: string

    @Column({ default: 0 })
    radni_sati: number

    @CreateDateColumn()
    datum: Date
}