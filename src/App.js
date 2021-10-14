import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'

// Layout
import Layout from './layout/Layout'

// pages
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Price from './pages/Price'

const App = () => {
  return ( 
    <Layout>
      <Container fluid className="p-0">
        <Switch> 
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} />
          <Route path='/cennik' component={Price} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Layout>
  )
}

export default App
