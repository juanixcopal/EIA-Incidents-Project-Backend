import { check } from 'express-validator'

export default [
    check('username').not().isEmpty().withMessage('Falta el campo'),
    check('password').not().isEmpty().withMessage('Falta el campo'),
    check('password_repeat').not().isEmpty().withMessage('Falta el campo')
]
