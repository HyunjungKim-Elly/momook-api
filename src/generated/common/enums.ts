import * as NestJsGraphQL from "@nestjs/graphql";

export enum PlaceScalarFieldEnum {
  id = "id",
  name = "name",
  gender = "gender"
}
NestJsGraphQL.registerEnumType(PlaceScalarFieldEnum, {
  name: "PlaceScalarFieldEnum",
  description: undefined
});

export enum StampScalarFieldEnum {
  id = "id",
  count = "count",
  mealType = "mealType",
  errorType = "errorType",
  placeId = "placeId"
}
NestJsGraphQL.registerEnumType(StampScalarFieldEnum, {
  name: "StampScalarFieldEnum",
  description: undefined
});

export enum SortOrder {
  asc = "asc",
  desc = "desc"
}
NestJsGraphQL.registerEnumType(SortOrder, {
  name: "SortOrder",
  description: undefined
});
