import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){

    }
    @Post("login-user")
    userLogin(@Body('email') email, @Body('password') password){
        console.log('ea=mail',email," password",password)
        return this.authService.loginUser(email,password)

    }
    @Post("login-client")
    clientLogin(@Body('email') email, @Body('password') password){
        console.log('ea=mail',email," password",password)
        return this.authService.loginclient(email,password)

    }}
