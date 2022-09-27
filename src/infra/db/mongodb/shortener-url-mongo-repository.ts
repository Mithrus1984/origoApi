import { ObjectId } from 'mongodb'
import { MongoHelper } from '@/infra/db'
import { InsertShortenerUrlRepository, UpdateShortenerUrlRepository } from '@/data/protocols'
import { InsertShortenerUrlUsecase } from '@/domain/protocols'
import moment from 'moment'

export class ShortenerUrlMongoRepository implements InsertShortenerUrlRepository, UpdateShortenerUrlRepository {
  constructor(
    readonly shortenerUrlCollection = MongoHelper.getCollection('shortener_url')
  ) { }

  async insertShortenerUrl(data: InsertShortenerUrlUsecase.Params): Promise<any> {

    let newObject = {
      _id: new ObjectId(),
      originalUrl: data.originalUrl,
      shortenerUrl: data.shortenerUrl,
      expireAt: moment(new Date()).day(7),
      createdAt: new Date()
    }

    const result = await this.shortenerUrlCollection.insertOne(newObject);
    return result.insertedId;
  }

  async updateShortenerUrl(data: UpdateShortenerUrlRepository.Params): Promise<UpdateShortenerUrlRepository.Result> {
    return await this.shortenerUrlCollection.updateOne({
      _id: new ObjectId(data._id)
    }, {
      $set: {
        'shortenerUrl': data.originalUrl
      }
    })
  }
}