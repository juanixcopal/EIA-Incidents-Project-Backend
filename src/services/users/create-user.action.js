export default ({ usersData }) => {
    return async ({ request, helpersObject }) => {
        try {
            const { username, password, password_repeat } = request.body
            const { encryptPasswordHelper } = helpersObject

            if (password !== password_repeat) return { result: false, message: 'Valide que las contraseñas sean iguales' }

            const reaultValidateExistUser = await usersData.validateExistUser([username])

            if (reaultValidateExistUser) return { result: false, message: 'El usuario ya está registrado en el sistema, verifique que no esté deshabilitado' }

            const hash_pass = await encryptPasswordHelper(password)

            const resultRegisterUserSystem = await usersData.createUser([username, hash_pass])

            return resultRegisterUserSystem
        } catch (e) {
            console.log(e)
            return null
        }
    }
}
