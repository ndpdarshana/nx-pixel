import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class CreateUserDto {
  @Field({ nullable: true })
  name: string;
  @Field()
  readonly email: string;
  @Field()
  readonly password: string;
}