import { default as doc } from '../img/backgrounds/doctor4.jpg';
import { Fade } from 'react-reveal';

export default function Landing() {
    return (<Fade>
        <div class="page-header" style={{position: 'relative', minHeight: "75vh", overflow: "hidden"}}>

            <div class="oblique position-absolute top-0 d-md-block h-100 d-none gradient-custom-10 " style={{borderRadius:0}}>
            <div class="img-oblique position-absolute fixed-top ms-auto" style={{width: "120%", height: "100%", zIndex: 123,  backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "150px 30%", "background-image": `url(${doc})`, marginLeft: "-4.1rem !important", backgroundColor: "transparent" }}>
                </div>
            </div>


            <div class="container  ">
                <div class="row pt-5">
                    <div class="col-lg-6 col-md-7 d-flex justify-content-center flex-column p-3" style={{minHeight: "70vh"}}>
                        <h2 class="lh-1 ls-tight text-primary fw-900 mb-1" style={{ fontSize: "3.75rem" }}>Punkt Pobrań</h2>
                        <h2 class="lh-1 ls-tight fw-900   mb-4" style={{ fontSize: "3.75rem" }}>Diagnostyka Laboratoryjna</h2>
                        <p class="mt-1 pe-lg-5 me-lg-5 lead fw-normal text-muted" data-builder-edit="text" data-builder-name="text3" >The time is now for it to be okay to be great. People in this world shun people for being nice.</p>
                        <div class="buttons"> <a href="#!" type="button" class="btn   btn-primary btn-lg mt-4 me-2 ripple-surface" data-builder-edit="button" data-builder-name="button1" aria-controls="#picker-editor" draggable="false" style={{ minWidth: "auto" }}>Oferta</a>
                            <a href="#!" type="button" class="btn  btn-link btn-lg mt-4 ripple-surface"   style={{ minWidth: "auto" }}>Pakiety</a>
                        </div>
                    </div>
                </div>
            </div>
                {/* <div class="w-100 position-absolute center bottom-0">
        <div class="p-5 bg-primary">
            <a href="" class="tongue tongue-top bottom-0">
                <i class="fas fa-angle-up"></i>
            </a>
        </div>
    </div> */}
        </div>

        </Fade>
    );
}