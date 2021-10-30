import { useState } from "react";
import { Fade } from "react-reveal";

const Modal = () => {
    const [visible, setVisible] = useState(true);
    return (<>
        <div class={` ${visible?"":"d-none"}`} onClick={()=>setVisible(prev => !prev)} style={{backdropFilter:"blur(2px)",height: "100vh", width: '100vw', position: "fixed", zIndex:1000, top: 0, left: 0}}> </div>
<div class={`alert alert-danger border border-dark bg-danger text-light shadow shadow-lg shadow-danger shadow-intensity-lg ${visible?'':"d-none"}`} role="alert" style={{zIndex:1001,position:"fixed", left:0, right:0, marginLeft: "auto", marginRight: "auto", top: 100, width: "50%"}}>
    <h5 class="alert-heading">Uwaga!</h5>
    <p>W celu realizacji usługi pobrań w domu prosimy o kontakt telefoniczny pod nr telefonu 
692 332 349 w godzinach 7:00-12:00 najpóźniej w dniu poprzedzającym wizytę. 
</p>
    <hr />
    <p>USŁUGI DOMOWE-POBRANIA KRWI</p>
<p>do każdego pobrania ( 1 osoba) doliczono koszt usługi na terenie Legionowa-30 zł</p>
<p>Nowy Dwór Mazowiecki, Jabłonna, Łajski, Józefów, Chotomów, Dąbrowa Chotomowska, Olszewnica Stara, Olszewnica Nowa, Wieliszew – 40 zł</p>
<p>oferta z dojazdem możliwa wyłącznie przy zakupie minimum 5 badań diagnostycznych</p>
    <p class="btn" href="#" class="btn btn-sm btn-light" onClick={()=>setVisible(prev => !prev)} >Zamknij</p>
</div> </>
    );
}

export default Modal;