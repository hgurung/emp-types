import { Type, querySyntax , Static } from '@feathersjs/typebox'

// Main data model schema
export const taxonomiesSchema = Type.Object(
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
    taxonomyKey: Type.Integer(),
    key: Type.String()
  },
  { $id: 'Taxonomies', additionalProperties: false }
)

export type Taxonomies = Static<typeof taxonomiesSchema>

// Schema for creating new entries
export const taxonomiesDataSchema = Type.Pick(
  taxonomiesSchema,
  ['userId', 'tenancierId', 'name', 'createdAt', 'updatedAt', 'taxonomyKey', 'key'],
  {
    $id: 'TaxonomiesData',
    additionalProperties: false
  }
)
export type TaxonomiesData = Static<typeof taxonomiesDataSchema>

// Schema for allowed query properties
export const taxonomiesQueryProperties = Type.Pick(
  taxonomiesSchema,
  ['userId', 'tenancierId', 'id', 'name', 'taxonomyKey', 'key'],
  {
    additionalProperties: false
  }
)
export const taxonomiesQuerySchema = querySyntax(taxonomiesQueryProperties)
export type TaxonomiesQuery = Static<typeof taxonomiesQuerySchema>

