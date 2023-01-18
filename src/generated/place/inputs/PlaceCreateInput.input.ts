import * as NestJsGraphQL from "@nestjs/graphql";
import { StampCreateNestedManyWithoutPlaceInput } from "../../stamp/inputs/StampCreateNestedManyWithoutPlaceInput.input";
import { Gender } from "@prisma/client";

@NestJsGraphQL.InputType("PlaceCreateInput", { isAbstract: true })
export class PlaceCreateInput {
  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => String)
  gender!: "man" | "woman";

  @NestJsGraphQL.Field(() => StampCreateNestedManyWithoutPlaceInput, { nullable: true })
  stamps?: StampCreateNestedManyWithoutPlaceInput | undefined;
}
