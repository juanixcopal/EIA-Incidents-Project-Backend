import { Router } from 'express'
import routeCallback from './router-callback.js'

import { ValidationMiddleware, ServiceSelectMiddleware } from '../middlewares/index.js'

// import { loginValidate } from './validations/security/index.js'

import { typeClassroomsController } from '../controllers/index.js'

const router = Router()

export default () => {
    router.get('/query', [ServiceSelectMiddleware], (request, response) => {
        const { service } = request.headers
        const moduleKey = service
        routeCallback({ request, response, moduleKey, controller: typeClassroomsController })
    })

    return router
}
