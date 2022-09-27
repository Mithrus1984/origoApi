import { HttpError } from './http-error'

export class ServerError extends HttpError {
  constructor (err: string, stack: string) {
    super('Internal server error ' + err)
    this.name = 'ServerError'
    this.statusCode = 500
    this.stack = stack
  }
}
