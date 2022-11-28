import { Type, querySyntax, Static } from '@feathersjs/typebox';

// Main data model schema
export const mapsSchema = Type.Object(
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
    subCategory1Id: Type.Union([Type.String({ format: 'uuid' }), Type.Null()]),
    subCategory2Id: Type.Union([Type.String({ format: 'uuid' }), Type.Null()]),
    taxonomy1Path: Type.Union([Type.String(), Type.Null()]),
    taxonomy2Path: Type.Union([Type.String(), Type.Null()])
  },
  { $id: 'Maps', additionalProperties: false }
);
export type Maps = Static<typeof mapsSchema>;

// Schema for creating new entries
export const mapsDataSchema = Type.Pick(
  mapsSchema,
  [
    'userId',
    'tenancierId',
    'createdAt',
    'updatedAt',
    'name',
    'subCategory1Id',
    'subCategory2Id',
    'taxonomy1Path',
    'taxonomy2Path'
  ],
  {
    $id: 'MapsData',
    additionalProperties: false
  }
);
export type MapsData = Static<typeof mapsDataSchema>;

// Schema for allowed query properties
export const mapsQueryProperties = Type.Pick(
  mapsSchema,
  [
    'userId',
    'tenancierId',
    'id',
    'name',
    'subCategory1Id',
    'subCategory2Id',
    'taxonomy1Path',
    'taxonomy2Path'
  ],
  { additionalProperties: false }
);
export const mapsQuerySchema = querySyntax(mapsQueryProperties);
export type MapsQuery = Static<typeof mapsQuerySchema>;
