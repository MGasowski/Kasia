import { Card } from "react-bootstrap";

export default function Team2() {
    return (
        <section>
            <div className="container-fluid bg-warning">
                <div class="row" style={{minHeight: 400}} >
                <div class="col-12 col-lg-6 bg-primary m-3" style={{transform:"skewX(5deg)"}}>
                    <div style={{transform:"skewX(-5deg)"}}>Kasia </div>
                    
                </div>
                
                <div class="col-12 col-lg-6 bg-primary rounded m-3" style={{transform:"skewX(5deg)"}}>
                    <div style={{transform:"skewX(-5deg)"}}>Karolina 
                        <Card>
                        Położna, współwłaścicielka i założycielka Punktu Pobrań. Wiedzę medyczną łączę z pasją do sportu.
Jestem certyfikowanym instruktorem zajęć ruchowych dla kobiet w ciąży i treningu medycznego po
porodzie. Współpracuje z kobietami z zaburzeniami funkcjonowania mięśni dna miednicy, z obniżeniem
narządów miednicy mniejszej oraz rozejściem kresy mięśni brzucha po porodzie. Zajmuje się również
indywidualnym przygotowaniem do porodu.
Innymi słowy nie są mi obce wszelkie problemy związane z okresem ciąży i po porodzie, z którymi
boryka się wiele kobiet. Dbając o komfort psychiczny i fizyczny prowadzę indywidualne treningi w
domach moich podopiecznych. Wśród nich są kobiety w ciąży i połogu, po operacjach brzusznych a także
seniorzy. Z częścią pacjentek spotykam się na treningach personalnych w Centrum Sportowym Bastion w
Nowym Dworze Mazowieckim.
                        </Card>

                    </div>
                                        
                </div>

                </div>
            </div>
        </section>
    );
}