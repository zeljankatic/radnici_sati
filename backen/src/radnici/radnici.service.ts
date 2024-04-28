import { Injectable } from '@nestjs/common';
import { CreateRadniciDto } from './dto/create-radnici.dto';
import { UpdateRadniciDto } from './dto/update-radnici.dto';
import { Repository } from 'typeorm';
import { Radnici } from './entities/radnici.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RadniciService {
  constructor(
    @InjectRepository(Radnici)
    private radniciRepository: Repository<Radnici>,
  ) {}

  create(createRadniciDto: CreateRadniciDto) {
    return this.radniciRepository.save(createRadniciDto);
  }

  findAll() {
    return this.radniciRepository.find({ relations: ['radni_sati'] });
  }

  findOne(id: string) {
    return this.radniciRepository.findOne({
      where: { id },
      relations: ['radni_sati'],
    });
  }

  update(id: string, updateRadniciDto: UpdateRadniciDto) {
    return `This action updates a #${id} radnici`;
  }

  remove(id: string) {
    return this.radniciRepository.delete(id);
  }
}
