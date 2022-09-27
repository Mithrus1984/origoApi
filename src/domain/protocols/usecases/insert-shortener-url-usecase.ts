export interface InsertShortenerUrlUsecase {
  insert: (params: InsertShortenerUrlUsecase.Params) => Promise<InsertShortenerUrlUsecase.Result>
}

export namespace InsertShortenerUrlUsecase {
  export type Params = {
    originalUrl: string
    shortenerUrl: string
  }
  export type Result = boolean
}