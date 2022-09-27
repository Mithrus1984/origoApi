import { insertShortenerUrlSchema } from '@/presentation/schema'
import { SchemaValidator } from '@/validator'

export const insertShortenerUrlSchemaValidation = new SchemaValidator(insertShortenerUrlSchema)