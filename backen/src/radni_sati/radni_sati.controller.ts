import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RadniSatiService } from './radni_sati.service';
import { CreateRadniSatiDto } from './dto/create-radni_sati.dto';
import { UpdateRadniSatiDto } from './dto/update-radni_sati.dto';
import { RadniciService } from 'src/radnici/radnici.service';

@Controller('radni_sati')
export class RadniSatiController {
  constructor(
    private readonly radniSatiService: RadniSatiService,
    private radniciService: RadniciService,
  ) {}

  @Post()
  async create(@Body() radniSati: CreateRadniSatiDto) {
    const radnik = await this.radniciService.findOne(radniSati.radnikId);
    return this.radniSatiService.create(radniSati, radnik);
  }

  @Get()
  findAll() {
    return this.radniSatiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.radniSatiService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRadniSatiDto: UpdateRadniSatiDto,
  ) {
    return this.radniSatiService.update(+id, updateRadniSatiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.radniSatiService.remove(+id);
  }
}
