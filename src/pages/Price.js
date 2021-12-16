import Collapse from "../components/Collapse";
import ListItem from "../components/list-item";

const Price = () => {
    return (<>
        <div className="container mb-5">
           
    <section className="slice slice-lg">
      <div className="container">
        <div className="mb-5 text-center">
          <span className="badge badge-soft-success badge-pill badge-lg">
            Cennik
          </span>
          <h3 className=" mt-4">Cennik</h3>
          <div className="fluid-paragraph mt-3">
            <p className="lead lh-180">Podany na stronie cennik zawiera ceny badań
                podstawowych i pakietów. W celu uzyskania
                informacji o cenach badań specjalistycznych
                prosimy o kontakt telefoniczny <a href="tel:692332349">692 332 349</a>.</p>
          </div>
        </div>
        
        </div>
    </section>
      <div className="row ">
        <div className="col-12 col-md-4">
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
        <Collapse title={"ZAKAŹNOŚĆ"}>
          <ListItem 
            name={"Koronawirus SARS COV-2 "}
            price={"118"} 
            desc={"przeciwciała neutralizujące anty-S (poziom przeciwciał po szczepieniu lub, przebytej infekcji) IgG-"}
            />
          <ListItem name={"Kiła"} desc={"WR"} price={"20"} />
          <ListItem name={"HCV"} desc={"przeciwciała"} price={"38"} />
          <ListItem name={"HBs"} desc={"antygen"} price={"25"} />
          <ListItem name={"HBs"} desc={"przeciwciała"} price={"38"} />
          <ListItem name={"HBc"} desc={"przeciwciała"} price={"60"} />
          <ListItem name={"HIV"} price={"35"} />
          <ListItem name={"Toxoplazmoza IgG"} price={"38"} />
          <ListItem name={"Toxoplazmoza IgM"} price={"38"} />
          <ListItem name={"Różyczka IgG"} price={"38"} />
          <ListItem name={"Różyczka IgM"} price={"38"} />
          <ListItem name={"Cytomegalia IgG"} price={"40"} />
          <ListItem name={"Cytomegalia IgM"} price={"40"} />
          <ListItem name={"Mycoplasma pneumoniae IgG"} price={"66"} />
          <ListItem name={"Mycoplasma pneumoniae IgM"} price={"66"} />
          <ListItem name={"Chlamydia pneumoniae  IgG"} price={"50"} />
          <ListItem name={"Chlamydia pneumoniae IgM"} price={"50"} />
          <ListItem name={"Chlamydia trachomatis IgG"} price={"55"} />
          <ListItem name={"Chlamydia Trachomatis IgM"} price={"55"} />
          <ListItem name={"Krztusiec IgG"} price={"55"} />
          <ListItem name={"Krztusiec IgM"} price={"55"} />
          <ListItem name={"Ospa IgG"} price={"56"} />
          <ListItem name={"Ospa IgM"} price={"56"} />
          <ListItem name={"Borrelia IgG"} price={"50"} />
          <ListItem name={"Borelia IgM"} price={"50"} />
        </Collapse>
        <Collapse title={"BADANIA KAŁU"}>
        <ListItem name={"Helicobacter pylori test przesiewowy"} price={"38"} />
        <ListItem name={"Lamblia"} desc={"antygen"} price={"30"} />
        <ListItem name={"Rota i adenowirus"} desc={"antygen"} price={"30"} />
        <ListItem name={"Norowirusy"} desc={"antygen"} price={"85"} />
        <ListItem name={"Pasożyty"} price={"15"} />
        <ListItem name={"Badanie ogólne/resztki pokarmowe"} price={"21"} />
        <ListItem name={"Krew utajona"} price={"17"} />
        <ListItem name={"Kalprotektyna"} price={"150"} />
        <ListItem name={"Elastaza trzustkowa"} price={"200"} />

        </Collapse>
        <Collapse title={"CYTOLOGIA"}>
        <ListItem name={"cytologia ginekologiczna"} price={"45"} />
        <ListItem name={"cytologia cienkowarstwowa LBC"} price={"90"} />
        <ListItem name={"p16 i Ki67"} desc={"ekspresja białek"} price={"280"} />
        <ListItem name={"LBC+Chlamydia trachomatis"} desc={"met.PCR"} price={"190"} />
        <ListItem name={"LBC+HPV (14 genotypów)+chlamydia trachomatis met. PCR"} price={"250"} />
        </Collapse> 
        </div>

        <div className="col-12 col-md-4">
        <Collapse title={"HORMONY"}>
          <ListItem name={"TSH"} price={"25"} />
          <ListItem name={"FT3"} price={"25"} />
          <ListItem name={"FT4"} price={"25"} />
          <ListItem name={"T3"} price={"21"} />
          <ListItem name={"T4"} price={"21"} />
          <ListItem name={"anty-TPO"} price={"35"} />
          <ListItem name={"anty-TG"} price={"35"} />
          <ListItem name={"TRAb"} price={"80"} />
          <ListItem name={"Tyreoglobulina"} price={"42"} />
          <ListItem name={"Insulina"} price={"42"} />
          <ListItem name={"FSH"} price={"30"} />
          <ListItem name={"LH"} price={"30"} />
          <ListItem name={"Estradiol"} price={"30"} />
          <ListItem name={"Progesteron"} price={"30"} />
          <ListItem name={"Prolaktyna"} price={"30"} />
          <ListItem name={"beta-HCG"} price={"32"} />
          <ListItem name={"wolna beta-HCG"} price={"56"} />
          <ListItem name={"białko PAPP-A"} price={"80"} />
          <ListItem name={"AMH"} price={"156"} />
          <ListItem name={"17-OH Progesteron"} price={"39"} />
          <ListItem name={"DHEA-SO4"} price={"45"} />
          <ListItem name={"DHEA"} price={"50"} />
          <ListItem name={"Androstendion"} price={"45"} />
          <ListItem name={"Testosteron"} price={"30"} />
          <ListItem name={"Testosteron wolny"} price={"59"} />
          <ListItem name={"SHBG"} price={"40"} />
          <ListItem name={"Parathormon"} price={"40"} />
          <ListItem name={"Kortyzol"} price={"40"} />
          <ListItem name={"ACTH"} price={"39"} />
          <ListItem name={"Aldosteron"} price={"50"} />
          <ListItem name={"Hormon wzrostu"} price={"38"} />
          <ListItem name={"IGF-1"} price={"70"} />
          
        </Collapse>
        <Collapse title={"ALERGIE"}>
          <ListItem name={"IgE"} price={"36"} />
          <ListItem name={"Panel mieszany"} price={"155"} />
          <ListItem name={"Panel pokarmowy"} price={"155"} />
          <ListItem name={"Panel oddechowy"} price={"155"} />

        </Collapse>
        <Collapse title={"BAKTERIOLOGIA (POSIEWY)"}>
        <ListItem name={"mocz"} price={"38"} />
        <ListItem name={"wymaz z gardła/migdałków"} price={"40"} />
        <ListItem name={"wymaz z nosa"} price={"40"} />
        <ListItem name={"wymaz z języka"} price={"40"} />
        <ListItem name={"plwocina"} price={"50"} />
        <ListItem name={"stopień czystości pochwy"} desc={"biocenoza"} price={"-"} />
        <ListItem name={"wymaz z pochwy"} price={"40"} />
        <ListItem name={"wymaz  kanału szyjki macicy"} price={"45"} />
        <ListItem name={"wymaz z pochwy i odbytu GBS"} price={"40"} />
        <ListItem name={"Kał"} price={"55"} />

        </Collapse>
        </div>

        <div className="col-12 col-md-4">
        <Collapse title={"MARKERY NOWOTWOROWE"}>
          <ListItem name={"PSA"} price={"38"} />
          <ListItem name={"test ROMA"} desc={"Ca125+HE4+ROMA"} price={"130"} />
          <ListItem name={"HE4"} price={"50"} />
          <ListItem name={"Ca125"} price={"39"} />
          <ListItem name={"CEA"} price={"40"} />
          <ListItem name={"AFP"} price={"45"} />
          <ListItem name={"Ca 19-9"} price={"39"} />
          <ListItem name={"Ca72-4"} price={"60"} />
          <ListItem name={"beta 2-mikroglobulina"} price={"60"} />
          <ListItem name={"Ca15-3"} price={"39"} />
          <ListItem name={"BRCA1"} price={"300"} />
          <ListItem name={"S100"} price={"48"} />
        </Collapse>
        <Collapse title={"UKŁAD KRZEPNIĘCIA"}>
        <ListItem name={"Antytrombina III"} price={"50"} />
        <ListItem name={"Białko C"} price={"85"} />
        <ListItem name={"Białko S"} price={"85"} />
        <ListItem name={"Czynnik V Leidena"} price={"200"} />

        </Collapse>
        <Collapse title={"BADANIA MYKOLOGICZNE ( GRZYBY)"}>
        <ListItem name={"mocz"} price={"45"} />
        <ListItem name={"wymaz z gardła/migdałków"} price={"42"} />
        <ListItem name={"kał"} price={"55"} />
        <ListItem name={"plwocina"} price={"50"} />
        <ListItem name={"nasienie"} price={"42"} />
        <ListItem name={"wymaz z pochwy"} price={"42"} />

        </Collapse>
        </div>

        </div>


        
        </div>
</>
    );
}

export default Price;