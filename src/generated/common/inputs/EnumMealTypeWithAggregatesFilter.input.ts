import * as NestJsGraphQL from "@nestjs/graphql";
import { NestedEnumMealTypeFilter } from "./NestedEnumMealTypeFilter.input";
import { NestedEnumMealTypeWithAggregatesFilter } from "./NestedEnumMealTypeWithAggregatesFilter.input";
import { NestedIntFilter } from "./NestedIntFilter.input";
import { MealType } from "@prisma/client";

@NestJsGraphQL.InputType("EnumMealTypeWithAggregatesFilter", { isAbstract: true })
export class EnumMealTypeWithAggregatesFilter {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  equals?: MealType | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  in?: Array<MealType> | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  notIn?: Array<MealType> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumMealTypeWithAggregatesFilter, { nullable: true })
  not?: NestedEnumMealTypeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined;

  @NestJsGraphQL.Field(() => NestedEnumMealTypeFilter, { nullable: true })
  _min?: NestedEnumMealTypeFilter | undefined;

  @NestJsGraphQL.Field(() => NestedEnumMealTypeFilter, { nullable: true })
  _max?: NestedEnumMealTypeFilter | undefined;
}
