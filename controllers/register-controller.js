  const bcrypt = require('bcryptjs');
const userRepository = require('../repositories/userRepository');


let register = (req, res) => {
  const { nombre, email, contrasena } = req.body;

  let valid = userRepository.addUser(nombre, email, contrasena);

  if (!valid) {
    return res.status(201).send(
      { status: 'ok register' }
    );
  } else {
    return res.status(404).send(
      { status: 'bad register' }
    );
  }
}


let verPerfilUsuario = (req, res) => {
  const usuarioId = req.query.id; 
  userRepository.obtenerInformacionUsuario(usuarioId, (error, usuario) => {
    if (error) { 
      res.status(500).json({
        message: "Error al obtener la información del usuario",
      });
    } else if (!usuario) {
      console.log(usuarioId);
      res.status(404).json({
        message: "Usuario no encontrado",
      });
    } else {
      const { email,contrasena } = usuario; 
      res.status(200).json({
        message: "Información de perfil obtenida con éxito",
        usuario: {email, contrasena}, 
      });
    }
  });
};

module.exports = {
  register,
  verPerfilUsuario
}
