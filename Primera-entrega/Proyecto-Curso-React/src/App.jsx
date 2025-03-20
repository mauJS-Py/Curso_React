import React from 'react'
import './App.css'

function App() {
  const handleSubmit = (event) =>{
    event.preventDefault()
    alert('enviado')
  }

  return (
      <div className='App'>
        <h1 className='titulo'>Registro de usuario</h1>
        <form className='formulario' onSubmit={handleSubmit}>
          <div>
            <label htmlhtmlFor="nombre">Nombre</label><br />
            <input className='campos_entrada' type="text" id="nombre" name="ingresoNombre" size="30" placeholder="Ej. Juan" /><br />
          </div>
          <div>
            <label htmlhtmlFor="apellido">Apellido</label><br />
            <input className='campos_entrada' type="text" id="apellido" name="ingresoApellido" size="30" placeholder="Pérez" />
          </div>
          <div>
            <label htmlFor="email">E-mail</label><br />
            <input className='campos_entrada' type="email" id="email" name="ingresoEmail" size="30" placeholder="juanperez@mail.com" />
          </div>
          <div>
            <label htmlFor="telefono">Teléfono</label><br />
            <input className='campos_entrada' type="text" id="telefono" name="ingresoTelefono" size="30" placeholder="15-1111-4444" />
          </div>
          <div>
            <label htmlFor="pass">Contraseña</label><br />
            <input className='campos_entrada' type="password" id="pass" name="ingresoPass" size="30" placeholder="Ingresar contraseña" />
          </div>
          <div>
            <label htmlFor="pass2">Repetir Contraseña</label><br />
            <input className='campos_entrada' type="password" id="pass2" name="ingresoPass2" size="30" placeholder="Confirmar contraseña" />
          </div>
          <div className='alineacion_derecha'>
            <br />
            <input className='boton' type="submit" value="Registrarse" />
          </div>
        </form>
      </div>
  )
}

export default App
