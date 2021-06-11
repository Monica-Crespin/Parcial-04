import imagenUno from '../img/alana-harris-JT7V_obVM54-unsplash.jpg'
import imagenDos from '../img/boxed-water-is-better-6dX5TPPM34M-unsplash.jpg'
import imagenTres from '../img/casey-horner-NFB5zdUvb-c-unsplash.jpg'
import imagenCuatro from '../img/dan-freeman-aedMupFjoE0-unsplash.jpg'
import imagenCinco from '../img/federico-di-dio-photography-zfsC3S8dTvI-unsplash.jpg'
import imagenSeis from '../img/jordan-beltran-KQqtFKX6EuM-unsplash.jpg'
import imagenSiete from '../img/pablo-garcia-saldana-K1YRblz-rD0-unsplash.jpg'
import imagenOcho from '../img/siebe-warmoeskerken-0xuP7stoReU-unsplash.jpg'
import imagenNueve from '../img/siebe-warmoeskerken--UhqJ_qKT0k-unsplash.jpg'
import imagenDiez from '../img/zach-castillo-QTvTFgawff4-unsplash.jpg'
import imagenOnce from '../img/yaopey-yong-S0wH7EZ0aeo-unsplash.jpg'
import imagenDoce from '../img/waldemar-brandt-uCg5GglWxIY-unsplash.jpg'

export default function Galeria(){
    return(
        <>
        <div className="contenedor-galeria" id="galeria">
            <div className="item">
                <img src={imagenUno} alt="Imagen uno" />
                <div className="opacidad"></div>
            </div>
            <div className="item">
                <img src={imagenDos} alt="Imagen dos"  />
                <div className="opacidad"></div>
            </div>
            <div className="item">
                <img src={imagenTres} alt="Imagen tres"  />
                <div className="opacidad"></div>
            </div>
            <div className="item">
                <img src={imagenCuatro} alt="Imagen cuatro"  />
                <div className="opacidad"></div>
            </div>
            <div className="item">
                <img src={imagenCinco} alt="Imagen cinco"  />
                <div className="opacidad"></div>
            </div>
            <div className="item">
                <img src={imagenSeis} alt="Imagen seis"  />
                <div className="opacidad"></div>
            </div>
            <div className="item">
                <img src={imagenSiete} alt="Imagen siete"  />
                <div className="opacidad"></div>
            </div>
            <div className="item">
                <img src={imagenOcho} alt="Imagen ocho"  />
                <div className="opacidad"></div>
            </div>
            <div className="item">
                <img src={imagenNueve} alt="Imagen nueve"  />
                <div className="opacidad"></div>
            </div>
            <div className="item">
                <img src={imagenDiez} alt="Imagen diez"  />
                <div className="opacidad"></div>
            </div>
            <div className="item">
                <img src={imagenOnce} alt="Imagen once"  />
                <div className="opacidad"></div>
            </div>
            <div className="item">
                <img src={imagenDoce} alt="Imagen doce"  />
                <div className="opacidad"></div>
            </div>
        </div>
        </>
    )
}