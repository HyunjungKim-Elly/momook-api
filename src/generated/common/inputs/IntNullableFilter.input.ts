import * as NestJsGraphQL from "@nestjs/graphql";
import { NestedIntNullableFilter } from "./NestedIntNullableFilter.input";

@NestJsGraphQL.InputType("IntNullableFilter", { isAbstract: true })
export class IntNullableFilter {
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

  @NestJsGraphQL.Field(() => NestedIntNullableFilter, { nullable: true })
  not?: NestedIntNullableFilter | undefined;
}
