import * as NestJsGraphQL from "@nestjs/graphql";
import { NestedEnumGenderFilter } from "./NestedEnumGenderFilter.input";
import { NestedEnumGenderWithAggregatesFilter } from "./NestedEnumGenderWithAggregatesFilter.input";
import { NestedIntFilter } from "./NestedIntFilter.input";
import { Gender } from "@prisma/client";

@NestJsGraphQL.InputType("EnumGenderWithAggregatesFilter", { isAbstract: true })
export class EnumGenderWithAggregatesFilter {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  equals?: Gender | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  in?: Array<Gender> | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  notIn?: Array<Gender> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumGenderWithAggregatesFilter, { nullable: true })
  not?: NestedEnumGenderWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined;

  @NestJsGraphQL.Field(() => NestedEnumGenderFilter, { nullable: true })
  _min?: NestedEnumGenderFilter | undefined;

  @NestJsGraphQL.Field(() => NestedEnumGenderFilter, { nullable: true })
  _max?: NestedEnumGenderFilter | undefined;
}
