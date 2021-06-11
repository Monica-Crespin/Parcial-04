import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import './sass/index.scss'

//Components
import Menu from './components/Menu'
import Footer from './components/Footer'

//Páginas
import Home from './pages/Home'
import Acerca from './pages/Acerca de'
import Contacto from './pages/Contacto'
import Error from './pages/Error'

export default function App(){
  return(
    <Router>
      <Menu />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/acerca" exact component={Acerca}>
          <Acerca />
        </Route>
        <Route path="/contacto" exact component={Contacto}>
          <Contacto />
        </Route>
        <Route component={Error}></Route>
      </Switch>
      <Footer />
    </Router>
  )
}