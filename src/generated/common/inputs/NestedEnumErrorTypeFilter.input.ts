import * as NestJsGraphQL from "@nestjs/graphql";
import { ErrorType } from "@prisma/client";

@NestJsGraphQL.InputType("NestedEnumErrorTypeFilter", { isAbstract: true })
export class NestedEnumErrorTypeFilter {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  equals?: ErrorType | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  in?: Array<ErrorType> | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  notIn?: Array<ErrorType> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumErrorTypeFilter, { nullable: true })
  not?: NestedEnumErrorTypeFilter | undefined;
}
