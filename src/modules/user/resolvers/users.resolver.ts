import { Query, Resolver } from '@nestjs/graphql';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  async getUsers(): Promise<User[]> {
    const users = await this.usersService.findMany();
    return users;
  }
}
