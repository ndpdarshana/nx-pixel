import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class CreateUserDto {
  @Field()
  readonly name: string;
  @Field()
  readonly email: string;
  @Field()
  readonly password: string;
}