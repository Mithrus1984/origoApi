import { InsertShortenerUrlController } from '@/presentation/controllers'
import { insertShortenerUrlUsecase, insertShortenerUrlValidation } from '@/main/factories'

export const insertShortenerUrlController = () => new InsertShortenerUrlController(insertShortenerUrlValidation, insertShortenerUrlUsecase)