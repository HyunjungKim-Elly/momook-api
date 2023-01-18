import * as NestJsGraphQL from "@nestjs/graphql";
import { ErrorType, MealType } from "@prisma/client";
import { StampAvgAggregate } from "../../common/outputs/StampAvgAggregate.output";
import { StampSumAggregate } from "../../common/outputs/StampSumAggregate.output";
import { StampCountAggregate } from "./StampCountAggregate.output";
import { StampMaxAggregate } from "./StampMaxAggregate.output";
import { StampMinAggregate } from "./StampMinAggregate.output";

@NestJsGraphQL.ObjectType("StampGroupBy", { isAbstract: true })
export class StampGroupBy {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String)
  count!: string;

  @NestJsGraphQL.Field(() => String)
  mealType!: "breakfast" | "lunch" | "dinner" | "night";

  @NestJsGraphQL.Field(() => String)
  errorType!: "notFound" | "alreadyExists";

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  placeId!: number | null;

  @NestJsGraphQL.Field(() => StampCountAggregate, { nullable: true })
  _count!: StampCountAggregate | null;

  @NestJsGraphQL.Field(() => StampAvgAggregate, { nullable: true })
  _avg!: StampAvgAggregate | null;

  @NestJsGraphQL.Field(() => StampSumAggregate, { nullable: true })
  _sum!: StampSumAggregate | null;

  @NestJsGraphQL.Field(() => StampMinAggregate, { nullable: true })
  _min!: StampMinAggregate | null;

  @NestJsGraphQL.Field(() => StampMaxAggregate, { nullable: true })
  _max!: StampMaxAggregate | null;
}
