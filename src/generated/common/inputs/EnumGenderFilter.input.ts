import * as NestJsGraphQL from "@nestjs/graphql";
import { NestedEnumGenderFilter } from "./NestedEnumGenderFilter.input";
import { Gender } from "@prisma/client";

@NestJsGraphQL.InputType("EnumGenderFilter", { isAbstract: true })
export class EnumGenderFilter {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  equals?: Gender | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  in?: Array<Gender> | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  notIn?: Array<Gender> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumGenderFilter, { nullable: true })
  not?: NestedEnumGenderFilter | undefined;
}
