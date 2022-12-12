const querys = {
    getClassrooms: `
        SELECT tb_aula.id_aula, tb_aula.aula, tb_tipo_aula.tipo_aula, tb_planta.planta, tb_planta.id_planta 
        FROM tb_aula 
        INNER JOIN tb_tipo_aula 
        ON tb_aula.id_tipo_aula = tb_tipo_aula.id_tipo_aula 
        INNER JOIN tb_planta 
        ON tb_aula.id_planta = tb_planta.id_planta
    `,
    getOpenIncidences: `
        SELECT tb_reporte.id_reporte, tb_estado_incidencia.id_estado_incidencia, tb_planta.id_planta, tb_aula.id_aula, tb_reporte.titulo, tb_reporte.descripcion, tb_estado_incidencia.estado,  tb_aula.aula,  tb_planta.planta, tb_tipo_aula.tipo_aula
        FROM tb_reporte
        INNER JOIN tb_estado_incidencia
        ON tb_reporte.id_estado_incidencia = tb_estado_incidencia.id_estado_incidencia
        INNER JOIN tb_aula
        ON tb_reporte.id_aula = tb_aula.id_aula
        INNER JOIN tb_planta
        ON tb_aula.id_planta = tb_planta.id_planta
        INNER JOIN tb_tipo_aula
        ON tb_aula.id_tipo_aula = tb_tipo_aula.id_tipo_aula
    `,
    getFloors: `
        SELECT * FROM tb_planta
    `,
    postCreateIncidence: `
        INSERT INTO tb_reporte (titulo, descripcion, id_estado_incidencia, id_aula) VALUES (?,?,?,?)
    `,
    postCreateClassroom: `
        INSERT INTO tb_aula (aula, id_planta, id_tipo_aula) VALUES (?,?,?)
    `,
    postTryLogin: `
        
    `,
    validateUserCredentials: `
        SELECT * FROM 
    `,
    createUser: `
        INSERT INTO tb_user (username, password)
        VALUES (?, ?)
    `,
    validateExistUser: `
        SELECT id_user, username, password
        FROM tb_user
        WHERE username = ?
    `,
    getTypeClassrooms: `
        SELECT * FROM tb_tipo_aula
    `
}

export default querys
