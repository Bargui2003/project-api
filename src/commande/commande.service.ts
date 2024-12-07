import { Injectable } from '@nestjs/common';
import { CreateCommandeDto } from './dto/create-commande.dto';
import { UpdateCommandeDto } from './dto/update-commande.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm'
import { Commande } from './entities/commande.entity';
@Injectable()
export class CommandeService {
  constructor(@InjectRepository(Commande) private commandeRepository: Repository<Commande>){}
  
  create(createCommandeDto: CreateCommandeDto) {
    return this.commandeRepository.create()
  }

  findAll() {
    return this.commandeRepository.findAndCount()
  }

  findOne(id: number) {
    return this.commandeRepository.findOne({where :{id:id}})
  }

  async update(id: number, updateProduitDto: UpdateCommandeDto) {
    let produit= await this.commandeRepository.preload({
      id:id, 
      ...updateProduitDto
    })
    return this.commandeRepository.save(produit)
  }

  remove(id: number) {
    return this.commandeRepository.delete(id);
  }
}
