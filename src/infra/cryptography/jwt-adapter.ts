import { Decrypter } from '@/data/protocols'

import jwt from 'jsonwebtoken'

export class JwtAdapter implements Decrypter {
  constructor (private readonly secret: string) { }

  async decrypt (ciphertext: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const authHeader: string | undefined = ciphertext
      if (!authHeader) return reject('No token provided')

      const tkPart = authHeader.split(' ')
      if (tkPart.length !== 2) return reject('Token error')

      const [scheme, token] = tkPart
      if (!/^Bearer$/i.test(scheme)) return reject('Token malformatted')

      jwt.verify(token, this.secret, (error) => {
        if (error) { return reject('Token invalid') }

        return resolve('')
      })
    })
  }
}
