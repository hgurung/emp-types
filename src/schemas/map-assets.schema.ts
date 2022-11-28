import { Type, querySyntax, Static } from '@feathersjs/typebox';

// Main data model schema
export const mapAssetsSchema = Type.Object(
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
    assetType: Type.String(),
    assetSourceId: Type.Optional(Type.String({ format: 'uuid' })),
    version: Type.String(),
    objectPath: Type.String() // path to directory or file
    // objectStorageDownloadUrl: Type.String()
  },
  { $id: 'MapAssets', additionalProperties: false }
);
export type MapAssets = Static<typeof mapAssetsSchema>;

// Schema for creating new entries
export const mapAssetsDataSchema = Type.Pick(
  mapAssetsSchema,
  ['userId', 'tenancierId', 'name', 'assetType', 'version', 'objectPath'],
  {
    $id: 'MapAssetsData',
    additionalProperties: false
  }
);
export type MapAssetsData = Static<typeof mapAssetsDataSchema>;

// Schema for allowed query properties
export const mapAssetsQueryProperties = Type.Pick(
  mapAssetsSchema,
  ['userId', 'tenancierId', 'createdAt', 'updatedAt', 'objectPath', 'assetType', 'assetSourceId', 'version'],
  {
    additionalProperties: false
  }
);
export const mapAssetsQuerySchema = querySyntax(mapAssetsQueryProperties);
export type MapAssetsQuery = Static<typeof mapAssetsQuerySchema>;
