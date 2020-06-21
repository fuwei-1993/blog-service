import { ValidationError } from 'class-validator'

export const handlerRequestError = (errors: ValidationError[]) => {
  return errors.map((error: ValidationError) => {
    const [message]: string[] = Object.values(error.constraints)
    return {
      [error.property]: message,
      currentValue: error.value,
    }
  })
}

export const matchRoles = <T extends string>(
  roles: string[],
  userRoles: T[],
) => {
  const userRolesMap = {} as Record<T, any>
  userRoles.forEach(userRole => {
    userRolesMap[userRole] = userRole
  })

  return roles.some(role => userRolesMap[role])
}
