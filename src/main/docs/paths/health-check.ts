export const healthCheckPath = {
  get: {
    tags: ['Health Check'],
    summary: 'Endpoint para verificar a saúde do projeto',
    description: 'Essa rota pode ser executada por **qualquer usuário**',
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/healthCheck'
            }
          }
        }
      },
      400: {
        $ref: '#/components/badRequest'
      },
      401: {
        $ref: '#/components/unauthorized'
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}
