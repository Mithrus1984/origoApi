import { UpdateShortenerUrlUsecase as IUpdateShortenerUrlUsecase } from '@/domain/protocols'
import { UpdateShortenerUrlRepository } from '@/data/protocols'

export class UpdateShortenerUrlUsecase implements IUpdateShortenerUrlUsecase {
  constructor(
    private readonly vehicleSellRequestsRepository: UpdateShortenerUrlRepository
  ) { }

  async update(data: IUpdateShortenerUrlUsecase.Params): Promise<IUpdateShortenerUrlUsecase.Result> {
    const result = await this.vehicleSellRequestsRepository.updateShortenerUrl(data)
    if (result.modifiedCount) { return true }
    return false
  }
}