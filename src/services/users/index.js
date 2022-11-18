import { usersData } from '../../data/index.js'

import makeCreateUserAction from './create-user.action.js'

const createUserAction = makeCreateUserAction({ usersData })

const usersServices = {
    'create-user': createUserAction
}

export default usersServices
