import { incidencesData } from '../../data/index.js'

import makeClassroomsService from './classrooms.service.js'
import makeOpenIncidencesService from './open-incidences.service.js'
import makeFloorsService from './floors.service.js'
import makeCreateIncidenceService from './create-Incidence.service.js'
import makeStateIncidencesService from './state-incidences.service.js'

const classroomsService = makeClassroomsService({ incidencesData })
const openIncidencesService = makeOpenIncidencesService({ incidencesData })
const floorsService = makeFloorsService({ incidencesData })
const createIncidenceService = makeCreateIncidenceService({ incidencesData })
const stateIncidencesService = makeStateIncidencesService({ incidencesData })

const incidencesServices = {
    classrooms: classroomsService,
    'open-incidences': openIncidencesService,
    floors: floorsService,
    'create-incidence': createIncidenceService,
    'state-incidences': stateIncidencesService
}

export default incidencesServices
