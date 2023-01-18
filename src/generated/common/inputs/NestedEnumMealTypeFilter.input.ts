import * as NestJsGraphQL from "@nestjs/graphql";
import { MealType } from "@prisma/client";

@NestJsGraphQL.InputType("NestedEnumMealTypeFilter", { isAbstract: true })
export class NestedEnumMealTypeFilter {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  equals?: "breakfast" | "lunch" | "dinner" | "night" | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  in?: Array<"breakfast" | "lunch" | "dinner" | "night"> | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  notIn?: Array<"breakfast" | "lunch" | "dinner" | "night"> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumMealTypeFilter, { nullable: true })
  not?: NestedEnumMealTypeFilter | undefined;
}
