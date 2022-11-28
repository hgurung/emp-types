import { Type, querySyntax, Static } from '@feathersjs/typebox';

// Main data model schema
export const tenanciersSchema = Type.Object(
  {
    id: Type.String({ format: 'uuid' }),
    ownerId: Type.Optional(Type.String({ format: 'uuid' })),

    createdAt: Type.String(),
    updatedAt: Type.String(),
    deletedAt: Type.Optional(Type.String()),

    name: Type.Object({
      en: Type.String(),
      cn: Type.String()
    })
  },
  { $id: 'Tenanciers', additionalProperties: false }
);
export type Tenanciers = Static<typeof tenanciersSchema>;

// Schema for creating new entries
export const tenanciersDataSchema = Type.Pick(tenanciersSchema, ['name', 'createdAt', 'updatedAt'], {
  $id: 'TenanciersData',
  additionalProperties: false
});
export type TenanciersData = Static<typeof tenanciersDataSchema>;

// Schema for allowed query properties
export const tenanciersQueryProperties = Type.Pick(tenanciersSchema, ['id', 'name'], {
  additionalProperties: false
});
export const tenanciersQuerySchema = querySyntax(tenanciersQueryProperties);
export type TenanciersQuery = Static<typeof tenanciersQuerySchema>;
