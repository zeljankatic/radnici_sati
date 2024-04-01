import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Auth{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    ime:string;

    @Column()
    prezime:string;

    @Column()
    password:string;

    @Column()
    email:string;

}