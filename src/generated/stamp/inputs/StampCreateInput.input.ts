import * as NestJsGraphQL from "@nestjs/graphql";
import { PlaceCreateNestedOneWithoutStampsInput } from "../../place/inputs/PlaceCreateNestedOneWithoutStampsInput.input";
import { ErrorType, MealType } from "@prisma/client";

@NestJsGraphQL.InputType("StampCreateInput", { isAbstract: true })
export class StampCreateInput {
  @NestJsGraphQL.Field(() => String)
  count!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  mealType?: "breakfast" | "lunch" | "dinner" | "night" | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  errorType?: "notFound" | "alreadyExists" | undefined;

  @NestJsGraphQL.Field(() => PlaceCreateNestedOneWithoutStampsInput, { nullable: true })
  place?: PlaceCreateNestedOneWithoutStampsInput | undefined;
}
