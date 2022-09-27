import { Validation } from '@/presentation/protocols'

export class UpdateShortenerUrlValidation implements Validation {
  constructor(
    private readonly validator: Validation
  ) { }

  async validate(params: Validation.Params): Promise<Validation.Result> {
    return await this.validator.validate(params)
  }
}
