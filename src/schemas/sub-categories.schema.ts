import { Type, querySyntax, Static } from '@feathersjs/typebox';

// Main data model schema
export const subCategoriesSchema = Type.Object(
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
    key: Type.String(),
    taxonomyId: Type.String({ format: 'uuid' }),
    subCategoryId: Type.Union([Type.String({ format: 'uuid' }), Type.Null()]),
    depth: Type.Number(),
    taxonomyPath: Type.String()
  },
  { $id: 'SubCategories', additionalProperties: false }
);
export type SubCategories = Static<typeof subCategoriesSchema>;

// Schema for creating new entries
export const subCategoriesDataSchema = Type.Pick(
  subCategoriesSchema,
  [
    'userId',
    'tenancierId',
    'name',
    'createdAt',
    'updatedAt',
    'depth',
    'taxonomyId',
    'subCategoryId',
    'key',
    'taxonomyPath'
  ],
  {
    $id: 'SubCategoriesData',
    additionalProperties: false
  }
);
export type SubCategoriesData = Static<typeof subCategoriesDataSchema>;

// Schema for allowed query properties
export const subCategoriesQueryProperties = Type.Pick(
  subCategoriesSchema,
  [
    'userId',
    'tenancierId',
    'name',
    'createdAt',
    'updatedAt',
    'depth',
    'taxonomyId',
    'subCategoryId',
    'key',
    'taxonomyPath'
  ],
  {
    additionalProperties: false
  }
);
export const subCategoriesQuerySchema = querySyntax(subCategoriesQueryProperties);
export type SubCategoriesQuery = Static<typeof subCategoriesQuerySchema>;
