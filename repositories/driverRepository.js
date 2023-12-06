const sql = require("mssql");

const config = {
  server: "MyBussDB.mssql.somee.com",
  user: "MyBuss_SQLLogin_1",
  password: "8wopep96lt",
  database: "MyBussDB",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

class driverRepository {
  //metodo para obtener un token de usuario en caso de que exista
  static auth = async (cedula, contraseña, callback) => {
    try {
      await sql.connect(config);
      const request = new sql.Request();
      const query = `EXEC usp_iniciarSesionConductor @Cedula = '${cedula}', @contraseña = '${contraseña}'`;
      const result = await request.query(query);
      callback(result.recordset);
    } catch (err) {
      console.log(err);
      callback(null, err);
    } finally {
      sql.close();
    }
  };
}

module.exports = driverRepository;
