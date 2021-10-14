import Collapse from "../components/Collapse";
import ListItem from "../components/list-item";

const Price = () => {
    return (
        <div class="container mb-5">
           
    <section class="slice slice-lg">
      <div class="container">
        <div class="mb-5 text-center">
          <span class="badge badge-soft-success badge-pill badge-lg">
            Cennik
          </span>
          <h3 class=" mt-4">Cennik</h3>
          <div class="fluid-paragraph mt-3">
            <p class="lead lh-180">Podany na stronie cennik zawiera ceny badań
                podstawowych i pakietów. W celu uzyskania
                informacji o cenach badań specjalistycznych
                prosimy o kontakt telefoniczny 692332349.</p>
          </div>
        </div>
        
        </div>
    </section>

        <Collapse title={"BADANIA KRWI"}>
            <ListItem name={"Morfologia"} price={"13"} />
            <ListItem name={"Rozmaz ręczny"} price={"10"} />
            <ListItem name={"Retikulocyty"} price={"60"} />
            <ListItem name={"Grupa krwi"} price={"38"} />
            <ListItem name={"OB"} price={"10"} />
            <ListItem name={"CRP"} price={"19"} />
            <ListItem name={"PT"} price={"13"} desc={"(INR)"} />
            <ListItem name={"APTT"} price={"13"} />
            <ListItem name={"Fibrynogen"} price={"18"} />
            <ListItem name={"D-dimety"} price={"40"} />
            <ListItem name={"Glukoza"} price={"10"} />
            <ListItem name={"Hemoglobina glikowana "} price={"32"} desc={"(HbA1c)"}/>
            <ListItem name={"Kreatynina"} price={"12"} />
            <ListItem name={"Mocznik"} price={"12"} />
            <ListItem name={"Kwas moczowy"} price={"12"} />
            <ListItem name={"Lipidogram"} price={"38"} desc={"(cholesterol,HDL,LDL,TG)"} />
            <ListItem name={"Cholesterol całkowity"} price={"10"} />
            <ListItem name={"Cholesterol HDL"} price={"10"} />
            <ListItem name={"Cholestrol LDL"} price={"10"} />
            <ListItem name={"Trójglicerydy"} price={"12"} />
            <ListItem name={"Homocysteina"} price={"59"} />
            <ListItem name={"Lipoproteina"} price={"110"}  desc={"Lp(a)"}/>
            <ListItem name={"Próby wątrobowe "} price={"50"}  desc={"(ALT,AST,ALP,GGTP,BIL)"}/>
            <ListItem name={"ALT"} price={"12"} />
            <ListItem name={"AST"} price={"12"} />
            <ListItem name={"ALP"} price={"15"} />
            <ListItem name={"GGTP"} price={"13"} />
            <ListItem name={"LDH"} price={"19"} />
            <ListItem name={"Cholinoesteraza"} price={"30"} />
            <ListItem name={"Bilirubina całkowita"} price={"12"} />
            <ListItem name={"Bilirubina związana"} price={"12"} desc={"(Bezpośrednia)"} />
            <ListItem name={"Bilirubina wolna"} price={"15"} desc={"(Pośrednia)"} />
            <ListItem name={"Kwasy żółciowe"} price={"50"} />
            <ListItem name={"Lipaza"} price={"16"} />
            <ListItem name={"Amylaza"} price={"15"} />
            <ListItem name={"Elektrolity"} price={"15"} desc={"(Sód, Potas)"}/>
            <ListItem name={"Potas"} price={"10"} />
            <ListItem name={"Chlorki"} price={"12"} />
            <ListItem name={"Wapń całkowity"} price={"12"} />
            <ListItem name={"Fosfor nieorganiczny"} price={"12"} />
            <ListItem name={"Magnez"} price={"12"} />
            <ListItem name={"Żelazo"} price={"10"} />
            <ListItem name={"Ferrytyna"} price={"38"} />
            <ListItem name={"Transferyna"} price={"46"} />
            <ListItem name={"TIBC"} price={"20"} />
            <ListItem name={"UIBC"} price={"20"} />
            <ListItem name={"Witamina B12"} price={"39"} />
            <ListItem name={"Kwas foliowy"} price={"40"} />
            <ListItem name={"Białko całkowite"} price={"12"} />
            <ListItem name={"Albumina"} price={"12"} />
            <ListItem name={"Proteinogram"} price={"25"} />
            <ListItem name={"IgE Całkowite"} price={"36"} />
            <ListItem name={"CK"} price={"22"} />
            <ListItem name={"CK-MB"} price={"30"} />
            <ListItem name={"Prokalcytonina"} price={"95"} />
            <ListItem name={"ASO"} price={"20"} />
            <ListItem name={"RF"} price={"17"} />
            <ListItem name={"Odczyn Waalera-Rosego anty-CCP"} price={"18"} />
            <ListItem name={"HLA  B27"} price={"200"} />
            <ListItem name={"Witamina D "} price={"68"} desc={"[25(OH)D]"}/>
            <ListItem name={"Kalcytonina"} price={"60"} />
            <ListItem name={"Fosfataza kwaśna"} price={"13"} />
        </Collapse>
        
        <Collapse title={"HORMONY"}></Collapse>
        <Collapse title={"MARKERY NOWOTWOROWE"}></Collapse>
        <Collapse title={"ZAKAŹNOŚĆ"}></Collapse>
        <Collapse title={"ALERGIE"}></Collapse>
        <Collapse title={"UKŁAD KRZEPNIĘCIA"}></Collapse>
        <Collapse title={"BADANIA KAŁU"}></Collapse>
        <Collapse title={"BAKTERIOLOGIA (POSIEWY)"}></Collapse>
        <Collapse title={"BADANIA MYKOLOGICZNE ( GRZYBY)"}></Collapse>
        <Collapse title={"CYTOLOGIA"}></Collapse>   

        </div>
    );
}

export default Price;