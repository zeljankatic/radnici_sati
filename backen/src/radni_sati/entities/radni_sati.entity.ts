import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Radnici } from 'src/radnici/entities/radnici.entity';

@Entity()
export class RadniSati {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  radni_sati: number;

  @Column()
  datum: string;

  @ManyToOne(() => Radnici, (radnik) => radnik.radni_sati)
  radnik: Radnici;
}
