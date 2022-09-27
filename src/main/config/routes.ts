import { Express, Router } from 'express'
import { readdirSync } from 'fs'
import { join } from 'path'
import { adaptRoute } from '@/main/adapters'
import { healthCheckController } from '@/main/factories/controllers'

export default (app: Express): void => {
  const router = Router()
  app.get('/health-check', adaptRoute(healthCheckController()))
  app.use('/origo/v1', router)
  readdirSync(join(__dirname, '../routes')).map(async file => {
    if (!file.endsWith('.map')) {
      (await import(`../routes/${file}`)).default(router)
    }
  })
}
