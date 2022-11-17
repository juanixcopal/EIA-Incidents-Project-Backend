import mysql from 'mysql'
import env from '../../config/env.js'

import makeIncidencesData from './incidences.data.js'
import makeClassroomsData from './classrooms.data.js'
import makeSecurityData from './security.data.js'
import makeUsersData from './users.data.js'

const { MYSQL_CONNECTION_LIMIT, MYSQL_PORT, MYSQL_HOST, MYSQL_USER, MYSQL_PASS, MYSQL_DATABASE, MYSQL_DEBUG } = env

const configurations = {
    connectionLimit: MYSQL_CONNECTION_LIMIT,
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    user: MYSQL_USER,
    password: MYSQL_PASS,
    database: MYSQL_DATABASE,
    debug: MYSQL_DEBUG
}

const poolMysql = mysql.createPool(configurations)

poolMysql.getConnection((err, connection) => {
    connection ? console.log('Successful connection with mysql') : console.log('Connection failed', err)
})

async function makeDbConnection(query, params) {
    return new Promise((resolve, reject) => {
        poolMysql.getConnection((err, connection) => {
            if (err) {
                connection.release()
                reject(err)
            }
            connection.query(query, params, function (err, rows) {
                connection.release()
                if (!err) {
                    resolve(rows)
                } else reject(err)
            })
            connection.on('error', function (err) {
                reject(err)
            })
        })
    })
}

const incidencesData = makeIncidencesData({ makeDbConnection })
const classroomsData = makeClassroomsData({ makeDbConnection })
const securityData = makeSecurityData({ makeDbConnection })
const usersData = makeUsersData({ makeDbConnection })

export { incidencesData, classroomsData, securityData, usersData }
