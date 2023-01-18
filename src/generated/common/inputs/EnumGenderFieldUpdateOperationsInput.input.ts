import * as NestJsGraphQL from "@nestjs/graphql";
import { Gender } from "@prisma/client";

@NestJsGraphQL.InputType("EnumGenderFieldUpdateOperationsInput", { isAbstract: true })
export class EnumGenderFieldUpdateOperationsInput {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  set?: Gender | undefined;
}
