import { ValidationError } from 'class-validator'
import { RolesRelation } from './constant'

export const handlerRequestError = (errors: ValidationError[]) => {
  return errors.map((error: ValidationError) => {
    const [message]: string[] = Object.values(error.constraints)
    return {
      [error.property]: message,
      currentValue: error.value,
    }
  })
}

export const rolesRelationTransform = (userRoles: string[]): string[] => {
  const result: string[] = []
  userRoles.forEach(role => {
    result.push(...RolesRelation[role])
  })
  return result
}

export const matchRoles = <T extends string>(
  roles: string[],
  userRoles: T[],
): boolean => {
  const userRolesMap = {} as Record<T, string>
  const currentUserRoles = rolesRelationTransform(userRoles)

  currentUserRoles.forEach(userRole => {
    userRolesMap[userRole] = userRole
  })

  return roles.some(role => userRolesMap[role])
}
