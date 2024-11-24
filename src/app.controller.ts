import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//déclarer les roots
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("user")
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Get("app")
  getapp(): string {
    return this.appService.getHello();
  }
}
