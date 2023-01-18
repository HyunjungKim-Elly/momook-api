import * as NestJsGraphQL from "@nestjs/graphql";
import { Gender } from "@prisma/client";

@NestJsGraphQL.InputType("PlaceCreateWithoutStampsInput", { isAbstract: true })
export class PlaceCreateWithoutStampsInput {
  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => String)
  gender!: "man" | "woman";
}
