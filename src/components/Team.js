import { Bounce, Fade } from 'react-reveal';
import {default as kasia} from '../img/team/HG0A6554.jpg'
import {default as karolina} from '../img/team/HG0A6564.jpg'


export default function Team() {
    return (<>
<div >  
          <section class="slice slice-lg " style={{transform: "skewY(-5deg)" , zIndex: -1}}>
            <div class="container " style={{transform: "skewY(5deg)"}}>

            <div class="mb-5 text-center">
                <Bounce>
                <h3 class=" mt-4 text-white  font-weight-bolder text-decoration-underline">ZESPÓŁ</h3>
                </Bounce>
              </div>
              <div class="row no-gutters align-items-md-center text-center text-md-left" >
                <div class="card hover-shadow-lg hover-scale-110 order-1 col-lg-7 mr--100" >
                  <div class="card-body p-5" >
                  <p class="h4 lh-150">
                      Kasia Misiak
                    </p>
                    <p class="h6 text-muted">Położna, współwłaścicielka i założycielka Punktu Pobrań. Wiedzę medyczną łączę z pasją do sportu.
                        Jestem certyfikowanym instruktorem zajęć ruchowych dla kobiet w ciąży i treningu medycznego po
                        porodzie. Współpracuje z kobietami z zaburzeniami funkcjonowania mięśni dna miednicy, z obniżeniem
                        narządów miednicy mniejszej oraz rozejściem kresy mięśni brzucha po porodzie. Zajmuje się również
                        indywidualnym przygotowaniem do porodu.
                        Innymi słowy nie są mi obce wszelkie problemy związane z okresem ciąży i po porodzie, z którymi
                        boryka się wiele kobiet. Dbając o komfort psychiczny i fizyczny prowadzę indywidualne treningi w
                        domach moich podopiecznych. Wśród nich są kobiety w ciąży i połogu, po operacjach brzusznych a także
                        seniorzy. Z częścią pacjentek spotykam się na treningach personalnych w Centrum Sportowym Bastion w
                        Nowym Dworze Mazowieckim.</p>             
                        <p>Prywatnie pasjonatka sportu, sztuk walki, instuktorka Kickboxingu i zajęć grupowych dla kobiet.</p>


                  </div>
                </div>
                <div class="order-2 col-lg-6 mb-4 mb-lg-0" >
                  <img alt=" placeholder" src={kasia} class="img-fluid rounded shadow" />
                </div>
              </div>
            
              <div class="row no-gutters align-items-md-center text-center text-md-left" >
                <div class="card hover-shadow-lg hover-scale-110 order-2 col-lg-7 ml--100" >
                  <div class="card-body p-5">
                  <p class="h4 lh-150">
                  Karolina Derczyńska
                    </p>
                    <p class="h6 text-muted">Położną jestem od 2008 roku. Doświadczenie w pracy z dziećmi zdobywałam w oddziale Reanimacji i
Intensywnej Opiekli Noworodka Uniwersyteckiego Szpitala Klinicznego w Białymstoku oraz w Centrum
Medycznym „Żelazna”. Jestem instruktorem szkoły rodzenia, prowadzę zajęcia z zakresu opieki nad
noworodkiem. Od 7 lat zajmuję się problemami laktacyjnymi, prowadzę indywidualne poradnictwo w
domu pacjentki. Obecnie odbywam specjalizację z zakresu pielęgniarstwa ginekologiczno-położniczego.
Wiedzę zawodową dodatkowo poszerzałam pracując w klinikach leczenia niepłodności jako koordynator
położnych i indywidualny konsultant medyczny. Tematy z zakresu rozrodczości są moją pasją, którą
staram się nieustannie rozwijać.</p>

                  </div>
                </div> 
                <div class="order-1 col-lg-6 mb-4 mb-lg-0" >
                   
                  <img alt=" placeholder" src={karolina} class="img-fluid rounded shadow " style={{ transform: "scaleX(-1)"}}/>
                </div>            

              </div>


            </div>
          </section>
        </div>
    </>
    );
}