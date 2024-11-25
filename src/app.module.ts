import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ClientModule } from './client/client.module';
import { AuthModule } from './auth/auth.module';

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
    AuthModule],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
