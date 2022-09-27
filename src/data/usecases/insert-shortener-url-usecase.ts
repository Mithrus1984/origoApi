import { InsertShortenerUrlUsecase as IInsertShortenerUrlUsecase } from '@/domain/protocols'
import { InsertShortenerUrlRepository } from '@/data/protocols'

export class InsertShortenerUrlUsecase implements IInsertShortenerUrlUsecase {
  constructor(
    private readonly vehicleSellRequestsRepository: InsertShortenerUrlRepository
  ) { }

  async insert(data: IInsertShortenerUrlUsecase.Params): Promise<IInsertShortenerUrlUsecase.Result> {
    const result = await this.vehicleSellRequestsRepository.insertShortenerUrl(data)
    if (result.modifiedCount) { return true }
    return false
  }
}