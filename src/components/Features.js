import { BsFillFileEarmarkMedicalFill } from "react-icons/bs";
import { FaAmbulance, FaUserNurse } from "react-icons/fa";
import { Bounce, Slide } from "react-reveal";

export default function Features() {
  return (
    <div className="container-fluid mb-5 mt-0  " id="onas">
      <section className="slice slice-lg p-0">
        <div className="container ">
          <div className="mb-5 text-center">
            <Bounce>
              <h3 className=" mt-4 ">O NAS</h3>
            </Bounce>
            <div className="fluid-paragraph mt-3">
              <p className="lead lh-180">
                <span className="text-primary font-weight-bold">
                  Punkt Pobrań
                </span>{" "}
                powstał w celu ułatwienia dostępu do badań komercyjnych, ze
                szczególnym uwzględnieniem{" "}
                <span className="text-primary">matek</span> i{" "}
                <span className="text-primary">dzieci</span>.
              </p>
            </div>
          </div>
          <div className="row row-grid">
            <div className="col-lg-4 text-center">
              <Slide left>
                <div className="">
                  <div className="pb-5">
                    <div className="icon bg-gradient-primary text-white rounded-circle icon-lg icon-shape shadow">
                      <BsFillFileEarmarkMedicalFill />
                    </div>
                  </div>
                  <h5 className="font-weight-bold">Badania</h5>
                  <p className="mt-2 mb-0">
                    Oferujemy szeroki zakres badań laboratoryjnych – badań krwi,
                    wymazów i cytologii ginekologicznych.
                  </p>
                </div>
              </Slide>
            </div>
            <div className="col-lg-4 text-center">
              <Slide bottom>
                <div className="">
                  <div className="pb-5">
                    <div className="icon bg-gradient-warning text-white rounded-circle icon-lg icon-shape shadow">
                      <FaAmbulance />
                    </div>
                  </div>
                  <h5 className="font-weight-bold">Dojazd do pacjenta</h5>
                  <p className="mt-2 mb-0">
                    Jako jedyny punkt w okolicy oferujemy usługi z dojazdem do
                    domu pacjenta.
                  </p>
                </div>
              </Slide>
            </div>
            <div className="col-lg-4 text-center">
              <Slide right>
                <div className="">
                  <div className="pb-5">
                    <div className="icon bg-gradient-danger text-white rounded-circle icon-lg  icon-shape shadow">
                      <FaUserNurse />
                    </div>
                  </div>
                  <h5 className="font-weight-bold">Zespół</h5>
                  <p className="mt-2 mb-0">
                    Wszystkie pobrania, a w szczególności u najmłodszych
                    pacjentów wykonuje w pełni wykwalifikowany i doświadczony
                    zespół.
                  </p>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
