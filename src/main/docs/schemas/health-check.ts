export const healthCheckSchema = {
  type: 'object',
  properties: {
    message: {
      type: 'string'
    },
    status: {
      type: 'string'
    }
  },
  required: ['message', 'status']
}
