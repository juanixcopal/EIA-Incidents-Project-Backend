import querys from './querys.js'

export default function makeTypeClassroomsData({ makeDbConnection }) {
    async function getTypeClassrooms(params) {
        try {
            const db = await makeDbConnection(querys.getTypeClassrooms, params || '')
            return db
        } catch (e) {
            console.log(e)
            throw { status: 500, message: 'Error al obtener los tipos de aulas' }
        }
    }

    return Object.freeze({ getTypeClassrooms })
}
