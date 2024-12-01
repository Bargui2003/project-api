import { PartialType } from '@nestjs/swagger';
import { CreateCommandeDetailDto } from './create-commande-detail.dto';

export class UpdateCommandeDetailDto extends PartialType(CreateCommandeDetailDto) {}
