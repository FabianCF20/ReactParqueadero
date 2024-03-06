import React from 'react';

function RecordForm() {
  return (
    <div className="container">
      <h2>Registro de Usuario</h2>
      <form action="DatosU.php" method="post">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>
        <div className="form-group">
          <label htmlFor="Cedula">Cedula:</label>
          <input type="text" id="Cedula" name="Cedula" required />
        </div>
        <div className="form-group">
          <label htmlFor="Celular">Celular:</label>
          <input type="text" id="Celular" name="Celular" required />
        </div>
        <div className="form-group">
          <label htmlFor="Placa">Placa de vehiculo:</label>
          <input type="text" id="Placa" name="Placa" required />
        </div>
        <div className="form-group">
          <label htmlFor="contraseña">Contraseña:</label>
          <input type="password" id="contraseña" name="contraseña" required />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default RecordForm;