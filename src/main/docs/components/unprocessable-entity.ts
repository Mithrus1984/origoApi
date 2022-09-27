export const unprocessableEntity = {
  description: 'Não foi possível processar',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/error'
      }
    }
  }
}
