import Card from '../components/Card';
import CardCompare from '../components/CardComp';

export default function Packages() {
    return (<>
        <div className="mb-5 text-center mt-5">
          <span className="badge badge-soft-success badge-pill badge-lg">
            Pakiety
          </span>
          <h3 className=" mt-4">Pakiety</h3>
          
        </div>



        
        <div className="container-fluid w-75">
          
        <div className="card-columns">
        <Card 
          name="ALERGICZNY"
          price="199 zł"

          items={[
            "morfologia",
            "IgE całkowite",
            "panel pediatryczny-oddechowy",
          ]}
        />
        <Card 
          name="BRZUSZNY"
          price="420 zł"

          items={[
            "mocz",
            "OB",
            "morfologia",
            "próby wątrobowe",
            "lipaza",
            "amylaza",
            "kał-lamblia\ kał-krew utajona",
            "CRP",
            "helicobacter p. IgG",
            "kalprotektyna w kale",
            "p/c p. transglutaminie tk. IgA",
          ]}
        />
        <Card 
          name="NERKOWY"
          price="39 zł"

          items={[
            "Mocz",
            "mocznik",
            "kreatynina",
            "kwas moczowy",
          ]}
        />
        <Card 
          name="TRZUSTKOWY"
          price="65 zł"

          items={[
            "Lipaza",
            "amylaza",
            "Ca 19-9",
          ]}
        />
        <Card 
          name="WĄTROBOWY"
          price="119 zł"

          items={[
            "Próby wątrobowe",
            "albumina",
            "Hbs antygen",
            "HCV antygen",
          ]}
        />
        <Card 
          name="KOSTNY"
          price="88 zł"

          items={[
            "Wapń",
            "fosfor",
            "witamina D3",
          ]}
        />
        <Card 
          name="REUMATOLOGICZNY"
          price="195 zł"

          items={[
            "OB",
            "morfologia",
            "kwas moczowy",
            "CRP",
            "ASO",
            "RF",
            "anty CCP",
            "ANA1",
          ]}
        />
        <Card 
          name="PRZED ZABIEGIEM"
          price="210 zł"

          items={[
            "HCV",
            "HBs przeciwciała",
            "OB",
            "morfologia",
            "PT",
            "APTT",
            "glukoza",
            "elektrolity",
            "kreatynina",
            "CRP",
            "grupa krwi",
          ]}
        />
        <Card 
          name="COVID"
          price="320 zł"
          badge="Popularne"
          items={[
            "Morfologia",
            "d-dimery",
            "próby wątrobowe",
            "dehydrogenaza mleczanowa (LDH)",
            "kreatynina",
            "CRP",
            "witamina D3",
            "przeciwciała anty-S SARS cov-2 ",
            "ilościowe IgG",
          ]}
        />
        
          <CardCompare 
            name="TARCZYCOWY"
            price="65 zł"
            price2="135 zł"
            price3="215 zł"

            badge="3 warianty"

            items={[
              "TSH",
              "FT3",
              "FT4"
            ]}

            items2={[
              "aTG",
              "aTPO"
            ]}

            items3={[
              "TRAb"
            ]}
          />

          <Card 
            price="135 zł"
            name="WIOSENNY"

            items={[
              "Mocz",
              "morfologia",
              "glukoza",
              "elektrolity",
              "cholesterol całkowity",
              "ALT",
              "AST",
              "GGTP",
              "kreatynina",
              "CRP",
              "witamina D3",
            ]}
            />

            <CardCompare 
              name="DLA KAŻDEGO"
              price="93 zł"
              price2="168 zł"
              price3="263 zł"

              items={[
                "Morfologia",
                "OB",
                "glukoza",
                "cholesterol całkowity",
                "ALT",
                "kreatynina",
                "CRP",
                "TSH"
              ]}

              items2={[
                "elektrolity",
                "lipidogram",
                "ggtp",
                "mocznik",
                "kwas moczowy",
                "żelazo",
              ]}

              items3={[
                "APTT",
                "PT",
                "Fibrynogen",
                "próby wątrobowe",
                "amylaza",
                "wapń",
                "magnez",
              ]}
            />

        </div>
        </div>
        </>
    );
}