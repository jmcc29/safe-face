import { Module } from '@nestjs/common';
import { SeedModule } from './seed/seed.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envs } from './config/envs';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: envs.db.host,
      port: envs.db.port,
      username: envs.db.username,
      password: envs.db.password,
      database: envs.db.name,
      autoLoadEntities: true,
      synchronize: true, // Set to false in production
    }),
    SeedModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
