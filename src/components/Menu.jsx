import {Link} from 'react-router-dom'
import Logo from '../img/Logo.png'

export default function Menu(){
    return(
        <>
        <nav className="menu">
            <div className="logo">
                <img src={Logo} alt="Logo" className="logo" width="50px" />
            </div>
            <div className="enlaces">
                <Link to="/" className="enlace">Inicio</Link>
                <Link to="/acerca" className="enlace">Acerca de</Link>
                <Link to="/contacto" className="enlace">Contacto</Link>
            </div>
        </nav>
        </>
    )
}