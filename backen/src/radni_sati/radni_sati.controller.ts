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

  @Get('seed')
  async seed() {
    const radnik = await this.radniciService.findOne(
      '91623bce-3512-480b-9fd4-69715de205b6',
    );
    return this.radniSatiService.seed(radnik);
  }

  @Post('raspon')
  async findMany(@Body() { start, end, radnikId }) {
    return this.radniSatiService.findMany(start, end, radnikId);
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
