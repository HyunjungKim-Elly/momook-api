import * as NestJsGraphQL from "@nestjs/graphql";
import { ErrorType } from "@prisma/client";

@NestJsGraphQL.InputType("EnumErrorTypeFieldUpdateOperationsInput", { isAbstract: true })
export class EnumErrorTypeFieldUpdateOperationsInput {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  set?: "notFound" | "alreadyExists" | undefined;
}
