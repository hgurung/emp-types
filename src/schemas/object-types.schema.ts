import { Type, querySyntax, Static } from '@feathersjs/typebox';

// Main data model schema
export const objectTypesSchema = Type.Object(
  {
    id: Type.String({ format: 'uuid' }),
    userId: Type.String({ format: 'uuid' }),
    // tenancierId: Type.String({ format: 'uuid' }), // todo validate reference
    tenancierId: Type.String({ format: 'uuid' }), // todo validate reference

    createdAt: Type.String(),
    updatedAt: Type.String(),
    deletedAt: Type.Optional(Type.String()),

    name: Type.Object({
      en: Type.String(),
      cn: Type.String()
    }),
    key: Type.String()
    // propertyIds: Type.Array(Type.Optional(Type.String({ format: 'uuid' }))),
  },
  { $id: 'ObjectTypes', additionalProperties: false }
);
export type ObjectTypes = Static<typeof objectTypesSchema>;

// Schema for creating new entries
export const objectTypesDataSchema = Type.Pick(
  objectTypesSchema,
  ['userId', 'tenancierId', 'name', 'createdAt', 'updatedAt', 'key'],
  {
    $id: 'ObjectTypesData',
    additionalProperties: false
  }
);
export type ObjectTypesData = Static<typeof objectTypesDataSchema>;

// Schema for allowed query properties
export const objectTypesQueryProperties = Type.Pick(
  objectTypesSchema,
  ['userId', 'tenancierId', 'id', 'name', 'key'],
  {
    additionalProperties: false
  }
);
export const objectTypesQuerySchema = querySyntax(objectTypesQueryProperties);
export type ObjectTypesQuery = Static<typeof objectTypesQuerySchema>;
