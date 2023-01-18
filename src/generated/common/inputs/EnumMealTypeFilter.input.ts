import * as NestJsGraphQL from "@nestjs/graphql";
import { NestedEnumMealTypeFilter } from "./NestedEnumMealTypeFilter.input";
import { MealType } from "@prisma/client";

@NestJsGraphQL.InputType("EnumMealTypeFilter", { isAbstract: true })
export class EnumMealTypeFilter {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  equals?: MealType | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  in?: Array<MealType> | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  notIn?: Array<MealType> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumMealTypeFilter, { nullable: true })
  not?: NestedEnumMealTypeFilter | undefined;
}
