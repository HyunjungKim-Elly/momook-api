import * as NestJsGraphQL from "@nestjs/graphql";
import { Place } from "../models/place.model";
import { ErrorType, MealType } from "@prisma/client";

@NestJsGraphQL.ObjectType("Stamp", { isAbstract: true })
export class Stamp {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String)
  count!: string;

  @NestJsGraphQL.Field(() => String)
  mealType!: "breakfast" | "lunch" | "dinner" | "night";

  @NestJsGraphQL.Field(() => String)
  errorType!: "notFound" | "alreadyExists";

  place?: Place | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  placeId?: number | null;
}
