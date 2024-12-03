import { Module } from '@nestjs/common';
import { ProduitService } from './produit.service';
import { ProduitController } from './produit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produit } from './entities/produit.entity';

@Module({
  controllers: [ProduitController],
  providers: [ProduitService],
  imports: [TypeOrmModule.forFeature([Produit])],
  exports: [ProduitService]
})
export class ProduitModule {}
