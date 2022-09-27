import { Controller, HttpResponse } from '@/presentation/protocols'
import { ok } from '@/presentation/helpers'

export class HealthCheckController implements Controller {
  async handle (): Promise<HttpResponse> {
    return ok({ message: 'Api running', status: 'available' })
  }
}
