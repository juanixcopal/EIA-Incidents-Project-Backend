import env from '../../config/env.js'

import { securityData } from '../../data/index.js'

import makeLoginAction from './login.action.js'

const loginAction = makeLoginAction({ securityData, env })

const securityServices = {
    login: loginAction
}

export default securityServices
