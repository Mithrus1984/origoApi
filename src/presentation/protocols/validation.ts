export interface Validation {
  validate: (params: Validation.Params) => Promise<Validation.Result>
}

export namespace Validation {
  export type Params = any
  export type Result = { valid: boolean, error: any }
}
