import { Type, querySyntax, Static } from '@feathersjs/typebox';

// Main data model schema
export const userConfigsSchema = Type.Object(
  {
    id: Type.String({ format: 'uuid' }),
    text: Type.String(),
    userId: Type.String({ format: 'uuid' })
  },
  { $id: 'UserConfigs', additionalProperties: false }
);
export type UserConfigs = Static<typeof userConfigsSchema>;

// Schema for creating new entries
export const userConfigsDataSchema = Type.Pick(userConfigsSchema, ['text', 'userId'], {
  $id: 'UserConfigsData',
  additionalProperties: false
});
export type UserConfigsData = Static<typeof userConfigsDataSchema>;

// Schema for allowed query properties
export const userConfigsQueryProperties = Type.Pick(userConfigsSchema, ['id', 'text'], {
  additionalProperties: false
});
export const userConfigsQuerySchema = querySyntax(userConfigsQueryProperties);
export type UserConfigsQuery = Static<typeof userConfigsQuerySchema>;
