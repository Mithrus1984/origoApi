import { HttpError } from './http-error'

export class InvalidParamError extends HttpError {
  constructor (err: string) {
    super(`Invalid param: ${err}`)
    this.name = 'InvalidParamError'
    this.statusCode = 400
  }
}
