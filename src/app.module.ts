import { Module } from '@nestjs/common';
// GraphQL
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
// Config
import { ConfigModule } from '@nestjs/config';
import Config from './config/env';

//TypeORM
import { TypeOrmModule } from '@nestjs/typeorm';
import Entities from './config/entities';

// Modules
import { UsersModule } from './modules/user/users.module';

// Example REST Controller
import { AppController } from './app.controller';

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      autoSchemaFile: 'schema.gql',
      graphiql: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [Config],
      cache: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: Config().database.databaseHost,
      port: Config().database.databasePort,
      username: Config().database.databaseUser,
      password: Config().database.databasePassword,
      database: Config().database.databaseName,
      entities: Entities,
      synchronize: Config().database.syncronize, // true for dev, false for prod
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
