import { updateShortenerUrlSchema } from '@/presentation/schema'
import { SchemaValidator } from '@/validator'

export const updateShortenerUrlSchemaValidation = new SchemaValidator(updateShortenerUrlSchema)