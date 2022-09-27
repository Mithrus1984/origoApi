import { Router } from 'express'
import { auth } from '@/main/middlewares'
import { adaptRoute } from '@/main/adapters'
import { updateShortenerUrlController, insertShortenerUrlController } from '@/main/factories/controllers'

export default (router: Router): void => {
  //router.get('/encurtador-link', /* auth, */ adaptRoute(getShortenerUrlController()))
  router.put('/encurtador-link', /* auth, */ adaptRoute(updateShortenerUrlController()))
  router.post('/encurtador-link', /* auth, */ adaptRoute(insertShortenerUrlController()))
  //router.delete('/encurtador-link',/* auth, */ adaptRoute(deleteShortenerUrlController()))
}


