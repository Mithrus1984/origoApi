import paths from './paths'
import components from './components'
import schemas from './schemas'

require('dotenv').config()

export default {
  openapi: '3.0.0',
  info: {
    title: 'Órigo.com - avaliação API',
    description: 'Documentação da API de avaliação formato OpenAPI',
    version: '1.0.0',
    contact: {
      name: 'Emannuell Anjos',
      email: 'emannuellanjos@gmail.com'
    }
  },
  servers: [
    {
      url: 'http://localhost:' + (process.env.PORT || 3000) + '',
      description: 'Servidor de Desenvolvimento'
    },
    {
      url: 'https://sandbox-api.origo.com',
      description: 'Servidor de Sandbox'
    },
    {
      url: 'https://api.origo.com',
      description: 'Servidor de Produção'
    }],
  tags: [{
    name: 'Health Check',
    description: 'APIs relacionadas a Health Check'
  }, {
    name: 'Encurtador de Links',
    description: 'APIs relacionadas a Encurtador de links'
  }],
  paths,
  schemas,
  components
}
