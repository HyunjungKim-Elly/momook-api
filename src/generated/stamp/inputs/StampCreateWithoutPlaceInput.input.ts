import * as NestJsGraphQL from "@nestjs/graphql";
import { ErrorType, MealType } from "@prisma/client";

@NestJsGraphQL.InputType("StampCreateWithoutPlaceInput", { isAbstract: true })
export class StampCreateWithoutPlaceInput {
  @NestJsGraphQL.Field(() => String)
  count!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  mealType?: "breakfast" | "lunch" | "dinner" | "night" | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  errorType?: ErrorType | undefined;
}
