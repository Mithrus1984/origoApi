
import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { errorResponse, ok } from '@/presentation/helpers'
import { InsertShortenerUrlUsecase as IInsertShortenerUrlUsecase } from '@/domain/protocols'

export namespace InsertShortenerUrlController {
  export type Request = {
    originalUrl: string
    shortenerUrl: string
  }
}

export class InsertShortenerUrlController implements Controller {
  constructor(
    private readonly validator: Validation,
    private readonly insertShortenerUrl: IInsertShortenerUrlUsecase
  ) { }

  async handle(params: InsertShortenerUrlController.Request): Promise<HttpResponse> {
    try {
      const { valid, error } = await this.validator.validate(params)
      if (!valid) { return errorResponse({ message: error.message || error, name: 'badRequest' }) }
      params.shortenerUrl = this.generateCode();
      const result = await this.insertShortenerUrl.insert(params)
      if (result) {
        return ok({ message: 'Insert performed successfully!' })
      } else {
        return errorResponse({ name: 'unprocessableEntity', message: 'Insert not performed!' })
      }
    } catch (err) {
      return errorResponse({ name: 'serverError', message: err.message, stack: err.stack })
    }
  }


  generateCode() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
}
