import { HttpError } from './http-error'

export class NotFound extends HttpError {
  constructor (err?: string) {
    super('Resource Not Found')
    this.name = 'NotFound'
    if (err) { this.message = err }
    this.statusCode = 404
  }
}
