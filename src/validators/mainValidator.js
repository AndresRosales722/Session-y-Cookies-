const {check} = require('express-validator')


module.exports = [
    check('name')
    .notEmpty()
    .withMessage('campo requirido'),

    check('color')
    .notEmpty()
    .withMessage('campo requirido'),

    check('email')
    .notEmpty()
    .withMessage('campo requirido')
    .isEmail()
    .withMessage('ingrese un email valido'),


    check('age')
    .isNumeric()
    .withMessage('solo numeros'),
]