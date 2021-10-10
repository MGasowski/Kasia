export default function Shop() {
    return (
        <div id="headers-shop" title="headers/shop.html">
          <section class="slice slice-xl bg-cover bg-size--cover" data-offset-top="#header-main" style={{backgroundImage: "url('assets/img/backgrounds/img-16.jpg')", backgroundPosition:" center center", paddingTop: 147.188}}>
            <span class="mask bg-dark opacity-3"></span>
            <div class="container py-5 pt-lg-7 position-relative zindex-100">
              <div class="row">
                <div class="col-lg-6 text-center text-lg-left">
                  <div class="alert alert-modern alert-dark">
                    <span class="badge badge-warning badge-pill">
                      New
                    </span>
                    <span class="alert-content">Enhance your home experience with Purpose</span>
                  </div>
                  <div class="">
                    <h2 class="text-white my-4">
                      <span class="display-4 font-weight-light">The technology</span>
                      <span class="d-block">that improves <strong class="font-weight-light">lives</strong>.</span>
                    </h2>
                    <p class="lead text-white">A unique and beautiful collection of UI elements that are all flexible and modular. A complete and customizable solution to building the website of your dreams.</p>
                    <div class="mt-5">
                      <a href="#sct-products" class="btn btn-white rounded-pill hover-translate-y-n3 btn-icon d-none d-xl-inline-block scroll-me">
                        <span class="btn-inner--icon"><i class="far fa-shopping-bag"></i></span>
                        <span class="btn-inner--text">Go shopping</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row row-grid mt-6 d-none d-lg-flex">
                <div class="col-lg-4">
                  <div class="card bg-dark border-0 hover-shadow-lg hover-translate-y-n10">
                    <div class="card-body py-4">
                      <div class="d-flex align-items-start">
                        <div class="icon bg-gradient-primary text-white rounded-circle icon-shape">
                          <i class="far fa-shipping-fast"></i>
                        </div>
                        <div class="icon-text pl-4">
                          <h5 class="ma-0  text-white">Fast shipping</h5>
                          <p class="mb-0 text-muted">All you have to do is to bring your passion. We take care of the rest.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="card bg-dark border-0 hover-shadow-lg hover-translate-y-n10">
                    <div class="card-body py-4">
                      <div class="d-flex align-items-start">
                        <div class="icon bg-gradient-primary text-white rounded-circle icon-shape">
                          <i class="far fa-credit-card"></i>
                        </div>
                        <div class="icon-text pl-4">
                          <h5 class="ma-0  text-white">Online payment</h5>
                          <p class="mb-0 text-muted">All you have to do is to bring your passion. We take care of the rest.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="card bg-dark border-0 hover-shadow-lg hover-translate-y-n10">
                    <div class="card-body py-4">
                      <div class="d-flex align-items-start">
                        <div class="icon bg-gradient-primary text-white rounded-circle icon-shape">
                          <i class="far fa-hand-holding-usd"></i>
                        </div>
                        <div class="icon-text pl-4">
                          <h5 class="ma-0  text-white">Refund guarantee</h5>
                          <p class="mb-0 text-muted">All you have to do is to bring your passion. We take care of the rest.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                <div class="shape-container" data-shape-position="bottom" style={{ height: 300 }}>
              {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 1000 300" style={{enableBackground:"new 0 0 1000 300"}} xml:space="preserve" class="ie-shape-wave-1 fill-section-secondary">
                <path d="M 0 246.131 C 0 246.131 31.631 250.035 47.487 249.429 C 65.149 248.755 82.784 245.945 99.944 241.732 C 184.214 221.045 222.601 171.885 309.221 166.413 C 369.892 162.581 514.918 201.709 573.164 201.709 C 714.375 201.709 772.023 48.574 910.547 21.276 C 939.811 15.509 1000 24.025 1000 24.025 L 1000 300.559 L -0.002 300.559 L 0 246.131 Z"></path>
              </svg> */}
            </div>
          </section>
        </div>
    );
}