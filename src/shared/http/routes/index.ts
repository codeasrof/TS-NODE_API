// import { AppError } from '@shared/errors/AppError'
import { Router, Request, Response } from 'express'
import { rolesRouter } from '@roles/http/roules.routes'

const router = Router()

router.get('/', (request: Request, response: Response) => {
  // throw new Error('Access Denied')
  try {
    response.status(200).json({
      body: {
        message: 'Working',
      },
    })
  } catch (error) {
    response.status(400).json({
      body: {
        message: 'Something went wrong',
      },
    })
  }
})
router.use('/roles', rolesRouter)

export { router }
