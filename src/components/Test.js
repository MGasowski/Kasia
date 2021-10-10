import { default as dark } from '../img/brand/logo.png';

export default function Test() {
    return (
 <nav class="navbar navbar-main navbar-expand-lg border-bottom shadow-lg navbar-transparent navbar-light bg-white" id="navbar-main">
            <div class="container px-lg-0">
               
        <a class="navbar-brand mr-lg-5 " href="../../index-2.html">
                    <img alt="Image placeholder" src={dark} id="navbar-logo" style={{ filter:"grayscale(100%)", height: 50, marginRight: 10 }} />
                Punkt Pobrań

                </a>
        <button class="navbar-toggler pr-0" type="button" data-toggle="collapse" data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-main-collapse">
          <ul class="navbar-nav align-items-lg-center">
            <li class="nav-item ">
              <a class="nav-link" href="../../index-2.html">Strona Główna</a>
                        </li>
                        
            <li class="nav-item ">
              <a class="nav-link" href="../../index-2.html">Cennik</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="../../index-2.html">Oferta</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav align-items-lg-center ml-lg-auto">
            <li class="nav-item">
                <a href="https://themes.getbootstrap.com/product/purpose-website-ui-kit/" target="_blank" class="btn btn-sm btn-primary btn-icon rounded-pill d-none d-lg-inline-flex" data-toggle="tooltip" data-placement="left" title="" data-original-title="Go to Bootstrap Themes">
                <span class="btn-inner--text">Cennik</span>
              </a>
             </li>           
          </ul>

        </div>
      </div>
    </nav>
    );
}