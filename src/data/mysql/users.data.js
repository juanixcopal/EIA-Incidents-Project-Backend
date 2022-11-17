import querys from './querys.js'

export default function makeUsersData({ makeDbConnection }) {
    async function createUser(params) {
        try {
            await makeDbConnection(querys.createUser, params || '')
            return {
                status: 201,
                result: true,
                message: 'Usuario registrado correctamente'
            }
        } catch (e) {
            console.log(e)
            throw { status: 500, message: 'Error al crear el usuario' }
        }
    }

    async function validateExistUser(params) {
        try {
            const db = await makeDbConnection(querys.validateExistUser, params || '')
            return db.length > 0
        } catch (e) {
            console.log(e)
            throw { status: 500, message: 'Error al crear el usuario' }
        }
    }

    return Object.freeze({ createUser, validateExistUser })
}
