class User {
  constructor(documento, nombre, apellido, edad, telefono, contraseña, correo) {
    this.Documento = documento;
    this.Nombre = nombre;
    this.Apellido = apellido;
    this.Edad = edad;
    this.Telefono = telefono;
    this.Contraseña = contraseña;
    this.Correo = correo;
  }
}

module.exports = User;
