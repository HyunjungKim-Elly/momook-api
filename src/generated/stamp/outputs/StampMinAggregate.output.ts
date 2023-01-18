import * as NestJsGraphQL from "@nestjs/graphql";
import { ErrorType, MealType } from "@prisma/client";

@NestJsGraphQL.ObjectType("StampMinAggregate", { isAbstract: true })
export class StampMinAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  count!: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  mealType!: "breakfast" | "lunch" | "dinner" | "night" | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  errorType!: "notFound" | "alreadyExists" | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  placeId!: number | null;
}
