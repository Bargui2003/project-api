import { CommandeDetail } from 'src/commande-detail/entities/commande-detail.entity';
import { Injectable } from '@nestjs/common';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';
import { Produit } from './entities/produit.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm'
import * as bcrypt from 'bcrypt';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class ProduitService {
  constructor( //repository pour communiquer avec le db 
    @InjectRepository(Produit)
    private produitRepository: Repository<Produit>,
  ) {}

  async create(createUserDto: CreateProduitDto) {
    let produit=this.produitRepository.create(createUserDto) // create object 
    console.log("produit",produit)
    if (produit.ttc == null){
      produit.ttc=produit.prixtax*(produit.tva/100)+produit.prixtax
    }
    cloudinary.config({ 
      cloud_name: 'dpvllz9se', 
      api_key: '435347775214729', 
      api_secret: '7S9v9D2aum0zb5jo6Mv2SycU05Y' // Click 'View API Keys' above to copy your API secret
  });
    await cloudinary.uploader.upload(createUserDto.image,{ eager: [{ fetch_format: "auto" } ]}, function (error: any, result: any,) {
        if (result?.eager[0].url) {
          createUserDto.image = result.eager[0].url;  
      }
      })
    return this.produitRepository.save(produit) // save on data base
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


async createdPasswordHash(password:string){
  const saltOrRounds = 10
  let passHash= await bcrypt.hash(password,saltOrRounds)
  return passHash
} 
}


