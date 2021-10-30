import { default as dark } from '../img/brand/logo.png';
import '../css/autohide.css';
import { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const autohide = () => {
  const el_autohide = document.querySelector('.autohide');
  
  const navbar_height = document.querySelector('.navbar').offsetHeight;
  // document.body.style.paddingTop = navbar_height + 'px';

  if(el_autohide){
    var last_scroll_top = 0;
    window.addEventListener('scroll', function() {
          let scroll_top = window.scrollY;
         if(scroll_top < last_scroll_top) {
              el_autohide.classList.remove('scrolled-down');
              el_autohide.classList.add('scrolled-up');
          }
          else {
              el_autohide.classList.remove('scrolled-up');
              el_autohide.classList.add('scrolled-down');
          }
          last_scroll_top = scroll_top;
    }); 
    // window.addEventListener
  }
}



export default function Test() {
  
  useEffect(()=> {
    autohide();
  }, [])

  const [state, setState] = useState('home');
  const [title, setTitle] = useState('Strona Główna');

    return (<>
      <Helmet> <title>Punkt Pobrań - {title}</title> </Helmet>
 <nav class="autohide navbar navbar-main navbar-expand-lg border-bottom shadow-lg navbar-transparent navbar-light bg-white position-fixed top-0" style={{width:"100%"}} id="navbar-main">
            <div class="container px-lg-0">
               
        <Link to="/" class="navbar-brand mr-lg-5 "  onClick={()=> setState('home')}>
                    <img alt="placeholder" src={dark} id="navbar-logo" style={{ filter:"grayscale(100%)", height: 50, marginRight: 10 }} />
                <span className="text-primary font-weight-bold">Punkt Pobrań</span>

                </Link>
        <button class="navbar-toggler pr-0" type="button" data-toggle="collapse" data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-main-collapse">
          <ul class="navbar-nav align-items-lg-center">
            <li class="nav-item ">
              <Link to="/" className={`nav-link ${state === 'home'? 'active' : ''}`} onClick={()=>{setState('home'); setTitle("Strona Główna")}}>Strona Główna</Link>
                        </li>
                        
            <li class="nav-item ">
            <Link to="/pakiety" className={`nav-link ${state === 'packages'? 'active' : ''}`} onClick={()=> {setState('packages'); setTitle("Pakiety")}}>Pakiety</Link>
            </li>
            <li class="nav-item ">
            <Link to="/oferta" className={`nav-link ${state === 'features'? 'active' : ''}`} onClick={()=> {setState('features'); setTitle("Oferta")}}>Oferta</Link>
                        </li>
                    </ul>
                    <ul class="navbar-nav align-items-lg-center ml-lg-auto">
            <li class="nav-item">
              <Link to="/cennik">
                <span class="btn btn-primary rounded-pill">Cennik</span>
                </Link>
             </li>           
          </ul>

        </div>
      </div>
    </nav>
    </>
    );
}