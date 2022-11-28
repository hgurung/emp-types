import { Type, querySyntax, Static } from '@feathersjs/typebox';

// Main data model schema
export const userSchema = Type.Object(
  {
    id: Type.String({ format: 'uuid' }),
    tenancierId: Type.String({ format: 'uuid' }), // todo validate reference

    createdAt: Type.String(),
    updatedAt: Type.String(),
    deletedAt: Type.Optional(Type.String()),

    email: Type.String(),
    password: Type.Optional(Type.String())
  },
  { $id: 'User', additionalProperties: false }
);
export type User = Static<typeof userSchema>;

// Schema for the basic data model (e.g. creating new entries)
export const userDataSchema = Type.Pick(
  userSchema,
  ['tenancierId', 'createdAt', 'updatedAt', 'email', 'password'],
  {
    $id: 'UserData',
    additionalProperties: false
  }
);
export type UserData = Static<typeof userDataSchema>;

// Schema for allowed query properties
export const userQueryProperties = Type.Pick(userSchema, ['tenancierId', 'id', 'email']);
export const userQuerySchema = querySyntax(userQueryProperties);
export type UserQuery = Static<typeof userQuerySchema>;
