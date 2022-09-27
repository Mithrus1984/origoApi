import { HttpResponse } from '@/presentation/protocols'
import {
  ServerError,
  InvalidParamError,
  UnauthorizedError,
  AccessDeniedError,
  UnprocessableEntity,
  NotFound
} from '@/presentation/errors'

export const ok = (data?: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null
})

export const created = (data?: any): HttpResponse => ({
  statusCode: 201,
  body: data
})

const badRequest = (err: Error): HttpResponse => new InvalidParamError(err.message).response()
const forbidden = (err: Error): HttpResponse => new AccessDeniedError(err.message).response()
const notFound = (err?: Error): HttpResponse => new NotFound(err.message).response()
const unprocessableEntity = (err: Error): HttpResponse => new UnprocessableEntity(err.message).response()
const unauthorized = (err: Error): HttpResponse => new UnauthorizedError(err.message).response()
const serverError = (err: Error): HttpResponse => new ServerError(err.message, err.stack).response()
export const errorResponse = (err: {
  name: 'badRequest' | 'forbidden' | 'notFound' | 'unprocessableEntity' | 'unauthorized' | 'serverError'
  message: string
  stack?: string
}): HttpResponse => {
  return {
    badRequest: () => badRequest(err),
    unauthorized: () => unauthorized(err),
    forbidden: () => forbidden(err),
    notFound: () => notFound(err),
    unprocessableEntity: () => unprocessableEntity(err),
    serverError: () => serverError(err)
  }[err.name]()
}
