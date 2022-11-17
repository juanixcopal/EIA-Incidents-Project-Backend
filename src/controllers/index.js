import helpersObject from '../helpers/index.js'

import incidencesServices from '../services/incidences/index.js'
import classroomsServices from '../services/classrooms/index.js'
import securityServices from '../services/security/index.js'
import usersServices from '../services/users/index.js'

import makeIncidencesController from './incidences.controller.js'
import makeClassroomsController from './classrooms.controller.js'
import makeSecurityController from './security.controller.js'
import makeUsersController from './users.controller.js'

const incidencesController = makeIncidencesController({ incidencesServices })
const classroomsController = makeClassroomsController({ classroomsServices })
const securityController = makeSecurityController({ securityServices, helpersObject })
const usersController = makeUsersController({ usersServices, helpersObject })

export { incidencesController, classroomsController, securityController, usersController }
