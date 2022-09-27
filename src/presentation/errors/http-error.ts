import { HttpResponse } from '@/presentation/protocols'

export class HttpError extends Error {
  statusCode: number

  response (): HttpResponse {
    return {
      statusCode: this.statusCode,
      body: {
        name: this.name,
        message: this.message
      }
    }
  }
}
