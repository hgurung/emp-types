import { Type, querySyntax, Static } from '@feathersjs/typebox';

// Main data model schema
export const objectTypesPropertiesSchema = Type.Object(
  {
    id: Type.String({ format: 'uuid' }),
    userId: Type.String({ format: 'uuid' }),
    tenancierId: Type.String({ format: 'uuid' }),

    createdAt: Type.String(),
    updatedAt: Type.String(),
    deletedAt: Type.Optional(Type.String()),

    objectTypeId: Type.String({ format: 'uuid' }),
    propertyId: Type.String({ format: 'uuid' })
  },
  { $id: 'ObjectTypesProperties', additionalProperties: false }
);
export type ObjectTypesProperties = Static<typeof objectTypesPropertiesSchema>;

// Schema for creating new entries
export const objectTypesPropertiesDataSchema = Type.Pick(
  objectTypesPropertiesSchema,
  ['userId', 'tenancierId', 'objectTypeId', 'propertyId', 'createdAt', 'updatedAt'],
  {
    $id: 'ObjectTypesPropertiesData',
    additionalProperties: false
  }
);
export type ObjectTypesPropertiesData = Static<typeof objectTypesPropertiesDataSchema>;

// Schema for allowed query properties
export const objectTypesPropertiesQueryProperties = Type.Pick(
  objectTypesPropertiesSchema,
  ['id', 'tenancierId', 'objectTypeId', 'propertyId', 'createdAt', 'updatedAt'],
  {
    additionalProperties: false
  }
);
export const objectTypesPropertiesQuerySchema = querySyntax(objectTypesPropertiesQueryProperties);
export type ObjectTypesPropertiesQuery = Static<typeof objectTypesPropertiesQuerySchema>;
