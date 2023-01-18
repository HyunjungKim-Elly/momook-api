import * as NestJsGraphQL from "@nestjs/graphql";
import { NestedEnumErrorTypeFilter } from "./NestedEnumErrorTypeFilter.input";
import { ErrorType } from "@prisma/client";

@NestJsGraphQL.InputType("EnumErrorTypeFilter", { isAbstract: true })
export class EnumErrorTypeFilter {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  equals?: "notFound" | "alreadyExists" | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  in?: Array<"notFound" | "alreadyExists"> | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  notIn?: Array<"notFound" | "alreadyExists"> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumErrorTypeFilter, { nullable: true })
  not?: NestedEnumErrorTypeFilter | undefined;
}
