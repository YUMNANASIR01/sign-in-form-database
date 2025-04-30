// src/sanity/schemaTypes/login.ts

export const loginSchema = {
  name: 'login',
  title: 'Login',
  type: 'document',
  fields: [
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string',
    },
  ],
}
