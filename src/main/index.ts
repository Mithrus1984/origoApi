import 'module-alias/register'
import env from '@/main/config/env'
import server from '@/main/server'

server().then((app) => {
  app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
})
