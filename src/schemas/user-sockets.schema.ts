import { Type, querySyntax, Static } from '@feathersjs/typebox';

// Main data model schema
export const userSocketsSchema = Type.Object(
  {
    id: Type.String({ format: 'uuid' }),
    text: Type.String(),
    userId: Type.String({ format: 'uuid' })
  },
  { $id: 'UserSockets', additionalProperties: false }
);
export type UserSockets = Static<typeof userSocketsSchema>;

// Schema for creating new entries
export const userSocketsDataSchema = Type.Pick(userSocketsSchema, ['text', 'userId'], {
  $id: 'UserSocketsData',
  additionalProperties: false
});
export type UserSocketsData = Static<typeof userSocketsDataSchema>;

// Schema for allowed query properties
export const userSocketsQueryProperties = Type.Pick(userSocketsSchema, ['id', 'text'], {
  additionalProperties: false
});
export const userSocketsQuerySchema = querySyntax(userSocketsQueryProperties);
export type UserSocketsQuery = Static<typeof userSocketsQuerySchema>;