import { Link } from "react-router-dom";
import { default as team } from "../img/team/HG0A6560.jpg";

export default function Landing() {
  return (
    <div>
      <div
        className="page-header"
        style={{ position: "relative", minHeight: "75vh", overflow: "hidden" }}
      >
        <div
          className="oblique  position-absolute top-0 d-md-block h-100 d-none gradient-custom-10 "
          style={{ borderRadius: 0 }}
        >
          <div
            className="img-oblique position-absolute fixed-top ms-auto"
            style={{
              width: "120%",
              height: "100%",
              zIndex: 123,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0 30%",
              backgroundImage: `url(${team})`,
              marginLeft: "-4.1rem !important",
              backgroundColor: "transparent",
            }}
          ></div>
        </div>

        <div className="container  ">
          <div className="row pt-5">
            <div
              className="col-lg-6 col-md-7 d-flex justify-content-center flex-column p-3"
              style={{ minHeight: "70vh" }}
            >
              <h2
                className="lh-1 ls-tight text-primary fw-900 mb-1"
                style={{ fontSize: "3.75rem" }}
              >
                Punkt Pobrań
              </h2>
              <h2
                className="lh-1 ls-tight fw-900   mb-4"
                style={{ fontSize: "3.75rem" }}
              >
                Diagnostyka Laboratoryjna
              </h2>
              {/* <p
                className="mt-1 pe-lg-5 me-lg-5 lead fw-normal text-muted"
                data-builder-edit="text"
                data-builder-name="text3"
              >
                The time is now for it to be okay to be great. People in this
                world shun people for being nice.
              </p> */}
              <div className="buttons">
                {" "}
                <Link
                  to="/oferta"
                  className="btn btn-primary btn-lg mt-4 me-2 ripple-surface"
                  style={{ minWidth: "auto" }}
                >
                  Oferta
                </Link>
                <Link
                  to="/pakiety"
                  className="btn  btn-link btn-lg mt-4 ripple-surface"
                  style={{ minWidth: "auto" }}
                >
                  Pakiety
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
