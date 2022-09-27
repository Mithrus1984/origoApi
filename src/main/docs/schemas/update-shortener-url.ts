export const updateShortenerUrlSchema = {
  response: {
    type: 'object',
    properties: {
      message: {
        type: 'string'
      }
    },
    required: ['message']
  },
  request: {
    type: 'object',
    properties: {
      shortenerUrl: {
        type: 'boolean'
      }
    },
    required: ['shortenerUrl']
  }
}
