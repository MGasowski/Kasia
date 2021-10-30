import { default as white } from "../img/brand/logo_black.png";
import { BsFacebook, BsInstagram, BsGoogle } from 'react-icons/bs';
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear()
  return (
<footer id="footer-main">
    <div class="footer bg-dark">
      <div class="container">
        <div class="row pt-md ">
          <div class="col-lg-5 mb-5 mb-lg-0">
            <Link to="" >
              <h3 class='font-weight-bold text-primary'>Punkt Pobrań</h3>
              </Link>
              <p>Punkt Pobrań<br />
ul. Reymonta 3 <br />
05-120 Legionowo <br />
 tel. 692332349</p>

          </div>
          <div class="col-lg-2 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0 ">
            <h6 class="heading mb-3 text-primary">Nawigacja</h6>
            <ul class="list-unstyled">
              <li><a href="" className="nav-link">Strona Główna</a></li>
              <li><a href="" className="nav-link">Oferta</a></li>
              <li><a href="" className="nav-link">Cennik</a></li>
              <li><a href="" className="nav-link">Pakiety</a></li>
            </ul>
          </div>
          <div class="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
            <h6 class="heading mb-3 text-primary">Media Społecznościowe</h6>
            <ul class="list-unstyled text-small">
              <li><a href="#" className="nav-link">Facebook</a></li>
              <li><a href="#" className="nav-link">Instagram</a></li>
              <li><a href="#" className="nav-link">Google</a></li>
            </ul>
          </div>
          <div class="col-lg-2 col-sm-4 mb-5 mb-lg-0">
            <h6 class="heading mb-3 text-primary">Company</h6>
            <ul class="list-unstyled">
              <li><a href="#" className="nav-link">Terms</a></li>
              <li><a href="#" className="nav-link">Privacy</a></li>
              <li><a href="#" className="nav-link">Support</a></li>
            </ul>
          </div>
        </div>
        <div class="row align-items-center justify-content-md-between py-4 mt-4 delimiter-top ">
          <div class="col-md-6  center">
            <div class="copyright text-sm font-weight-bold   text-center text-sm-left text-md-center">
              © 2021 <Link to="#" class="font-weight-bold" >PunktPobrań.pl</Link>. All rights reserved.
            </div>
          </div>
          <div class="col-md-6">
            <ul class="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
              <li class="nav-item">
                <a class="nav-link" href="https://dribbble.com/webpixels" target="_blank">
                  <BsFacebook />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.instagram.com/webpixelsofficial" target="_blank">
                  <BsInstagram />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://github.com/webpixels" target="_blank">
                  <BsGoogle />
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
