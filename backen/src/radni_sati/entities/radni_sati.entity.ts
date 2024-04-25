import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RadniSati {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    radni_sati: number

    @Column()
    sifra: string

    @Column()
    datum: string
}
