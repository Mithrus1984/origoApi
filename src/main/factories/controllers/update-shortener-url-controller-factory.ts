import { UpdateShortenerUrlController } from '@/presentation/controllers'
import { updateShortenerUrlUsecase, updateShortenerUrlValidation } from '@/main/factories'

export const updateShortenerUrlController = () => new UpdateShortenerUrlController(updateShortenerUrlValidation, updateShortenerUrlUsecase)
