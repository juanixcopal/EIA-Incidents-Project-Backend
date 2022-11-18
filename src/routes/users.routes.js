import { Router } from 'express'
import routeCallback from './router-callback.js'

import { ValidationMiddleware, ServiceSelectMiddleware } from '../middlewares/index.js'

import { createUserValidate } from './validations/users/index.js'

import { usersController } from '../controllers/index.js'

const router = Router()

export default () => {
    // router.get('/query', [ServiceSelectMiddleware], (request, response) => {
    //     const { service } = request.headers
    //     const moduleKey = service
    //     routeCallback({ request, response, moduleKey, controller: usersController })
    // })

    router.post('/manager', [createUserValidate, ValidationMiddleware], (request, response) => {
        const moduleKey = `create-user`
        routeCallback({ request, response, moduleKey, controller: usersController })
    })

    return router
}
