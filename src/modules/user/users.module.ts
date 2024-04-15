import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// Entities
import { User } from './repository/user.entity';
// Services
import { UsersService } from './services/users.service';
// Resolvers
import { UsersResolver } from './resolvers/users.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
