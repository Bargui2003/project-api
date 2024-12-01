import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CommandeDetailService } from './commande-detail.service';
import { CommandeDetailController } from './commande-detail.controller';
import { commandeDetail } from './entities/commande-detail.entity';

@Module({
  controllers: [CommandeDetailController],
  providers: [CommandeDetailService],
  imports:[TypeOrmModule.forFeature([commandeDetail])]
})
export class CommandeDetailModule {}
