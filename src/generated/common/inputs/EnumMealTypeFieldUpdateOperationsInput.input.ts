import * as NestJsGraphQL from "@nestjs/graphql";
import { MealType } from "@prisma/client";

@NestJsGraphQL.InputType("EnumMealTypeFieldUpdateOperationsInput", { isAbstract: true })
export class EnumMealTypeFieldUpdateOperationsInput {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  set?: MealType | undefined;
}
