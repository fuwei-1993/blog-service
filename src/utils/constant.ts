export const NODE_ENV = {
  PRODUCTION: 'production',
  DEVELOPMENT: 'development',
}

export const jwtConstants = {
  secret: 'secretKey',
  jwtPass: 'jwtPass',
}

export const AuthConstants = {
  ADMIN: 'ADMIN',
  USER: 'USER',
  GUEST: 'GUEST',
}

export const AuthRelation = {
  ADMIN: [AuthConstants.ADMIN, AuthConstants.USER, AuthConstants.GUEST],
  USER: [AuthConstants.USER, AuthConstants.GUEST],
  GUEST: [AuthConstants.GUEST],
}
