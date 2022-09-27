import { bearerTokenAuthSchema } from './schemas/'
import {
  badRequest,
  serverError,
  unauthorized,
  notFound,
  forbidden,
  unprocessableEntity
} from './components/'

export default {
  securitySchemes: {
    BearerAuth: bearerTokenAuthSchema
  },
  badRequest,
  serverError,
  unauthorized,
  notFound,
  forbidden,
  unprocessableEntity
}
