import { Type, querySyntax, Static } from '@feathersjs/typebox';

// Main data model schema
export const mapObjectsAssetsSchema = Type.Object(
  {
    id: Type.String({ format: 'uuid' }),
    userId: Type.String({ format: 'uuid' }),
    tenancierId: Type.String({ format: 'uuid' }),

    createdAt: Type.String(),
    updatedAt: Type.String(),
    deletedAt: Type.Optional(Type.String()),

    mapObjectId: Type.String({ format: 'uuid' }),
    assetId: Type.String({ format: 'uuid' })
  },
  { $id: 'MapObjectsAssets', additionalProperties: false }
);
export type MapObjectsAssets = Static<typeof mapObjectsAssetsSchema>;

// Schema for creating new entries
export const mapObjectsAssetsDataSchema = Type.Pick(mapObjectsAssetsSchema, ['mapObjectId', 'assetId'], {
  $id: 'MapObjectsAssetsData',
  additionalProperties: false
});
export type MapObjectsAssetsData = Static<typeof mapObjectsAssetsDataSchema>;

// Schema for allowed query properties
export const mapObjectsAssetsQueryProperties = Type.Pick(
  mapObjectsAssetsSchema,
  ['id', 'mapObjectId', 'assetId'],
  {
    additionalProperties: false
  }
);
export const mapObjectsAssetsQuerySchema = querySyntax(mapObjectsAssetsQueryProperties);
export type MapObjectsAssetsQuery = Static<typeof mapObjectsAssetsQuerySchema>;
