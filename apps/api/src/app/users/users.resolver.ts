import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { InputUser } from './dto/user.input';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Query(() => String)
  async hello() {
    return 'Hello World';
  }

  @Query(() => [CreateUserDto])
  async users() {
    return this.usersService.findAll();
  }

  // @Mutation(() => String)
  // async createUser(@Args('input') input: InputUser) {
  //   return this.usersService.create(input);
  // }
}