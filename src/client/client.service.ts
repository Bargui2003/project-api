import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import {Repository} from 'typeorm'
import * as bcrypt from 'bcrypt';
@Injectable()
export class ClientService {
  constructor( //repository pour communiquer avec le db 
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}
  async create(createClientDto: CreateClientDto) {
    let client = this.clientRepository.create(createClientDto)
    client.password= await( ( await this.createdPasswordHash(client.password))).toString() // hash
    return this.clientRepository.save(client); //save in db
  }

  findAll() {
    return this.clientRepository.findAndCount()
  
  }
  findByEmail(email){
    return this.clientRepository.findOne({where: {email:email}})
  }

  findOne(id: number) {
    return this.clientRepository.findOne({where :{id:id}});
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    let client= await this.clientRepository.preload({
      id:id, 
      ...updateClientDto
    })
    return this.clientRepository.save(client)
  }

  remove(id: number) {
    return this.clientRepository.delete(id)
  }
  //passwordHash
  async createdPasswordHash(password:string){
    const repetition = 10
    let passHash= await bcrypt.hash(password,repetition)
    return  await passHash
  }
}
