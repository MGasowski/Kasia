import {ImHome} from "react-icons/im";
import {RiHospitalFill} from 'react-icons/ri';
import { BsPatchCheck } from 'react-icons/bs';
import { Fade } from 'react-reveal';
import Modal from '../components/Modal';
import { useMediaQuery } from 'react-responsive'
import { useEffect, useState } from "react";


export default function Offer() {
 
    return (
    <div className="container-fluid  mb-4">
        <div className="row pt-4">
            
        <div class="card-group">
<div class={`  card bg-dark-dark px-4 py-5 border-0`} >
<Fade top>

    <div class="card-body">
        <h5 class="h4 text-white">Oferta w punkcie</h5>
        <p class="mt-4 mb-0 h4  text-primary">
            Badania:
        </p>
        <hr class="divider divider-fade" />

        <p className="h5 text-primary m-2">
        Krwi
        </p>
        <ul class="">
            <li class="list-group-item bg-transparent border-0 text-secondary m-0 p-1">biochemia podstawowa</li>
            <li class="list-group-item bg-transparent border-0 text-secondary m-0 p-1">markery odczynów zapalnych i chorób reumatologicznych</li>
            <li class="list-group-item bg-transparent border-0 text-secondary m-0 p-1">choroby wieńcowe</li>
            <li class="list-group-item bg-transparent border-0 text-secondary m-0 p-1">hematologia</li>
            <li class="list-group-item bg-transparent border-0 text-secondary m-0 p-1">serologia</li>
            <li class="list-group-item bg-transparent border-0 text-secondary m-0 p-1">choroby tarczycy</li>
            <li class="list-group-item bg-transparent border-0 text-secondary m-0 p-1">hormony</li>
            <li class="list-group-item bg-transparent border-0 text-secondary m-0 p-1">diagnostyka anemii, cukrzycy, osteoporozy</li>
            <li class="list-group-item bg-transparent border-0 text-secondary m-0 p-1">choroby nowotworowe</li>
            <li class="list-group-item bg-transparent border-0 text-secondary m-0 p-1">układ krzepnięcia</li>
            <li class="list-group-item bg-transparent border-0 text-secondary m-0 p-1">immunoglobuliny,enzymy</li>
            <li class="list-group-item bg-transparent border-0 text-secondary m-0 p-1">infekcje</li>
            <li class="list-group-item bg-transparent border-0 text-secondary m-0 p-1">toksykologia</li>
            <li class="list-group-item bg-transparent border-0 text-secondary m-0 p-1">autoimmunologia</li>
            <li class="list-group-item bg-transparent border-0 text-secondary m-0 p-1">alergologia</li>
            <li class="list-group-item bg-transparent border-0 text-secondary m-0 p-1">choroby genetyczne</li>
            <li class="list-group-item bg-transparent border-0 text-secondary m-0 p-1">Covid</li>
        </ul>
        <hr class="divider divider-dark" />

        <p className="h5 text-primary m-2">
        Moczu
        </p>
        <hr class="divider divider-fade" />

        <p className="h5 text-primary m-2" style={{color: "brown"}}>
        Kału
        </p>
        <ul class="">
            <li class="list-group-item bg-transparent border-0 text-secondary">wymazy mikrobiologiczne i mykologiczne</li>
            <li class="list-group-item bg-transparent border-0 text-secondary">wymazy ginekologiczne</li>
            <li class="list-group-item bg-transparent border-0 text-secondary">cytologie ginekologiczne-diagnostyka HPV</li>
            <li class="list-group-item bg-transparent border-0 text-secondary">panele urogenitalne</li>
        </ul>
        <hr class="divider text-dark" />

        <p className="h5 text-light m-2">
        inne usługi w punkcie:
        </p>
        <ul class="">
            <li class="list-group-item bg-transparent border-0 text-secondary">zdejmowanie szwów po cięciu cesarskim i nacięciu krocza, operacjach ginekologicznych (konieczne okazanie karty wypisowej)</li>
        </ul>
    </div>
    </Fade>
</div>

{/*  */}
<div class="card bg-gradient-dark px-4 py-5 border-0">
<Fade top>

    <div class="card-body">
        <h5 class="h4 text-white">Oferta w domu pacjenta</h5>
        <p class="mt-4 mb-0 text-white">
         Pobrania krwi w domu pacjenta <br /> 
         <small className="text-muted">(także badania moczu, kału, wymazy mikrobiologiczne) </small>
        </p>
        <hr class="divider divider-fade" />

        <p class="mt-4 mb-0 text-white">
        Pobrania wymazów Covid -19 w domu pacjenta
        </p>
        <hr class="divider divider-fade" />

        <p class="mt-4 mb-0 text-white">
        ZAJĘCIA INDYWIDUALNE DLA KOBIET W CIĄŻY I PO PORODZIE w domu klientki  
        </p>
        <small className="text-muted">(okolice Legionowa, Nowego Dworu Mazowieckiego, Wieliszewa, Białołęki)</small> <p className="h6 text-primary">Katarzyna Misiak</p> <a href="tel:513051692">513 051 692</a>


<table class="table-responsive table-cards align-items-center">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Usługa</th>
                  <th scope="col">Czas trwania</th>
                  <th scope="col">Cena</th>
                  <th scope="col">Pakiet</th>
                </tr>
              </thead>
              <tbody class="list">
                <tr>
                  <th scope="row">1</th>
                  <td>ćwiczenia indywidualne z ciężarną w domu </td>
                  <td>60 min</td>
                  <td>180zł</td>
                  <td>5 spotkań /700zł</td>
                </tr>
                <tr class="table-divider"></tr>

                <tr>
                  <th scope="row">2</th>
                  <td>indywidualne  zajęcia usprawniające po porodzie </td>
                  <td>60 min</td>
                  <td>180zł</td>
                  <td>5 spotkań /700zł</td>
                </tr>
                <tr class="table-divider"></tr>

                <tr>
                  <th scope="row">3</th>
                  <td>ćwiczenia dla kobiet z rozejściem kresy białej mięśnia prostego brzucha </td>
                  <td>60 min</td>
                  <td>180zł</td>
                  <td>-</td>
                </tr>
                <tr class="table-divider"></tr>
                
                <tr>
                  <th scope="row">4</th>
                  <td>ćwiczenia dla kobiet z dysfunkcjami mięśni dna miednicy i obniżeniem narządów miednicy </td>
                  <td>60 min</td>
                  <td>180zł</td>
                  <td>-</td>
                </tr>
                <tr class="table-divider"></tr>
                
              </tbody>
            </table>

            <hr class="divider divider-fade" />

            <p class="mt-4 mb-0 text-white">
            WIZYTY PATRONAŻOWE i LAKTACYJNE 
            </p>
             <p className="h6 text-primary">Karolina Derczyńska </p> <a href="tel:796874147">796 874 147</a>
            
             <table class="table-responsive table-cards align-items-center">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Usługa</th>
                  <th scope="col">Czas trwania</th>
                  <th scope="col">Cena</th>
                  <th scope="col">Pakiet</th>
                </tr>
              </thead>
              <tbody class="list">
                <tr>
                  <th scope="row" >1</th>
                  <td>konsultacja laktacyjna </td>
                  <td>45-90 minut</td>
                  <td>200zł</td>
                  <td>-</td>
                </tr>
                <tr class="table-divider"></tr>

                <tr>
                  <th scope="row" >2</th>
                  <td>wizyta po porodzie <br />
                      <small className="text-disabled">dobór techniki karmienia, kontrola krwawienia, rany pooperacyjnej, stanu noworodka</small>
                  </td>
                  <td>60-90 minut </td>
                  <td>250zł</td>
                  <td>-</td>
                </tr>
                <tr class="table-divider"></tr>

              </tbody>
            </table>
    </div>
    </Fade>

</div>
</div>

        </div>
        <Modal />
    </div>);
}