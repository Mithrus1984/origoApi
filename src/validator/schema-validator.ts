import { yup } from '@/infra/validators'
import { Validation } from '@/presentation/protocols'

export class SchemaValidator implements Validation {
  constructor (
    private readonly schema: yup.BaseSchema
  ) { }

  async validate (params: Validation.Params): Promise<Validation.Result> {
    try {
      await this.schema.validate(params, { strict: true })
        .catch((error) => {
          throw new Error(error.message || error)
        })

      return { valid: true, error: null }
    } catch (error) {
      return { valid: false, error: error.message || error }
    }
  }
}
