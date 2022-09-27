import { Controller } from '@/presentation/protocols'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const request = {
      userAgent: req.headers['user-agent'],
      ...(req.body || {}),
      ...(req.params || {}),
      ...(req.query || {})
    }
    let decoded: any
    if (req.headers.authorization) {
      request.token = req.headers.authorization.split(' ')[1]
      decoded = jwt.decode(request.token)
      if (decoded) { request.userEmail = decoded.email }
    } else {
      request.token = undefined
      request.userEmail = undefined
    }
    const httpResponse = await controller.handle(request)
    return res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
