import Facebook from '../img/Facebook.png'
import Pinterest from '../img/Pinterest.png'
import Instagram from '../img/Instagram.png'
import Twitter from '../img/Twitter.png'

import {useState} from 'react'
import {isEmpty} from 'validator'
import Swal from 'sweetalert2'

export default function Footer(){
    const [noticias, setNoticias] = useState({
        correo: ''
    })

    const {correo} = noticias;

    const [error, setError] = useState({
        activo: false,
        mensaje: ''
    })

    function capturarDatos(e){
        setNoticias({
            ...noticias,
            [e.target.name]: e.target.value
        })
    }

    function validarDatos(e){
        e.preventDefault();

        if (isEmpty(correo)) {
            setError({
                activo: true,
                mensaje: 'Ingrese su correo'
            })
        } else {
            setError({
                activo: false,
                mensaje: ''
            })
            setNoticias({
                correo: ''
            })
            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true
            })
            Toast.fire({
                icon: 'success',
                title: 'Mensaje enviado'
            })
        }
    }

    return(
        <>
        <footer>
            <div className="bloque-noticias">
                <h5>Suscríbete para noticias semanales</h5>
                <form onSubmit={validarDatos}>
                    <input type="email" name="correo" id="correo" placeholder="Ingresa tu correo" value={correo} onChange={capturarDatos} />
                    <p className="error">{error.activo && error.mensaje}</p>
                    <button type="submit">Enviar</button>
                </form>
            </div>
            <div className="bloque-iconos">
                <h5>Encuéntranos en</h5>
                <div className="iconos">
                    <img src={Facebook} alt="Facebook" width="50px" />
                    <img src={Pinterest} alt="Pinterest" width="50px" />
                    <img src={Instagram} alt="Instagram" width="50px" />
                    <img src={Twitter} alt="Twitter" width="50px" />
                </div>
            </div>
        </footer>
        </>
    )
}