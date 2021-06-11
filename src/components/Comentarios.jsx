import dosEstrellas from '../img/Dos estrellas.png'
import tresEstrellas from '../img/Tres estrellas.png'
import cuatroEstrellas from '../img/Cuatro estrellas.png'
import cincoEstrellas from '../img/Cinco estrellas.png'

export default function Comentarios(){
    return(
        <>
        <div className="contenedor-comentarios">
            <div className="bloque">
                <h2>Comentarios de los clientes</h2>
                <div className="texto">
                    <img src={cuatroEstrellas} alt="Cuatro estrellas" width="150px" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates in nisi earum impedit iure odio. Deserunt magnam officia tempora sunt voluptatibus aut, doloremque blanditiis totam dolor sit ipsam! Qui, ea.</p>
                </div>
                <div className="texto">
                    <img src={dosEstrellas} alt="Dos estrellas" width="150px" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates in nisi earum impedit iure odio. Deserunt magnam officia tempora sunt voluptatibus aut, doloremque blanditiis totam dolor sit ipsam! Qui, ea.</p>
                </div>
                <div className="texto">
                    <img src={tresEstrellas} alt="Tres estrellas" width="150px" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates in nisi earum impedit iure odio. Deserunt magnam officia tempora sunt voluptatibus aut, doloremque blanditiis totam dolor sit ipsam! Qui, ea.</p>
                </div>
                <div className="texto">
                    <img src={cincoEstrellas} alt="Cinco estrellas" width="150px" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates in nisi earum impedit iure odio. Deserunt magnam officia tempora sunt voluptatibus aut, doloremque blanditiis totam dolor sit ipsam! Qui, ea.</p>
                </div>
            </div>
            <div className="img"></div>
        </div>
        </>
    )
}