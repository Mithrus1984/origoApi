import {
  errorSchema,
  healthCheckSchema,
  bearerTokenAuthSchema,
  updateShortenerUrlSchema
} from './schemas/'

export default {
  error: errorSchema,
  healthCheck: healthCheckSchema,
  bearerTokenAuth: bearerTokenAuthSchema,
  updateShortenerUrlResponse: updateShortenerUrlSchema.response,
  updateShortenerUrlRequest: updateShortenerUrlSchema.request
}
