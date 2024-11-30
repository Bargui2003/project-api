import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import {Repository} from 'typeorm'
@Injectable()
export class ClientService {
  constructor( //repository pour communiquer avec le db 
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}
  create(createClientDto: CreateClientDto) {
    let client = this.clientRepository.create(createClientDto)
    return this.clientRepository.save(client); //save in db
  }

  findAll() {
    return this.clientRepository.findAndCount()
  
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
}
