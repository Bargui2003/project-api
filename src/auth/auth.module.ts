import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { ClientModule } from 'src/client/client.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports:[UserModule,ClientModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '600000000s' },
    }),
  ]
})
export class AuthModule {}
