import * as NestJsGraphQL from "@nestjs/graphql";
import { Gender } from "../enums/Gender.enum";
import { Stamp } from "../models/stamp.model";
import { PlaceCount } from "../place/outputs/PlaceCount.output";

@NestJsGraphQL.ObjectType("Place", { isAbstract: true })
export class Place {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => String)
  gender!: "man" | "woman";

  stamps?: Stamp[];

  @NestJsGraphQL.Field(() => PlaceCount, { nullable: true })
  _count?: PlaceCount | null;
}
