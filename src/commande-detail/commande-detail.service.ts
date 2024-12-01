import { Injectable } from '@nestjs/common';
import { CreateCommandeDetailDto } from './dto/create-commande-detail.dto';
import { UpdateCommandeDetailDto } from './dto/update-commande-detail.dto';

@Injectable()
export class CommandeDetailService {
  create(createCommandeDetailDto: CreateCommandeDetailDto) {
    return 'This action adds a new commandeDetail';
  }

  findAll() {
    return `This action returns all commandeDetail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commandeDetail`;
  }

  update(id: number, updateCommandeDetailDto: UpdateCommandeDetailDto) {
    return `This action updates a #${id} commandeDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} commandeDetail`;
  }
}
