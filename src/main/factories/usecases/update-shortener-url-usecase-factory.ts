import { UpdateShortenerUrlUsecase } from '@/data/usecases'
import { ShortenerUrlMongoRepository } from '@/infra/db'

export const updateShortenerUrlUsecase = new UpdateShortenerUrlUsecase(new ShortenerUrlMongoRepository())