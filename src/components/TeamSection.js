import { Fade } from "react-reveal";
import { default as kasia } from "../img/team/HG0A6554.jpg";
import { default as karolina } from "../img/team/HG0A6564.jpg";

export default function Team() {
  return (
    <section>
      <div className="row row-grid justify-content-center mb-7">
        <div className="col-lg-6 text-center">
          <h2 className="h1 text-primary">Zespół </h2>
          <h6 className="text-sm text-uppercase ls-2 text-dark">poznaj nas</h6>
        </div>
      </div>

      <div className="container py-3">
        <Fade left>
          <div className="card shadow-lg ">
            <div className="row ">
              <div className="col-md-4 p-0 overflow-hidden">
                <img
                  alt="Kasia Misiak"
                  src={kasia}
                  className="w-100 hover-scale-110"
                  style={{ minHeight: "100%", objectFit: "cover" }}
                />
              </div>
              <div
                className="col-md-8 px-3 "
                style={{ borderLeft: "4px dotted #f26e93" }}
              >
                <div className="card-body px-3">
                  <h4 className="card-title">Kasia Misiak</h4>
                  <p className="card-text">
                    Położna, współwłaścicielka i założycielka Punktu Pobrań.
                    Wiedzę medyczną łączę z pasją do sportu. Jestem
                    certyfikowanym instruktorem zajęć ruchowych dla kobiet w
                    ciąży i treningu medycznego po porodzie. Współpracuje z
                    kobietami z zaburzeniami funkcjonowania mięśni dna miednicy,
                    z obniżeniem narządów miednicy mniejszej oraz rozejściem
                    kresy mięśni brzucha po porodzie. Zajmuje się również
                    indywidualnym przygotowaniem do porodu. Innymi słowy nie są
                    mi obce wszelkie problemy związane z okresem ciąży i po
                    porodzie, z którymi boryka się wiele kobiet. Dbając o
                    komfort psychiczny i fizyczny prowadzę indywidualne treningi
                    w domach moich podopiecznych. Wśród nich są kobiety w ciąży
                    i połogu, po operacjach brzusznych a także seniorzy. Z
                    częścią pacjentek spotykam się na treningach personalnych w
                    Centrum Sportowym Bastion w Nowym Dworze Mazowieckim.
                  </p>
                  <p className="card-text">
                    Prywatnie pasjonatka sportu, sztuk walki, instuktorka
                    Kickboxingu i zajęć grupowych dla kobiet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div className="container py-3">
        <Fade right>
          <div className="card shadow-lg">
            <div className="row  p-0">
              <div
                className="col-md-8 px-3 "
                style={{ borderRight: "4px dotted #f26e93" }}
              >
                <div className="card-body px-3 ">
                  <h4 className="card-title">Karolina Derczyńska</h4>
                  <p className="card-text">
                    Położną jestem od 2008 roku. Doświadczenie w pracy z dziećmi
                    zdobywałam w oddziale Reanimacji i Intensywnej Opiekli
                    Noworodka Uniwersyteckiego Szpitala Klinicznego w
                    Białymstoku oraz w Centrum Medycznym „Żelazna”. Jestem
                    instruktorem szkoły rodzenia, prowadzę zajęcia z zakresu
                    opieki nad noworodkiem. Od 7 lat zajmuję się problemami
                    laktacyjnymi, prowadzę indywidualne poradnictwo w domu
                    pacjentki. Obecnie odbywam specjalizację z zakresu
                    pielęgniarstwa ginekologiczno-położniczego. Wiedzę zawodową
                    dodatkowo poszerzałam pracując w klinikach leczenia
                    niepłodności jako koordynator położnych i indywidualny
                    konsultant medyczny. Tematy z zakresu rozrodczości są moją
                    pasją, którą staram się nieustannie rozwijać.{" "}
                  </p>
                  <p className="card-text">
                    Prywatnie żona i mama trzech córek.
                  </p>
                </div>
              </div>

              <div className="col-md-4 p-0 overflow-hidden">
                <img
                  alt="Karolina Derczyńska"
                  src={karolina}
                  className="w-100 h-100 hover-scale-110"
                  style={{ minHeight: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
