import { Injectable } from '@nestjs/common';
import { CreateRadniSatiDto } from './dto/create-radni_sati.dto';
import { UpdateRadniSatiDto } from './dto/update-radni_sati.dto';
import { RadniSati } from './entities/radni_sati.entity';
import { Between, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Radnici } from 'src/radnici/entities/radnici.entity';

@Injectable()
export class RadniSatiService {
  constructor(
    @InjectRepository(RadniSati)
    private satiRepository: Repository<RadniSati>,
    @InjectRepository(Radnici)
    private radniciRepository: Repository<Radnici>,
  ) {}

  async create(
    radniSati: CreateRadniSatiDto,
    radnik: Radnici,
  ): Promise<RadniSati> {
    const noviUnos = await this.satiRepository.save(radniSati);

    radnik.radni_sati = [noviUnos, ...radnik.radni_sati];
    await this.radniciRepository.save(radnik);

    return noviUnos;
  }

  findAll(): Promise<RadniSati[]> {
    return this.satiRepository.find();
  }

  seed(radnik: Radnici) {
    const sati = [
      {
        radni_sati: 8,
        datum: '2021-07-01',
      },
      {
        radni_sati: 8,
        datum: '2021-07-02',
      },
      {
        radni_sati: 8,
        datum: '2021-07-03',
      },
      {
        radni_sati: 8,
        datum: '2021-07-04',
      },
      {
        radni_sati: 8,
        datum: '2021-07-05',
      },
      {
        radni_sati: 8,
        datum: '2021-07-06',
      },
      {
        radni_sati: 8,
        datum: '2021-07-07',
      },
      {
        radni_sati: 8,
        datum: '2021-07-08',
      },
      {
        radni_sati: 8,
        datum: '2021-07-09',
      },
      {
        radni_sati: 8,
        datum: '2021-07-10',
      },
    ];

    sati.forEach(async (sat) => {
      const noviUnos = await this.satiRepository.save(sat);

      radnik.radni_sati = [noviUnos, ...radnik.radni_sati];
      await this.radniciRepository.save(radnik);
    });

    return { message: 'spremljeno' };
  }

  async findMany(start: string, end: string, radnikId: string) {
    const rasponSati = await this.satiRepository.find({
      relations: {
        radnik: true,
      },
      select: {
        radni_sati: true,
        datum: true,
      },
      where: {
        datum: Between(start, end),
        radnik: {
          id: radnikId,
        },
      },
    });

    return rasponSati;
  }

  findOne(id: number) {
    return `This action returns a #${id} radniSati`;
  }

  update(id: number, updateRadniSatiDto: UpdateRadniSatiDto) {
    return `This action updates a #${id} radniSati`;
  }

  remove(id: number) {
    return `This action removes a #${id} radniSati`;
  }
}
