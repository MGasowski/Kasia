import { BsFillFileEarmarkMedicalFill } from 'react-icons/bs';
import { FaAmbulance, FaUserNurse } from 'react-icons/fa';
import { Bounce, Slide } from 'react-reveal';


export default function Features2() {
    return (
        <div class="container-fluid mb-5 mt-0 "  id="onas">
<section class="slice slice-lg p-0" id="sct-what-we-do">
      <div class="container">
      <div class="mb-5 text-center">
                <Bounce>
                <h3 class=" mt-4 ">O NAS</h3>
                </Bounce>
                <div class="fluid-paragraph mt-3">
                  <p class="lead lh-180"><span class="text-primary font-weight-bold">Punkt Pobrań</span> powstał w celu ułatwienia dostępu do badań komercyjnych, ze szczególnym
uwzględnieniem <span class="text-primary">matek</span> i <span class="text-primary">dzieci</span>.</p>
                </div>
              </div>
        <div class="row row-grid">

          <div class="col-lg-4 text-center">
          <Slide left>
            <div class="">
              <div class="pb-5">
                <div class="icon bg-gradient-primary text-white rounded-circle icon-lg icon-shape shadow">
                  {/* <i class="far fa-palette"></i> */}
                  {/* <i class="far fa-dove" style={{color: "#339af0"}}></i> */}
                  <BsFillFileEarmarkMedicalFill />

                  {/* <FontAwesomeIcon icon={["far", "palette"]} /> */}
                  {/* <FontAwesomeIcon icon={['fab', 'apple']} /> */}


                </div>
              </div>
              <h5 class="font-weight-bold">Badania</h5>
              <p class="mt-2 mb-0">Oferujemy szeroki zakres badań laboratoryjnych – badań krwi,
wymazów i cytologii ginekologicznych.</p>
            </div>
            </Slide>

          </div>
          <div class="col-lg-4 text-center">
            <Slide bottom>
            <div class="">
              <div class="pb-5">
                <div class="icon bg-gradient-warning text-white rounded-circle icon-lg icon-shape shadow">
                  <FaAmbulance />
                </div>
              </div>
              <h5 class="font-weight-bold">Dojazd do pacjenta</h5>
              <p class="mt-2 mb-0">Jako jedyny punkt w okolicy
oferujemy usługi z dojazdem do domu pacjenta.</p>
            </div>
            </Slide>
          </div>
          <div class="col-lg-4 text-center">
            <Slide right>
            <div class="">
              <div class="pb-5">
                <div class="icon bg-gradient-danger text-white rounded-circle icon-lg  icon-shape shadow">
                  <FaUserNurse />
                </div>
              </div>
              <h5 class="font-weight-bold">Zespół</h5>
              <p class="mt-2 mb-0">Wszystkie pobrania, a w szczególności u najmłodszych
pacjentów wykonuje w pełni wykwalifikowany i doświadczony zespół.</p>
            </div>
            </Slide>
          </div>

        </div>
        
      </div>
    </section>
{/* 
        <div class="row">
          <div class="col-lg-4">
            <div class="card hover-translate-y-n10 hover-shadow-lg p-2">
              <div class="card-body">
                <div class="">
                  <div class="pb-5">
                    <div class="icon bg-primary text-white rounded-circle icon-lg icon-shape shadow">
                    <BsFillFileEarmarkMedicalFill />
                    </div>
                  </div>
                  <h5 class="font-weight-bold">Badania</h5>
                  <p class="mt-2 mb-0">Oferujemy szeroki zakres badań laboratoryjnych – badań krwi,
wymazów i cytologii ginekologicznych.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card hover-translate-y-n10 hover-shadow-lg p-2">
              <div class="card-body">
                <div class="">
                  <div class="pb-5">
                    <div class="icon bg-primary text-white rounded-circle icon-lg icon-shape shadow">
                    <FaAmbulance />
                    </div>
                  </div>
                  <h5 class="font-weight-bold">Dojazd do pacjenta</h5>
                  <p class="mt-2 mb-0">Jako jedyny punkt w okolicy
oferujemy usługi z dojazdem do domu pacjenta.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card hover-translate-y-n10 hover-shadow-lg p-2">
              <div class="card-body">
                <div class="">
                  <div class="pb-5">
                    <div class="icon bg-primary text-white rounded-circle icon-lg icon-shape shadow">
                      <FaUserNurse />
                    </div>
                  </div>
                  <h5 class="font-weight-bold">Zespół</h5>
                  <p class="mt-2 mb-0">Wszystkie pobrania, a w szczególności u najmłodszych
pacjentów wykonuje w pełni wykwalifikowany i doświadczony zespół.</p>
                </div>
              </div>
            </div>
          </div>
        </div>*/}
        </div> 

    );
}