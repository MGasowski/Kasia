import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "../css/autohide.css";
import { default as dark } from "../img/brand/logo.png";
import { useLocation } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import MobileMenu from "./MobileMenu";

const autohide = () => {
  const el_autohide = document.querySelector(".autohide");

  if (el_autohide) {
    var last_scroll_top = 0;
    window.addEventListener("scroll", function () {
      let scroll_top = window.scrollY;
      if (scroll_top < last_scroll_top) {
        el_autohide.classList.remove("scrolled-down");
        el_autohide.classList.add("scrolled-up");
      } else {
        el_autohide.classList.remove("scrolled-up");
        el_autohide.classList.add("scrolled-down");
      }
      last_scroll_top = scroll_top;
    });
    // window.addEventListener
  }
};

export default function Navbar() {
  const location = useLocation();

  useEffect(() => {
    autohide();
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [state, setState] = useState(location.pathname);
  const [title, setTitle] = useState("Strona Główna");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((current) => !current);
  return (
    <>
      <Helmet>
        <title>Punkt Pobrań - {title}</title>{" "}
      </Helmet>
      <nav
        className="autohide navbar navbar-main  navbar-expand-lg border-bottom shadow-lg navbar-transparent navbar-light bg-white position-fixed top-0 d-flex flex-nowrap"
        style={{ width: "100%", zIndex: 124 }}
        id="navbar-main"
      >
        <div className="container px-lg-0">
          <Link
            to="/"
            className="navbar-brand mr-lg-5 "
            onClick={() => setState("/")}
          >
            <img
              alt="placeholder"
              src={dark}
              id="navbar-logo"
              style={{
                filter: "grayscale(100%)",
                height: 50,
                marginRight: 10,
              }}
            />
            <span className="text-primary font-weight-bold">Punkt Pobrań</span>
          </Link>

          <div className="collapse navbar-collapse" id="navbar-main-collapse">
            <ul className="navbar-nav align-items-lg-center">
              <li className="nav-item ">
                <Link
                  to="/"
                  className={`nav-link ${state === "/" ? "active" : ""}`}
                  onClick={() => {
                    setState("/");
                    setTitle("Strona Główna");
                  }}
                >
                  Strona Główna
                </Link>
              </li>

              <li className="nav-item ">
                <Link
                  to="/pakiety"
                  className={`nav-link ${state === "/pakiety" ? "active" : ""}`}
                  onClick={() => {
                    setState("/pakiety");
                    setTitle("Pakiety");
                  }}
                >
                  Pakiety
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="/oferta"
                  className={`nav-link ${state === "/oferta" ? "active" : ""}`}
                  onClick={() => {
                    setState("/oferta");
                    setTitle("Oferta");
                  }}
                >
                  Oferta
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="/kontakt"
                  className={`nav-link ${state === "/kontakt" ? "active" : ""}`}
                  onClick={() => {
                    setState("/kontakt");
                    setTitle("Kontakt");
                  }}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
            <ul className="nav align-items-lg-center text-primary">
              <li class="nav-item ">
                <a
                  href="https://www.facebook.com/punktpobrandiaglab"
                  className="nav-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFacebook size={"1.5rem"} />
                </a>
              </li>
              <li className="nav-item ">
                <a
                  href="https://www.instagram.com/punkt_pobran_diaglab"
                  className="nav-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram size={"1.5rem"} />
                </a>
              </li>
            </ul>
            <ul className="navbar-nav align-items-lg-center ml-lg-auto">
              <li className="nav-item">
                <Link
                  to="/cennik"
                  className={`nav-link ${state === "/cennik" ? "active" : ""}`}
                  onClick={() => {
                    setState("/cennik");
                    setTitle("Cennik");
                  }}
                >
                  <span className="btn btn-primary rounded-pill">Cennik</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <button
          class="navbar-toggler toggler-example mr-4"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="dark-blue-text">
            <HiMenu size={"1.6rem"} onClick={handleOpen} />
          </span>
        </button> */}
        <MobileMenu />
      </nav>
      <div
        className={`${
          open ? "d-flex" : "d-none"
        }  container bg-primary position-fixed left-0 top-0`}
        style={{ height: "100vh", zIndex: 123, marginTop: 60 }}
      >
        <ul className="navbar-nav align-items-lg-center">
          <li className="nav-item ">
            <Link
              to="/"
              className={`nav-link ${state === "/" ? "active" : ""}`}
              onClick={() => {
                setState("/");
                setTitle("Strona Główna");
              }}
            >
              Strona Główna
            </Link>
          </li>

          <li className="nav-item ">
            <Link
              to="/pakiety"
              className={`nav-link ${state === "/pakiety" ? "active" : ""}`}
              onClick={() => {
                setState("/pakiety");
                setTitle("Pakiety");
              }}
            >
              Pakiety
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              to="/oferta"
              className={`nav-link ${state === "/oferta" ? "active" : ""}`}
              onClick={() => {
                setState("/oferta");
                setTitle("Oferta");
              }}
            >
              Oferta
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              to="/kontakt"
              className={`nav-link ${state === "/kontakt" ? "active" : ""}`}
              onClick={() => {
                setState("/kontakt");
                setTitle("Kontakt");
              }}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
