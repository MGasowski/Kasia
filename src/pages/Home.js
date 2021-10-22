import Features from '../components/Features';
import Features2 from '../components/Features2';
import Header from '../components/Header'
import Meta from '../components/Meta'
import Packages from '../components/Packages';
import Shop from '../components/Shop';
import Spacer from '../components/Spacer';
import Swiper from '../components/Swiper2';
import Team from '../components/TeamSection';
import Team2 from '../components/Team2';
import { default as img } from '../img/backgrounds/img-5.jpg';
import Landing from './Landing';

const Home = () => {
  // page content


  return (<>
        <Landing />
        <Spacer />
        <Features2 />
        {/* <Team2 /> */}
        <Packages />
        <Team />

        {/* <Team /> */}


    {/* <section class="slice slice-lg bg-section-dark" data-offset-top="#header-main" style={{ paddingTop: 147.188 }}>
      <div class="bg-absolute-cover bg-size--contain bg-primary d-flex align-items-center">
         <figure class="w-100">
          <img alt="Image placeholder" src={img} class="svg-inject" />
        </figure> 
      </div>
      <div class="py-6 py-xl-9">
        <div class="container position-relative zindex-100">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-6">
                <h2 class="h1 text-white">
                  Start your business with Purpose
                </h2>
                <p class="lead text-white mt-4">
                  Purpose is an innovative HTML template solution based on Bootstrap 4, which combines beautiful design and flawless functionality.
                </p>
                <a href="#sct-what-we-do" class="btn btn-white rounded-pill mt-4">
                  See what we do
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    {/* <Team />
          <Features /> 
    <Shop />
 <Swiper /> */}
    </>
  )
}

export default Home