import { Injectable } from '@nestjs/common';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';
import { Produit } from './entities/produit.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm'
@Injectable()
export class ProduitService {
  constructor( //repository pour communiquer avec le db 
    @InjectRepository(Produit)
    private produitRepository: Repository<Produit>,
  ) {}

  create(createProduitDto: CreateProduitDto) {
    return this.produitRepository.create()
  }

  findAll() {
    return this.produitRepository.findAndCount();
  }

  findOne(id: number) {
    return this.produitRepository.findOne({where :{id:id}});
  }

  async update(id: number, updateProduitDto: UpdateProduitDto) {
    let produit= await this.produitRepository.preload({
      id:id, 
      ...updateProduitDto
    })
    return this.produitRepository.save(produit)
  }

  remove(id: number) {
    return this.produitRepository.delete(id);
  }
}
