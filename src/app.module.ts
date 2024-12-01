import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ClientModule } from './client/client.module';
import { AuthModule } from './auth/auth.module';
import { CommandeModule } from './commande/commande.module';
import { ProduitModule } from './produit/produit.module';
import { CommandeDetailModule } from './commande-detail/commande-detail.module';

//importation (identifier le controller (constrire les roots) et le service ))
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'test',
        autoLoadEntities: true,
        synchronize: true,
          //  synchronize: false   
      }),
    }),
ConfigModule.forRoot(),
    UserModule,
    ClientModule,
    AuthModule,
    CommandeModule,
    ProduitModule,
    CommandeDetailModule],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
