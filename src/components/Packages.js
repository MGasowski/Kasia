import { Fade } from 'react-reveal';
import { Swiper, SwiperSlide } from 'swiper/react';

const Packages = () => {
    return (<>
<div class="container pt-5 mb--150 position-relative" style={{zIndex: 10}}>
        <div class="row row-grid justify-content-center mb-7">
          <div class="col-lg-6 text-center">
            <h2 class="h1 text-success">Pakiety </h2> 
            <h6 class="text-sm text-uppercase ls-2 text-dark">kompleksowe pakiety uslug</h6>

          </div>
        </div>

        <div class="pricing card-group flex-column flex-md-row" >
          
          <div class="card card-pricing text-center border border-warning">
            <div class="card-header py-5 border-0 delimiter-bottom">          

            <div class="h1 text-warning text-center mb-0" >Jesienny</div>

              <span class="d-block h5 mb-0">135 zł</span>
            </div>
            <div class="card-body">
              <ul class="list-unstyled mb-0">
               <li>Mocz</li>
               <li>morfologia</li>
               <li>glukoza</li>
               <li>elektrolity</li>
               <li>cholesterol całkowity</li>
               <li>ALT</li>
               <li>AST</li>
               <li>GGTP</li>
               <li>kreatynina</li>
               <li>CRP</li>
               <li>witamina D3</li>
              </ul>
            </div>
          </div>
          <div class="card card-pricing border border-primary text-center scale-110 shadow-lg popular">
            <div class="card-header py-5 border-0 delimiter-bottom ">
            <div class="h1 text-primary text-center mb-0">Covid</div>
              <span class="d-block h5 mb-0"> <span class="price">320</span> zł</span>
              {/* <span class="h6 text-muted">per month</span> */}
            </div>
            <div class="card-body">
              <ul class="list-unstyled mb-0">
                <li>Morfologia</li>
                <li>d-dimery</li>
                <li>próby wątrobowe</li>
                <li>dehydrogenaza mleczanowa (LDH)</li>
                <li>kreatynina</li>
                <li>CRP</li>
                <li>witamina D3</li>
                <li>przeciwciała anty-S SARS cov-2</li>
                <li>ilościowe IgG</li>
              </ul>
              <span class="badge badge-soft-warning badge-pill badge-lg">Popularne</span>

            </div>
          </div>
          <div class="card card-pricing text-center border border-success">
            <div class="card-header py-5 border-0 delimiter-bottom">
            <div class="h1 text-success text-center mb-0">WEGE</div>

              <span class="d-block h5 mb-0 ">275 zł</span>
            </div>
            <div class="card-body">
              <ul class="list-unstyled mb-0">
                  <li> Morfologia</li>
                  <li>glukoza</li>
                  <li>elektrolity</li>
                  <li>białko całkowite</li>
                  <li>albumina</li>
                  <li>żelazo</li>
                  <li>ferrytyna</li>
                  <li>wapń</li>
                  <li>homocysteina</li>
                  <li>witamina B12</li>
                  <li>witamina D3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-primary" style={{height: 300}}></div>
    </>
    );
}

export default Packages;