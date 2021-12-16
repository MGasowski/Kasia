import { BsFacebook, BsGoogle, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer-main">
      <div className="footer bg-dark">
        <div className="container">
          <div className="row pt-md ">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <Link to="">
                <h3 className="font-weight-bold text-primary">Punkt Pobrań</h3>
              </Link>
              <p>
                Punkt Pobrań
                <br />
                ul. Reymonta 3 <br />
                05-120 Legionowo <br />
                tel. 692332349
              </p>
            </div>
            <div className="col-lg-2 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0 ">
              <h6 className="heading mb-3 text-primary">Nawigacja</h6>
              <ul className="list-unstyled">
                <li>
                  <Link to="/" className="nav-link">
                    Strona Główna
                  </Link>
                </li>
                <li>
                  <Link to="/oferta" className="nav-link">
                    Oferta
                  </Link>
                </li>
                <li>
                  <Link to="/cennik" className="nav-link">
                    Cennik
                  </Link>
                </li>
                <li>
                  <Link to="/pakiety" className="nav-link">
                    Pakiety
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
              <h6 className="heading mb-3 text-primary">
                Media Społecznościowe
              </h6>
              <ul className="list-unstyled text-small">
                <li>
                  <a
                    href="https://www.facebook.com/punktpobrandiaglab"
                    className="nav-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/punkt_pobran_diaglab"
                    className="nav-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://goo.gl/maps/twnsaPX8LbJz47A28"
                    className="nav-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-sm-4 p-0 ">
              <iframe
                title="dojazd"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.5097741557665!2d20.934859615995695!3d52.397436653057156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eb9bfd4bee2b7%3A0xa0404e53b0f3e98c!2sPunkt%20Pobra%C5%84.%20Diagnostyka%20Laboratoryjna.!5e0!3m2!1spl!2spl!4v1635843104758!5m2!1spl!2spl"
                style={{
                  border: 0,
                }}
                allowFullScreen=""
                loading="lazy"
                className="border border-primary rounded"
              ></iframe>
            </div>
          </div>

          <div className="row align-items-center justify-content-md-between py-4 mt-4 delimiter-top ">
            <div className="col-md-6  center">
              <div className="copyright text-sm font-weight-bold   text-center text-sm-left text-md-center">
                © 2021{" "}
                <Link to="/" className="font-weight-bold">
                  PunktPobrań.pl
                </Link>
                . All rights reserved.
              </div>
            </div>
            <div className="col-md-6">
              <ul className="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                <li className="nav-item">
                  <a
                    href="https://www.facebook.com/punktpobrandiaglab"
                    className="nav-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsFacebook />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.instagram.com/punkt_pobran_diaglab"
                    className="nav-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsInstagram />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://goo.gl/maps/twnsaPX8LbJz47A28"
                    className="nav-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGoogle />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
