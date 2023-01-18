import * as NestJsGraphQL from "@nestjs/graphql";
import { ErrorType, MealType } from "@prisma/client";

@NestJsGraphQL.InputType("StampCreateManyPlaceInput", { isAbstract: true })
export class StampCreateManyPlaceInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => String)
  count!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  mealType?: "breakfast" | "lunch" | "dinner" | "night" | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  errorType?: "notFound" | "alreadyExists" | undefined;
}
