import { Controller } from '@/presentation/protocols'
import { HealthCheckController } from '@/presentation/controllers'

export const healthCheckController = (): Controller => new HealthCheckController()
