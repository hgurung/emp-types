import { Type, querySyntax, Static } from '@feathersjs/typebox';

// Main data model schema
export const inputsSchema = Type.Object(
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
    inputType: Type.String(),
    inputSourceId: Type.Optional(Type.String({ format: 'uuid' })),
    version: Type.String(),
    objectPath: Type.String()
  },
  { $id: 'Inputs', additionalProperties: false }
);
export type Inputs = Static<typeof inputsSchema>;

// Schema for creating new entries
export const inputsDataSchema = Type.Pick(
  inputsSchema,
  ['userId', 'tenancierId', 'name', 'inputType', 'version', 'objectPath'],
  {
    $id: 'InputsData',
    additionalProperties: false
  }
);
export type InputsData = Static<typeof inputsDataSchema>;

// Schema for allowed query properties
export const inputsQueryProperties = Type.Pick(
  inputsSchema,
  ['userId', 'tenancierId', 'createdAt', 'updatedAt', 'objectPath', 'inputType', 'inputSourceId', 'version'],
  { additionalProperties: false }
);
export const inputsQuerySchema = querySyntax(inputsQueryProperties);
export type InputsQuery = Static<typeof inputsQuerySchema>;
