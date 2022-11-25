import { typeClassroomsData } from '../../data/index.js'

import makeTypeClassroomsService from './typeClassrooms.service.js'

const typeClassroomsService = makeTypeClassroomsService({ typeClassroomsData })

const typeClassroomsServices = {
    typeClassrooms: typeClassroomsService
}

export default typeClassroomsServices
