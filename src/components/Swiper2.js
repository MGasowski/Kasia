import {default as img} from '../img/backgrounds/doc.jpeg';

export default function Swiper() {
    return (
        <div id="swiper-swiper-1" title="swiper/swiper-1.html">
          <section class="slice slice-lg">
            <div class="container pt-7 swiper-js-container">
              <div class="swiper-container swiper-container-coverflow swiper-container-3d swiper-container-horizontal" data-swiper-effect="coverflow" data-swiper-centered-slides="true" data-swiper-initial-slide="2" data-swiper-items="1" data-swiper-space-between="0" data-swiper-sm-items="4" data-swiper-sm-space-between="0" style={{cursor: "grab"}}>
                <div class="swiper-wrapper" style={{transitionDuration: "0ms", transform: "translate3d(-1526.25px, 0px, 0px)", perspectiveOrigin: "2081.25px 50%"}}>
                 
                  <div class="swiper-slide" style={{width: 277.5, transitionDuration: "0ms", transform: "translate3d(0px, 0px, -1050px) rotateX(0deg) rotateY(210deg)", zIndex: -20}}>
                    <a href={img} data-fancybox="apps">
                      <img alt="Image placeholder" src={img} class="img-fluid rounded" />
                    </a>
                  </div>
                  
                  <div class="swiper-slide" style={{width: 277.5, transitionDuration: "0ms", transform: "translate3d(0px, 0px, -1050px) rotateX(0deg) rotateY(210deg)", zIndex: -20}}>
                    <a href={img} data-fancybox="apps">
                      <img alt="Image placeholder" src={img} class="img-fluid rounded" />
                    </a>
                  </div>

                  <div class="swiper-slide" style={{width: 277.5, transitionDuration: "0ms", transform: "translate3d(0px, 0px, -1050px) rotateX(0deg) rotateY(210deg)", zIndex: -20}}>
                    <a href={img} data-fancybox="apps">
                      <img alt="Image placeholder" src={img} class="img-fluid rounded" />
                    </a>
                  </div>
                  
                </div>
              <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
            </div>
          </section>
        </div>
    );
}