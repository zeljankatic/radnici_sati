import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RadniSati } from 'src/radni_sati/entities/radni_sati.entity';

@Entity()
export class Radnici {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  ime: string;

  @Column()
  prezime: string;

  @CreateDateColumn()
  datum: Date;

  @OneToMany((type) => RadniSati, (radni_sati) => radni_sati.radnik)
  radni_sati: RadniSati[];
}
