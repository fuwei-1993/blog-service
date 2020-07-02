declare namespace NRoles {
  interface IRolesConstants {
    ADMIN: 'ADMIN'
    USER: 'USER'
    GUEST: 'GUEST'
  }

  type RolesType = NCommon.PickValueType<IRolesConstants, keyof IRolesConstants>
}
