import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import {Repository} from 'typeorm'
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}


  async create(createUserDto: CreateUserDto) {
     let user=this.usersRepository.create(createUserDto) // create object 
     user.password= await( ( await this.createdPasswordHash(user.password))).toString()
     console.log("user",user)

     return this.usersRepository.save(user) // save on data base
  }
  async createdPasswordHash(password:string){
  const saltOrRounds = 10
  let passHash= await bcrypt.hash(password,saltOrRounds)
  return passHash
} 
findByEmail(email:string){
  console.log('email',email)
   return this.usersRepository.findOne({where:{email:email}})
}
  findAll() {
    return this.usersRepository.findAndCount()
  }

  findOne(id: number) {
    return this.usersRepository.findOne({where:{id:id}}) // when the id of the DB is equal to the id of the parameter
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    let user = await this.usersRepository.preload({
      id:id,
      ...updateUserDto
    })
    return this.usersRepository.save(user)
  }

  async remove(id: number) {
    return this.usersRepository.delete(id)
  }
  async listUserByFiltre(filter){
    const { order, take, letter, lastName } = filter;

    const query = await this.usersRepository
      .createQueryBuilder("user")
      .where("user.userName LIKE :letter", { letter: `${letter}%` })
      .andWhere("user.lastName LIKE :lastName", { lastName: `${lastName}%` })
      .orderBy("user.id", order) // Corrected `addOrderBy` to `orderBy`
      .take(take) // Limits the number of results to `take`
      .getMany();
      return query
  }
}
