import { Type, querySyntax, Static } from '@feathersjs/typebox';

// Main data model schema
export const mapObjectsSchema = Type.Object(
  {
    id: Type.String({ format: 'uuid' }),
    userId: Type.String({ format: 'uuid' }), // todo validate reference
    tenancierId: Type.String({ format: 'uuid' }), // todo validate reference

    createdAt: Type.String(),
    updatedAt: Type.String(),
    deletedAt: Type.Optional(Type.String()),

    name: Type.Object({
      en: Type.String(),
      cn: Type.String()
    }),
    objectTypeId: Type.String({ format: 'uuid' }), // todo validate reference
    subCategory4Id: Type.Union([Type.String({ format: 'uuid' }), Type.Null()]),
    subCategory6Id: Type.Union([Type.String({ format: 'uuid' }), Type.Null()]),
    taxonomy4Path: Type.Union([Type.String(), Type.Null()]),
    taxonomy6Path: Type.Union([Type.String(), Type.Null()]),

    // https://github.com/sinclairzx81/typebox#standard-types
    // const C = TypeCompiler.Compile(Type.Object({         // const C: TypeCheck<TObject<{
    //   x: Type.Number(),                                  //     x: TNumber;
    //   y: Type.Number(),                                  //     y: TNumber;
    //   z: Type.Number()                                   //     z: TNumber;
    // }))
    // https://rs0spmr9q6.feishu.cn/sheets/shtcn4NHlX5kziPRp6zm9yYwxue?sheet=FZ3h71
    property_geojson: Type.Object({
      geojson: Type.Any(),
    }),
    property_name: Type.Object({
      name: Type.String(),
    }),
    property_shop: Type.Object({
      logo: Type.String(),
      description: Type.String(),
    }),
    property_building: Type.Object({
      floors: Type.Array(Type.String()),
      default_floor: Type.String(),
    }),
    property_floor: Type.Object({
      building_parent: Type.String(),
      is_default_floor: Type.Boolean(),
    }),
  },
  { $id: 'MapObjects', additionalProperties: false }
)
export type MapObjects = Static<typeof mapObjectsSchema>

// Schema for creating new entries
export const mapObjectsDataSchema = Type.Pick(
  mapObjectsSchema,
  [
    'userId',
    'tenancierId',
    'createdAt',
    'updatedAt',
    'name',
    'objectTypeId',
    'subCategory4Id',
    'subCategory6Id',
    'taxonomy4Path',
    'taxonomy6Path'
  ],
  {
    $id: 'MapObjectsData',
    additionalProperties: true
  }
);
export type MapObjectsData = Static<typeof mapObjectsDataSchema>;

// Schema for allowed query properties
export const mapObjectsQueryProperties = Type.Pick(
  mapObjectsSchema,
  [
    'userId',
    'tenancierId',
    'id',
    'name',
    'objectTypeId',
    'subCategory4Id',
    'subCategory6Id',
    'taxonomy4Path',
    'taxonomy6Path'
  ],
  {
    additionalProperties: false
  }
);
export const mapObjectsQuerySchema = querySyntax(mapObjectsQueryProperties);
export type MapObjectsQuery = Static<typeof mapObjectsQuerySchema>;
