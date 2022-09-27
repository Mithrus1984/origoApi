import env from '@/main/config/env'
import { MongoHelper } from '@/infra/db'
import { Express } from 'express'

let app: Express

export default async () => {
  await MongoHelper.connect(env.mongoUrl)
    .then(async () => {
      const { setupApp } = await import('./config/app')
      app = await setupApp()
      console.log('mongo conected');
    })
    .catch((err) => {
      console.error(err)
      throw new Error(err)
    })
  return app
}
