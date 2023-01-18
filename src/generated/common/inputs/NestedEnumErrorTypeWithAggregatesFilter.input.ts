import * as NestJsGraphQL from "@nestjs/graphql";
import { NestedEnumErrorTypeFilter } from "./NestedEnumErrorTypeFilter.input";
import { NestedIntFilter } from "./NestedIntFilter.input";
import { ErrorType } from "@prisma/client";

@NestJsGraphQL.InputType("NestedEnumErrorTypeWithAggregatesFilter", { isAbstract: true })
export class NestedEnumErrorTypeWithAggregatesFilter {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  equals?: ErrorType | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  in?: Array<ErrorType> | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  notIn?: Array<ErrorType> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumErrorTypeWithAggregatesFilter, { nullable: true })
  not?: NestedEnumErrorTypeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined;

  @NestJsGraphQL.Field(() => NestedEnumErrorTypeFilter, { nullable: true })
  _min?: NestedEnumErrorTypeFilter | undefined;

  @NestJsGraphQL.Field(() => NestedEnumErrorTypeFilter, { nullable: true })
  _max?: NestedEnumErrorTypeFilter | undefined;
}
