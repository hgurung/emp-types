import { Type, querySyntax, Static } from '@feathersjs/typebox';

// Main data model schema
export const policiesLtreeSchema = Type.Object(
  {
    id: Type.Number(),
    ptype: Type.String(),
    v0: Type.Union([Type.String(), Type.String({ format: 'uuid' }), Type.Null()]),
    v1: Type.String(),
    v2: Type.String(),
    v3: Type.Optional(Type.Union([Type.String(), Type.Null()])),
    v4: Type.Optional(Type.Union([Type.String(), Type.Null()])),
    v5: Type.Optional(Type.Union([Type.String(), Type.Null()])),

    createdAt: Type.Optional(Type.String()),
    updatedAt: Type.Optional(Type.String()),
    deletedAt: Type.Optional(Type.String())
  },
  { $id: 'PoliciesLtree', additionalProperties: false }
);
export type PoliciesLtree = Static<typeof policiesLtreeSchema>;

// Schema for creating new entries
export const policiesLtreeDataSchema = Type.Pick(
  policiesLtreeSchema,
  ['ptype', 'v0', 'v1', 'v2', 'v3', 'v4', 'v5'],
  {
    $id: 'PoliciesLtreeData',
    additionalProperties: false
  }
);
export type PoliciesLtreeData = Static<typeof policiesLtreeDataSchema>;

// Schema for allowed query properties
export const policiesLtreeQueryProperties = Type.Pick(
  policiesLtreeSchema,
  ['id', 'ptype', 'v0', 'v1', 'v2', 'v3', 'v4', 'v5'],
  {
    additionalProperties: false
  }
);
export const policiesLtreeQuerySchema = querySyntax(policiesLtreeQueryProperties);
export type PoliciesLtreeQuery = Static<typeof policiesLtreeQuerySchema>;
