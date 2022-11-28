import { Type, querySyntax, Static } from '@feathersjs/typebox';

// Main data model schema
export const policiesSchema = Type.Object(
  {
    id: Type.Number(),
    ptype: Type.String(),
    v0: Type.String(),
    v1: Type.String(),
    v2: Type.String(),
    v3: Type.Optional(Type.String()),
    v4: Type.Optional(Type.String()),
    v5: Type.Optional(Type.String())
  },
  { $id: 'Policies', additionalProperties: false }
);
export type Policies = Static<typeof policiesSchema>;

// Schema for creating new entries
export const policiesDataSchema = Type.Pick(policiesSchema, ['ptype', 'v0', 'v1', 'v2', 'v3', 'v4', 'v5'], {
  $id: 'PoliciesData',
  additionalProperties: true
});
export type PoliciesData = Static<typeof policiesDataSchema>;

// Schema for allowed query properties
export const policiesQueryProperties = Type.Pick(
  policiesSchema,
  ['ptype', 'v0', 'v1', 'v2', 'v3', 'v4', 'v5'],
  {
    additionalProperties: false
  }
);
export const policiesQuerySchema = querySyntax(policiesQueryProperties);
export type PoliciesQuery = Static<typeof policiesQuerySchema>;
