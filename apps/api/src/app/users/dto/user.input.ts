import { Field, InputType } from 'type-graphql';

@InputType()
export class InputUser {
  @Field()
  readonly name: string;
  @Field()
  readonly email: string;
  @Field()
  readonly password: string;
}