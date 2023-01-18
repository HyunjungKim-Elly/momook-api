import * as NestJsGraphQL from "@nestjs/graphql";
import { Gender } from "@prisma/client";

@NestJsGraphQL.InputType("PlaceCreateManyInput", { isAbstract: true })
export class PlaceCreateManyInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => String)
  gender!: "man" | "woman";
}
