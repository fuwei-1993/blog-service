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
