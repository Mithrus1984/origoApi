import { Middleware } from '@/presentation/protocols'
import { Request, Response, NextFunction } from 'express'

export const adaptMiddleware = (middleware: Middleware) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const request = {
      accessToken: req.headers?.authorization,
      ...(req.headers || {})
    }
    const httpResponse = await middleware.handle(request)
    if (httpResponse.statusCode === 200) {
      return next()
    } else {
      return res
        .status(httpResponse.statusCode)
        .json({
          message: httpResponse.body.message
        })
    }
  }
}
