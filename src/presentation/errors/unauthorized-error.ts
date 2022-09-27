import { HttpError } from './http-error'

export class UnauthorizedError extends HttpError {
  constructor (error?: string) {
    super('Unauthorized')
    this.name = 'UnauthorizedError'
    if (error) { this.message = error }
    this.statusCode = 401
  }
}
