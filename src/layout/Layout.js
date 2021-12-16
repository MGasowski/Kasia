import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../components/Footer";
import Test from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <Router>
      <Test />
      <main style={{ marginTop: 50, overflowX: "hidden" }}>{children}</main>
      <Footer />
    </Router>
  );
};

export default Layout;
