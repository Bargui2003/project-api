import { Module } from '@nestjs/common';
import { CommandeService } from './commande.service';
import { CommandeController } from './commande.controller';

@Module({
  controllers: [CommandeController],
  providers: [CommandeService],
})
export class CommandeModule {}
