import { matchRoles } from '..'

describe('matchRoles', () => {
  let userResult: boolean
  let guestResult: boolean
  let totalResult: boolean

  const userRoles = ['admin']

  beforeEach(() => {
    userResult = matchRoles(['USER'], userRoles)
    guestResult = matchRoles(['GUEST'], userRoles)
    totalResult = matchRoles(['GUEST', 'USER'], userRoles)
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
