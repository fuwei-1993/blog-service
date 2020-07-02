declare namespace NRoles {
  interface IRolesConstants {
    ADMIN: 'ADMIN'
    USER: 'USER'
    GUEST: 'GUEST'
  }

  type RolesTypePick<T extends object, K extends keyof T> = T[K]

  type RolesType = RolesTypePick<IRolesConstants, keyof IRolesConstants>
}
