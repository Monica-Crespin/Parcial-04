import {useState} from 'react'
import {isEmpty} from 'validator'
import Swal from 'sweetalert2'

export default function Formulario(){
    const [formulario, setFormulario] = useState({
        nombre: '',
        correo: '',
        telefono: '',
        servicios: ''
    })

    const {nombre, correo, telefono, servicios} = formulario;

    const [error, setError] = useState({
        activo: false,
        mensaje: ''
    })

    function capturarDatos(a){
        setFormulario({
            ...formulario,
            [a.target.name]: a.target.value
        })
    }

    function validarDatos(a){
        a.preventDefault();

        if (isEmpty(nombre) || isEmpty(correo) || isEmpty(telefono) || isEmpty(servicios)) {
            setError({
                activo: true,
                mensaje: 'Complete todos los campos'
            })
        } else {
            setError({
                activo: false,
                mensaje: ''
            })
            setFormulario({
                nombre: '',
                correo: '',
                telefono: '',
                servicios: ''
            })
            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-end',
                timer: 300,
                timerProgressBar: true,
                showConfirmButton: true
            })
            Toast.fire({
                icon: 'success',
                title: 'Mensaje enviado'
            })
        }
    }

    return(
        <>
        <form className="formulario" onSubmit={validarDatos}>
            <div className="bloque">
                <div className="item">
                    <label htmlFor="nombre">Nombre</label> <br /> 
                    <input type="text" name="nombre" id="nombre" placeholder="Ingresa tu nombre" value={nombre} onChange={capturarDatos} />
                </div>
                <div className="item">
                    <label htmlFor="correo">Correo electrónico</label> <br /> 
                    <input type="email" name="correo" id="correo" placeholder="Ingresa tu correo electrónico" value={correo} onChange={capturarDatos} />
                </div>
                <div className="item">
                    <label htmlFor="telefono">Teléfono</label> <br /> 
                    <input type="tel" name="telefono" id="telefono" placeholder="Ingresa tu teléfono" value={telefono} onChange={capturarDatos} />
                </div>
                <div className="item">
                    <label htmlFor="servicios">Nuestros servicios</label> <br /> 
                    <select name="servicios" id="servicios" value={servicios} onChange={capturarDatos}>
                        <option value="vacaciones">Vacaciones</option>
                        <option value="visitas">Visitas guiadas</option>
                        <option value="cruceros">Cruceros</option>
                        <option value="hoteles">Hoteles</option>
                        <option value="vuelos">Vuelos</option>
                        <option value="turismo">Turismo</option>
                        <option value="lujo">De lujo</option>
                        <option value="estudiantes">Para estudiantes</option>
                        <option value="familia">Para la familia</option>
                    </select>
                </div>
            </div>
            <p className="error">{error.activo && error.mensaje}</p>
            <button type="submit">Enviar</button>
        </form>
        </>
    )
}