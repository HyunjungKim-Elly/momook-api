import * as NestJsGraphQL from "@nestjs/graphql";
import { Gender } from "@prisma/client";
import { PlaceAvgAggregate } from "../../common/outputs/PlaceAvgAggregate.output";
import { PlaceSumAggregate } from "../../common/outputs/PlaceSumAggregate.output";
import { PlaceCountAggregate } from "./PlaceCountAggregate.output";
import { PlaceMaxAggregate } from "./PlaceMaxAggregate.output";
import { PlaceMinAggregate } from "./PlaceMinAggregate.output";

@NestJsGraphQL.ObjectType("PlaceGroupBy", { isAbstract: true })
export class PlaceGroupBy {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => String)
  gender!: "man" | "woman";

  @NestJsGraphQL.Field(() => PlaceCountAggregate, { nullable: true })
  _count!: PlaceCountAggregate | null;

  @NestJsGraphQL.Field(() => PlaceAvgAggregate, { nullable: true })
  _avg!: PlaceAvgAggregate | null;

  @NestJsGraphQL.Field(() => PlaceSumAggregate, { nullable: true })
  _sum!: PlaceSumAggregate | null;

  @NestJsGraphQL.Field(() => PlaceMinAggregate, { nullable: true })
  _min!: PlaceMinAggregate | null;

  @NestJsGraphQL.Field(() => PlaceMaxAggregate, { nullable: true })
  _max!: PlaceMaxAggregate | null;
}
