import { HttpError } from './http-error'

export class AccessDeniedError extends HttpError {
  constructor (err?: string) {
    super('Access denied')
    this.name = 'AccessDeniedError'
    if (err) { this.message = err }
    this.statusCode = 403
  }
}
