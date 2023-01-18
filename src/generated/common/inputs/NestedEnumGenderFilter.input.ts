import * as NestJsGraphQL from "@nestjs/graphql";
import { Gender } from "@prisma/client";

@NestJsGraphQL.InputType("NestedEnumGenderFilter", { isAbstract: true })
export class NestedEnumGenderFilter {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  equals?: "man" | "woman" | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  in?: Array<"man" | "woman"> | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  notIn?: Array<"man" | "woman"> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumGenderFilter, { nullable: true })
  not?: NestedEnumGenderFilter | undefined;
}
