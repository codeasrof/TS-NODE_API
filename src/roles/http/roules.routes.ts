import { RolesRepository } from '@roles/repositories/RolesRepository'
import { Router } from 'express'
const rolesRouter = Router()
const rolesRepository = new RolesRepository()

rolesRouter.post('/', (request, response) => {
  const { name } = request.body
  const role = rolesRepository.create({ name })
  return response.status(201).json({
    body: role,
  })
})

rolesRouter.get('/', (request, response) => {
  const roles = rolesRepository.findAll()

  try {
    return response.status(200).json({ body: roles })
  } catch (error) {
    console.log(`Something went wrong: ${error}`)
    return response.status(400).json({ message: 'Bad Request' })
  }
})

export { rolesRouter }
