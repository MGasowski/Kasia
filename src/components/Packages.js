import { Fade } from 'react-reveal';
import { Swiper, SwiperSlide } from 'swiper/react';

const Packages = () => {
    return (<>
    <Fade><>
<div class="container pt-5 mb--150 position-relative  " style={{zIndex: 10 }}>
        <div class="row row-grid justify-content-center mb-7" >
          <div class="col-lg-6 text-center">
            <h2 class="h1 text-success">Pakiety </h2> 
            <h6 class="text-sm text-uppercase ls-2 text-dark">kompleksowe pakiety uslug</h6>

          </div>


        <div className="">
        <div class="alert alert-modern  alert-success animated infinite pulse slow" style={{width:"30%"}}>
    
    <span class="badge badge-warning badge-pill ">
        Nowość
    </span>
      <span class="alert-content">Więcej pakietów znajdziesz tutaj!</span>
    </div>
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
      
      </>
      </Fade><div className="container-fluid position-relative  d-none d-sm-block p-0 m-0 bg-primary " style={{height: 300,  zIndex: -1}}>
     
      <div class="shape-container" data-shape-position="bottom" style={{height: "100%"}}>
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 90 1437.24 372.58" class="ie-shape-clouds">
          
          <path class="fill-section-primary" d="M1.35,97.76.5-189l16,8.88s28.43-111.93,145.68-53.3c0,0,42.13-28.11,63.71,9.81,0,0,30.73-57.54,90.88-11.11,0,0,136-132.07,196.8,86.3,0,0,86.3-171.3,234.72,5.23,0,0,39.23-102.65,143.19-22.23,0,0,5.88-113.11,149.07-61.46,0,0,68.65-100,189-11.11,0,0,126.84-28.11,151.69,87,0,0,34.65-34.65,56.23-18.31l.33,267.1Z" transform="translate(-0.5 400)"></path>
          <path class="fill-section-primary opacity-5" d="M.56-113.82,1.35,97.76H1437.74l-.55-207.55s-62.35-102.82-192-23.19c0,0-50.05-64.84-110.35-5.69,0,0-22.75-37.54-52.33-13.65,0,0-18.2-75.08-87.59-30.71,0,0-29.58-18.2-36.4,8,0,0-101.25-122.86-167.23,18.2,0,0-78.49-60.29-137.65,12.51,0,0-35.27-26.16-52.33-1.14,0,0-2.28-27.3-36.4-11.38,0,0-31.85-52.33-91-21.61,0,0-48.92-64.84-111.48-6.83,0,0-62.88-21.69-72.81,29.58,0,0-44.91-23.4-43.23,19.34,0,0-39.82-51.19-81.91,4.55,0,0-54.6-44.37-94.42,9.1C70-122.74,17.56-154.95.56-113.82Z" transform="translate(-0.5 274.83)"></path>
        </svg>
      </div>

      </div>
</>
    
    );
}

export default Packages;