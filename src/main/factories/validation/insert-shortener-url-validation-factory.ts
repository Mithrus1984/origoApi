import { insertShortenerUrlSchemaValidation } from '@/main/factories'
import { InsertShortenerUrlValidation } from '@/presentation/validation'

export const insertShortenerUrlValidation = new InsertShortenerUrlValidation(insertShortenerUrlSchemaValidation)