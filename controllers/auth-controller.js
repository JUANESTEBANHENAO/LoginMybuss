const signingKey = require("../config/keys");
const generateToken = require("../helpers/generator-token");
const User = require("../models/user");
const userRepository = require("../repositories/userRepository");
const driverRepository = require("../repositories/driverRepository");
let auth = (req, res) => {
  let documento = req.body.Documento;
  let contraseña = req.body.Contraseña;
  console.log(documento);
  console.log(contraseña);

  userRepository.login(documento, contraseña, (result, err) => {
    if (err) {
      res.status(500).json({ message: "Error en el servidor", err });
    } else {
      if (result.length > 0) {
        let token = generateToken(
          new User(result[0]),
          signingKey.SIGNING_KEY_TOKEN,
          new Date().getTime() + 100 * 60 * 1000
        );

        res.status(200).json({ message: "Inicio de sesión exitoso", token });
      } else {
        res.status(401).json({ message: "Usuario o contraseña incorrectos" });
      }
    }
  });
};

let authDriver = (req, res) => {
  let Cedula = req.body.Cedula;
  let contraseña = req.body.Contraseña;

  driverRepository.auth(Cedula, contraseña, (result, err) => {
    if (err) {
      res.status(500).json({ message: "Error en el servidor", err });
    } else {
      if (result.length > 0) {
        let token = generateToken(
          new User(result[0]),
          signingKey.SIGNING_KEY_TOKEN,
          new Date().getTime() + 100 * 60 * 1000
        );

        res.status(200).json({ message: "Inicio de sesión exitoso", token });
      } else {
        res.status(401).json({ message: "Usuario o contraseña incorrectos" });
      }
    }
  });
};

module.exports = {
  auth,
  authDriver,
};
