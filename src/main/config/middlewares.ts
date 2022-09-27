import { bodyParser, cors, contentType } from '@/main/middlewares'

import { Express } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
  app.use(contentType)
  app.use(morgan('dev'))
  app.use(helmet())
}
