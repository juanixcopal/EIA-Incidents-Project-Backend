import { Router } from 'express'
import routeCallback from './router-callback.js'

import { ValidationMiddleware, ServiceSelectMiddleware } from '../middlewares/index.js'

import { classroomsController } from '../controllers/index.js'

const router = Router()

export default () => {
    router.post('/manager', [ValidationMiddleware], (request, response) => {
        const moduleKey = `create-classroom`
        routeCallback({ request, response, moduleKey, controller: classroomsController })
    })

    return router
}
