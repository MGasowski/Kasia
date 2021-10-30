import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'

// Layout
import Layout from './layout/Layout'

// pages
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Offer from './pages/Offer'
import Packages from './pages/Packages'
import Price from './pages/Price'

const App = () => {
  return ( 
    <Layout>
      <Container fluid className="p-0 pt-4">
        <Switch> 
          <Route path='/' component={Home} exact />
          <Route path='/cennik' component={Price} />          
          <Route path='/oferta' component={Offer} />
          <Route path='/pakiety' component={Packages} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Layout>
  )
}

export default App
