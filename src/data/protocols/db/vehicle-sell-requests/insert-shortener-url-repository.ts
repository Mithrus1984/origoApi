import { InsertShortenerUrlUsecase } from '@/domain/protocols'

export interface InsertShortenerUrlRepository {
  insertShortenerUrl: (data: InsertShortenerUrlRepository.Params) => Promise<InsertShortenerUrlRepository.Result>
}

export namespace InsertShortenerUrlRepository {
  export type Params = InsertShortenerUrlUsecase.Params
  export type Result = any
}
