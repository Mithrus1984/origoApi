export const updateShortenerUrlPath = {
  put: {
    security: [{
      BearerAuth: []
    }],
    tags: ['Shortener Url'],
    summary: 'API para criar a link encurtado',
    description: 'Essa rota deve enviar um link completo para gerar um link encurtado',
    parameters: [{
      in: 'path',
      name: '_id',
      description: 'ID do encurtamento',
      required: true,
      schema: {
        type: 'string'
      }
    }],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/updateShortenerUrlRequest'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/updateShortenerUrlResponse'
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
      403: {
        $ref: '#/components/forbidden'
      },
      404: {
        $ref: '#/components/notFound'
      },
      422: {
        $ref: '#/components/unprocessableEntity'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}
