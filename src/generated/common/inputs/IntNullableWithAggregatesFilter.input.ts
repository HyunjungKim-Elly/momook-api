import * as NestJsGraphQL from "@nestjs/graphql";
import { NestedFloatNullableFilter } from "./NestedFloatNullableFilter.input";
import { NestedIntNullableFilter } from "./NestedIntNullableFilter.input";
import { NestedIntNullableWithAggregatesFilter } from "./NestedIntNullableWithAggregatesFilter.input";

@NestJsGraphQL.InputType("IntNullableWithAggregatesFilter", { isAbstract: true })
export class IntNullableWithAggregatesFilter {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  equals?: number | undefined;

  @NestJsGraphQL.Field(() => [NestJsGraphQL.Int], { nullable: true })
  in?: number[] | undefined;

  @NestJsGraphQL.Field(() => [NestJsGraphQL.Int], { nullable: true })
  notIn?: number[] | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  lt?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  lte?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  gt?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  gte?: number | undefined;

  @NestJsGraphQL.Field(() => NestedIntNullableWithAggregatesFilter, { nullable: true })
  not?: NestedIntNullableWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: NestedIntNullableFilter | undefined;

  @NestJsGraphQL.Field(() => NestedFloatNullableFilter, { nullable: true })
  _avg?: NestedFloatNullableFilter | undefined;

  @NestJsGraphQL.Field(() => NestedIntNullableFilter, { nullable: true })
  _sum?: NestedIntNullableFilter | undefined;

  @NestJsGraphQL.Field(() => NestedIntNullableFilter, { nullable: true })
  _min?: NestedIntNullableFilter | undefined;

  @NestJsGraphQL.Field(() => NestedIntNullableFilter, { nullable: true })
  _max?: NestedIntNullableFilter | undefined;
}
