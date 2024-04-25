import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RadniciService } from './radnici.service';
import { CreateRadniciDto } from './dto/create-radnici.dto';
import { UpdateRadniciDto } from './dto/update-radnici.dto';

@Controller('radnici')
export class RadniciController {
  constructor(private readonly radniciService: RadniciService) {}

  @Post()
  create(@Body() createRadniciDto: CreateRadniciDto) {
    return this.radniciService.create(createRadniciDto);
  }

  @Get()
  findAll() {
    return this.radniciService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.radniciService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRadniciDto: UpdateRadniciDto) {
    return this.radniciService.update(id, updateRadniciDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.radniciService.remove(id);
  }
}
