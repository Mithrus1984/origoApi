import { Middleware, HttpResponse } from '@/presentation/protocols'
import { errorResponse, ok } from '@/presentation/helpers'
import { Decrypter } from '@/data/protocols'

export class AuthMiddleware implements Middleware {
  constructor (
    private readonly jwtAdapter: Decrypter
  ) { }

  async handle (request: AuthMiddleware.Request): Promise<HttpResponse> {
    const accessDenied: string = await this.jwtAdapter.decrypt(request.accessToken).catch((err) => err)
    if (accessDenied) return errorResponse({ name: 'unauthorized', message: accessDenied })
    return ok()
  }
}

export namespace AuthMiddleware {
  export type Request = {
    accessToken?: string
  }
}
