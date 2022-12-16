import querys from './querys.js'

export default function makeTicketAccessData({ makeDbConnection }) {
    async function getClassrooms(params) {
        try {
            const db = await makeDbConnection(querys.getClassrooms, params || '')
            return db
        } catch (e) {
            console.log(e)
            throw { status: 500, message: 'Error al obtener las aulas' }
        }
    }

    async function getOpenIncidences(params) {
        try {
            const db = await makeDbConnection(querys.getOpenIncidences, params || '')
            return db
        } catch (e) {
            console.log(e)
            throw { status: 500, message: 'Error al obtener las incidencias abiertas' }
        }
    }

    async function getFloors(params) {
        try {
            const db = await makeDbConnection(querys.getFloors, params || '')
            return db
        } catch (e) {
            console.log(e)
            throw { status: 500, message: 'Error al obtener las incidencias abiertas' }
        }
    }

    async function postCreateIncidence(params) {
        try {
            const db = await makeDbConnection(querys.postCreateIncidence, params || '')
            return db
        } catch (e) {
            console.log(e)
            throw { status: 500, message: 'Error al crear la incidencia' }
        }
    }

    async function getStatesIncidences(params) {
        try {
            const db = await makeDbConnection(querys.getStatesIncidences, params || '')
            return db
        } catch (e) {
            console.log(e)
            throw { status: 500, message: 'Error al obtener los estados de las incidencias' }
        }
    }

    async function getIncidences(params) {
        try {
            const db = await makeDbConnection(querys.getIncidences, params || '')
            return db
        } catch (e) {
            console.log(e)
            throw { status: 500, message: 'Error al obtener las incidencias' }
        }
    }

    return Object.freeze({ getClassrooms, getOpenIncidences, getFloors, postCreateIncidence, getStatesIncidences, getIncidences })
}
