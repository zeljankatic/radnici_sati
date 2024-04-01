import { PartialType } from '@nestjs/mapped-types';
import { CreateRadniSatiDto } from './create-radni_sati.dto';

export class UpdateRadniSatiDto extends PartialType(CreateRadniSatiDto) {}
