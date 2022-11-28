import { Type, querySyntax, Static } from '@feathersjs/typebox';

// Main data model schema
export const propertiesSchema = Type.Object(
  {
    id: Type.String({ format: 'uuid' }),
    userId: Type.String({ format: 'uuid' }),
    tenancierId: Type.String({ format: 'uuid' }), // todo validate reference

    createdAt: Type.String(),
    updatedAt: Type.String(),
    deletedAt: Type.Optional(Type.String()),

    name: Type.Object({
      en: Type.String(),
      cn: Type.String()
    }),
    key: Type.String(),
    definition: Type.Any() // todo Type.KeyOf? https://github.com/sinclairzx81/typebox
  },
  { $id: 'Properties', additionalProperties: false }
);
export type Properties = Static<typeof propertiesSchema>;

// Schema for creating new entries
export const propertiesDataSchema = Type.Pick(
  propertiesSchema,
  ['userId', 'tenancierId', 'name', 'createdAt', 'updatedAt', 'key', 'definition'],
  {
    $id: 'PropertiesData',
    additionalProperties: false
  }
);
export type PropertiesData = Static<typeof propertiesDataSchema>;

// Schema for allowed query properties
export const propertiesQueryProperties = Type.Pick(
  propertiesSchema,
  ['userId', 'tenancierId', 'id', 'name', 'key'],
  {
    additionalProperties: false
  }
);
export const propertiesQuerySchema = querySyntax(propertiesQueryProperties);
export type PropertiesQuery = Static<typeof propertiesQuerySchema>;
