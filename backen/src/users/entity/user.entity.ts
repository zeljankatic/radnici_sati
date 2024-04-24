import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    ime: string

    @Column()
    prezime: string

    @Column({ default: 0 })
    radni_sati: number

    @Column({ default: '1.1.1200.' })
    datum: string

    @Column({ default: '' })
    email:string
}