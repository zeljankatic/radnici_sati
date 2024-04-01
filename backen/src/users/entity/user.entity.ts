import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()

    ime:string

    @Column()
    prezime:string

    @Column()
    radni_sati: number

    @Column()
    datum: string

    @Column()
    email:string





}