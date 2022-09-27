import { HttpError } from './http-error'

export class UnprocessableEntity extends HttpError {
  constructor (description: string) {
    super(description)
    this.name = 'UnprocessableEntity'
    this.statusCode = 422
  }
}
