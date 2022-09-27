export interface UpdateShortenerUrlUsecase {
  update: (params: UpdateShortenerUrlUsecase.Params) => Promise<UpdateShortenerUrlUsecase.Result>
}

export namespace UpdateShortenerUrlUsecase {
  export type Params = {
    _id: string
    originalUrl: string
  }
  export type Result = boolean
}
