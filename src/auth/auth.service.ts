import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
    constructor(private userService:UserService ,private jwtService:JwtService ){

    }
   async loginUser(email: any, password: any) {
let user= await this.userService.findByEmail(email)
console.log('user',user)
if (user){
  
  let  matchingPassword= await bcrypt.compare(password,user.password)
  if (matchingPassword){
    const payload = { id: user.id, username: user.userName , email:user.email };/// parameter de token 

    return {
        token: await this.jwtService.signAsync(payload,{secret:jwtConstants.secret}),//// creeate token
        userId:user.id,
        email:user.email
      };
  }
}
    }
 
}
