export default ({ securityData, env }) => {
    return async ({ request, helpersObject }) => {
        try {
            const { generateTokenHelper, validatePasswordHelper } = helpersObject
            const { username, password } = request.body
            const { REDIRECT_PATH_AFTER_LOGIN } = env

            const userData = await securityData.validateExistUser([username])

            if (userData.length <= 0) {
                return { status: 401, message: 'Usuario no registrado', result: false }
            }

            const { id_user, password: hash } = userData[0]
            const payload = { id_user, username }

            console.log(payload)

            const validatePassword = await validatePasswordHelper(password, hash)

            if (!validatePassword) {
                return { status: 401, message: 'Usuario o contraseña incorrecto!', result: false }
            }

            const token = await generateTokenHelper(payload)

            return { ...payload, redirect: REDIRECT_PATH_AFTER_LOGIN, result: true, token }
        } catch (e) {
            console.log(e)
            return null
        }
    }
}
