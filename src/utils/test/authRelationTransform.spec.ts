import { authRelationTransform } from '..'

describe('authRelationTransform', () => {
  const adminRoles = ['ADMIN']
  const userRoles = ['USER']
  const guestRoles = ['GUEST']

  let adminResult: string[]
  let userResult: string[]
  let guestResult: string[]

  beforeEach(() => {
    adminResult = authRelationTransform(adminRoles)
    userResult = authRelationTransform(userRoles)
    guestResult = authRelationTransform(guestRoles)
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
