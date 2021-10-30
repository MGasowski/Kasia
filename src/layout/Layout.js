// router
import { BrowserRouter as Router} from 'react-router-dom'

// components
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Test from '../components/Test'
import Features from '../components/Features'
import Shop from '../components/Shop'


const Layout = ({ children }) => {
  return (
    <Router>
      <Test />
      <main style={{marginTop: 50, overflowX: 'hidden'}}>{children}</main>
      <Footer />
    </Router>
  )
}

export default Layout
