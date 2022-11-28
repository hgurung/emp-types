import { Type, querySyntax, Static } from '@feathersjs/typebox';

// Main data model schema
export const empExternalFilesSchema = Type.Object(
  {
    id: Type.String({ format: 'uuid' }),
    userId: Type.String({ format: 'uuid' }), // todo validate reference
    tenancierId: Type.String({ format: 'uuid' }), // todo validate reference
    createdAt: Type.String(),
    updatedAt: Type.String(),
    deletedAt: Type.Optional(Type.String()),
    objectPath: Type.String(),
    externalServiceUrl: Type.Optional(Type.String()), // twinverseApiUrl later externalServiceId
    assetId: Type.Optional(Type.String({ format: 'uuid' })), // map asset id or input id and also minio bucket id
    tvFileId: Type.Optional(Type.String({ format: 'uuid' })),
    uploadStatus: Type.Optional(Type.String({ default: 'noSyncToTwinverseYet' })), // todo default does not work
    uploadError: Type.Optional(Type.String()),
    presignedPutObjectUrl: Type.Optional(Type.String()),
    presignedGetObjectUrl: Type.Optional(Type.String()),
    presignedGetObjectUrlExpires: Type.Optional(Type.String())
  },
  { $id: 'EmpExternalFiles', additionalProperties: false }
);
export type EmpExternalFiles = Static<typeof empExternalFilesSchema>;

// Schema for creating new entries
export const empExternalFilesDataSchema = Type.Pick(
  empExternalFilesSchema,
  [
    'userId',
    'tenancierId',
    'objectPath',
    'externalServiceUrl',
    'assetId',
    'tvFileId',
    'uploadStatus',
    'uploadError',
    'presignedPutObjectUrl',
    'presignedGetObjectUrl',
    'presignedGetObjectUrlExpires'
  ],
  {
    $id: 'EmpExternalFilesData',
    additionalProperties: false
  }
);
export type EmpExternalFilesData = Static<typeof empExternalFilesDataSchema>;

// Schema for allowed query properties
export const empExternalFilesQueryProperties = Type.Pick(
  empExternalFilesSchema,
  [
    'id',
    'userId',
    'tenancierId',
    'assetId',
    'createdAt',
    'updatedAt',
    'objectPath',
    'uploadStatus',
    'externalServiceUrl'
  ],
  {
    additionalProperties: false
  }
);
export const empExternalFilesQuerySchema = querySyntax(empExternalFilesQueryProperties);
export type EmpExternalFilesQuery = Static<typeof empExternalFilesQuerySchema>;
