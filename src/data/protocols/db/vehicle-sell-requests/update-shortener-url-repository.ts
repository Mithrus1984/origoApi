import { UpdateShortenerUrlUsecase } from '@/domain/protocols'
import { UpdateResult } from 'mongodb'

export interface UpdateShortenerUrlRepository {
  updateShortenerUrl: (data: UpdateShortenerUrlRepository.Params) => Promise<UpdateShortenerUrlRepository.Result>
}

export namespace UpdateShortenerUrlRepository {
  export type Params = UpdateShortenerUrlUsecase.Params
  export type Result = UpdateResult
}
