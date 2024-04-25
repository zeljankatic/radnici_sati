import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { User } from './users/entity/user.entity';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { Auth } from './auth/entity/auth.entity';
import { RadniSatiModule } from './radni_sati/radni_sati.module';
import { RadniSati } from './radni_sati/entities/radni_sati.entity';






@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'radnici_evidencija',
      entities: [User,Auth,RadniSati],
      synchronize: true,
    }),
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
    RadniSatiModule,
   
  
  ],
  controllers: [AppController],
   providers: [AppService],
})
export class AppModule {}
