import { BsFacebook, BsInstagram } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { MdSpeakerNotes } from "react-icons/md";
import { ImClock } from "react-icons/im";
import { Slide } from "react-reveal";

const Contact = (props) => {
  return (
    <div
      class="container-fluid mt-4 d-flex justify-content-center align-items-center "
      style={{ minHeight: "80vh" }}
    >
      <div class="row row-grid justify-content-end align-items-center w-100">
        <div class="col-xl-4 col-lg-5 pr-lg-5 ">
          <h1 class="text-primary">Kontakt</h1>
          <h3>
            Punkt Pobrań
            <br />
            Diagnostyka Laboratoryjna
          </h3>
          <p class="lead my-4">
            <span
              class="text-primary font-weight-bold"
              style={{
                display: "flex",
                justifyItems: "center",
              }}
            >
              <IoHome size={24} style={{ width: "auto" }} /> Adres
            </span>
            <p>
              ul. Reymonta 3 <br />
              05-120 Legionowo
            </p>
            <p>
              <span class="text-primary font-weight-bold">
                <MdSpeakerNotes size={24} style={{ width: "auto" }} /> Dane
              </span>
              <br />
              Telefon: <a href="tel:692332349">692-332-349</a>
              <br />
              Numer konta:{" "}
              <span class="text-primary">30 1140 2004 0000 3402 8108 6033</span>
              <br />
            </p>
            <p>
              <span class="text-primary font-weight-bold">
                <ImClock size={24} style={{ width: "auto" }} /> Godziny otwarcia
              </span>
              <br />
              poniedziałek-piątek: 07:00-13:00 <br />
              sobota: 07:00-11:00
            </p>
          </p>
          <h3>Media Społecznościowe</h3>
          <a
            href="https://www.instagram.com/punkt_pobran_diaglab"
            target="_blank"
            rel="noreferrer"
          >
            <p>
              <BsInstagram class="mx-2" style={{ width: "auto" }} />
              Instagram
            </p>
          </a>
          <a
            href="https://www.facebook.com/punktpobrandiaglab"
            target="_blank"
            rel="noreferrer"
          >
            <p>
              <BsFacebook class="mx-2" style={{ width: "auto" }} />
              Facebook
            </p>
          </a>
        </div>
        <div class="col-lg-6 ">
          <Slide right>
            <div class="mr-n3 ">
              <iframe
                title="dojazd"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.5097741557665!2d20.934859615995695!3d52.397436653057156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eb9bfd4bee2b7%3A0xa0404e53b0f3e98c!2sPunkt%20Pobra%C5%84.%20Diagnostyka%20Laboratoryjna.!5e0!3m2!1spl!2spl!4v1635843104758!5m2!1spl!2spl"
                allowFullScreen=""
                style={{ minHeight: 600, width: "100%" }}
                className="rounded shadow shadow-lg"
                loading="lazy"
              ></iframe>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Contact;
