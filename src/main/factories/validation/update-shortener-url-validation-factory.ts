import { updateShortenerUrlSchemaValidation } from '@/main/factories'
import { UpdateShortenerUrlValidation } from '@/presentation/validation'

export const updateShortenerUrlValidation = new UpdateShortenerUrlValidation(updateShortenerUrlSchemaValidation)