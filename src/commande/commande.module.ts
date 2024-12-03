import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CommandeService } from './commande.service';
import { CommandeController } from './commande.controller';
import { Commande } from './entities/commande.entity';

@Module({
  controllers: [CommandeController],
  providers: [CommandeService],
  imports:[TypeOrmModule.forFeature([Commande])],
  exports:[CommandeService]
})
export class CommandeModule {}
