export const NODE_ENV = {
  PRODUCTION: 'production',
  DEVELOPMENT: 'development',
}

export const jwtConstants = {
  secret: 'secretKey',
  jwtPass: 'jwtPass',
}

export const RolesConstants: NRoles.IRolesConstants = {
  ADMIN: 'ADMIN',
  USER: 'USER',
  GUEST: 'GUEST',
}

export const RolesRelation = {
  ADMIN: [RolesConstants.ADMIN, RolesConstants.USER, RolesConstants.GUEST],
  USER: [RolesConstants.USER, RolesConstants.GUEST],
  GUEST: [RolesConstants.GUEST],
}

export const APP_EMAIL_TRANSPORT = 'APP_EMAIL_TRANSPORT'
