import * as NestJsGraphQL from "@nestjs/graphql";
import { Gender } from "@prisma/client";

@NestJsGraphQL.ObjectType("PlaceMaxAggregate", { isAbstract: true })
export class PlaceMaxAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  name!: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  gender!: "man" | "woman" | null;
}
