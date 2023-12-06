const { check, validationResult } = require("express-validator");

let validatorParams = [
  check("Cedula").isNumeric().isLength({ min: 8, max: 15 }),
  check("Contraseña").isString(),
];

function validator(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}

module.exports = {
  validatorParams,
  validator,
};