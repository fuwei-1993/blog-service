import { matchRoles } from '..'

describe('matchRoles', () => {
  let userResult: boolean
  let guestResult: boolean
  let totalResult: boolean

  const Roles = ['ADMIN']

  beforeEach(() => {
    userResult = matchRoles(['USER'], Roles)
    guestResult = matchRoles(['GUEST'], Roles)
    totalResult = matchRoles(['GUEST', 'USER'], Roles)
  })

  it('should to be equal', () => {
    expect(userResult).toEqual(true)
  })

  it('should to be equal', () => {
    expect(guestResult).toEqual(true)
  })

  it('should to be equal', () => {
    expect(totalResult).toEqual(true)
  })
})
