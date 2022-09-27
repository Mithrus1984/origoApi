import { InsertShortenerUrlUsecase } from '@/data/usecases'
import { ShortenerUrlMongoRepository } from '@/infra/db'

export const insertShortenerUrlUsecase = new InsertShortenerUrlUsecase(new ShortenerUrlMongoRepository())