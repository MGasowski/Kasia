import { default as white } from "../img/brand/logo_black.png";
import { BsFacebook, BsInstagram, BsGoogle } from 'react-icons/bs';

const Footer = () => {
  const year = new Date().getFullYear()
  return (
<footer id="footer-main">
    <div class="footer footer-dark bg-gradient-primary">
      <div class="container">
        <div class="row pt-md ">
          <div class="col-lg-5 mb-5 mb-lg-0">
            <a href="index-2.html">
                {/* <img src={white} alt="Footer logo" style={{height: 70}} /> */}
              <h3 class='text-dark font-weight-bold'>Punkt Pobrań</h3>
              </a>
              <p>Punkt Pobrań<br />
ul. Reymonta 3 <br />
05-120 Legionowo <br />
 tel. 692332349</p>

          </div>
          <div class="col-lg-2 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0">
            <h6 class="heading mb-3">Nawigacja</h6>
            <ul class="list-unstyled">
              <li><a href="pages/account-profile.html">Strona Główna</a></li>
              <li><a href="pages/account-settings.html">Oferta</a></li>
              <li><a href="pages/account-billing.html">Cennik</a></li>
              <li><a href="pages/account-notifications.html">Pakiety</a></li>
            </ul>
          </div>
          <div class="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
            <h6 class="heading mb-3">Media Społecznościowe</h6>
            <ul class="list-unstyled text-small">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Google</a></li>
            </ul>
          </div>
          <div class="col-lg-2 col-sm-4 mb-5 mb-lg-0">
            <h6 class="heading mb-3">Company</h6>
            <ul class="list-unstyled">
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
        </div>
        <div class="row align-items-center justify-content-md-between py-4 mt-4 delimiter-top ">
          <div class="col-md-6  center">
            <div class="copyright text-sm font-weight-bold   text-center text-sm-left text-md-center">
              © 2021 <a href="#" class="font-weight-bold" target="_blank">PunktPobrań.pl</a>. All rights reserved.
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
