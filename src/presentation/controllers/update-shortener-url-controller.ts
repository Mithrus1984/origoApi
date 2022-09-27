
import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { errorResponse, ok } from '@/presentation/helpers'
import { UpdateShortenerUrlUsecase as IUpdateShortenerUrlUsecase } from '@/domain/protocols'

export namespace UpdateShortenerUrlController {
  export type Request = {
    _id: string
    originalUrl: string
  }
}

export class UpdateShortenerUrlController implements Controller {
  constructor(
    private readonly validator: Validation,
    private readonly updateShortenerUrl: IUpdateShortenerUrlUsecase
  ) { }

  async handle(params: UpdateShortenerUrlController.Request): Promise<HttpResponse> {
    try {
      const { valid, error } = await this.validator.validate(params)
      if (!valid) { return errorResponse({ message: error.message || error, name: 'badRequest' }) }

      const result = await this.updateShortenerUrl.update(params)
      if (result) {
        return ok({ message: 'Update performed successfully!' })
      } else {
        return errorResponse({ name: 'unprocessableEntity', message: 'Update not performed!' })
      }
    } catch (err) {
      return errorResponse({ name: 'serverError', message: err.message, stack: err.stack })
    }
  }
}
