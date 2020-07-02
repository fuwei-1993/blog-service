import { rolesRelationTransform } from '..'

describe('rolesRelationTransform', () => {
  const adminRoles = ['ADMIN']
  const userRoles = ['USER']
  const guestRoles = ['GUEST']

  let adminResult: string[]
  let userResult: string[]
  let guestResult: string[]

  beforeEach(() => {
    adminResult = rolesRelationTransform(adminRoles)
    userResult = rolesRelationTransform(userRoles)
    guestResult = rolesRelationTransform(guestRoles)
  })

  it('should to be qual', () => {
    expect(adminResult).toEqual(['ADMIN', 'USER', 'GUEST'])
  })

  it('should to be qual', () => {
    expect(userResult).toEqual(['USER', 'GUEST'])
  })

  it('should to be qual', () => {
    expect(guestResult).toEqual(['GUEST'])
  })
})
