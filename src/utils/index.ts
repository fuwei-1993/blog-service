import { ValidationError } from 'class-validator'
import { RolesRelation } from './constant'
import { ExecutionContext, ContextType } from '@nestjs/common'

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
    result.push(...RolesRelation[role.toUpperCase()])
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

export const isGraphql = (context: ExecutionContext): boolean => {
  const contextType = context.getType()

  const graphql: ContextType = 'graphql' as typeof contextType

  return contextType === graphql
}
