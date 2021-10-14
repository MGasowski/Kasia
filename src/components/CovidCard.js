export default function CovidCard() {
    return (
        <div class="card border border-success shadow-lg" id="card-summary">
    <div class="card-header py-3">
        <div class="row align-items-center">
            <div class="col-6">
                <span class="h6">Oferta Covid-19</span>
            </div>
            <div class="col-6 text-right">
                <span class="badge badge-pill badge-soft-success">5</span>
            </div>
        </div>
    </div>
    <div class="card-body">
        <div class="row">
            <div class="col-8">
                <div class="media align-items-center">
                    <div class="media-body">
                        <div class="text-limit lh-100">
                            <small class="font-weight-bold mb-0">Badanie poziomu <br />przeciwciał anty-S</small>
                        </div>
                        <small class="text-muted ">badanie z krwi</small>
                    </div>
                </div>
            </div>
            <div class="col-4 text-right lh-100">
                <small class="text-dark " >118 zł</small>
            </div>
        </div>
        <div class="row mt-3 pt-3 delimiter-top">
            <div class="col-8">
                <div class="media align-items-center">
                    <div class="media-body">
                        <div class="text-limit lh-100">
                            <small class="font-weight-bold mb-0">Wymaz PCR</small>
                        </div>
                        <small class="text-muted">wynik do 24 h</small>
                    </div>
                </div>
            </div>
            <div class="col-4 text-right lh-100">
                <small class="text-dark">390 zł</small>
            </div>
        </div>

        <div class="row mt-3 pt-3 delimiter-top">
            <div class="col-8">
                <div class="media align-items-center">
                    <div class="media-body">
                        <div class="text-limit lh-100">
                            <small class="font-weight-bold mb-0">Wymaz PCR express </small>
                        </div>
                        <small class="text-muted">wynik do 6 godzin</small>
                    </div>
                </div>
            </div>
            <div class="col-4 text-right lh-100">
                <small class="text-dark">690 zł</small>
            </div>
        </div>
               
        <div class="row mt-3 pt-3 delimiter-top">
            <div class="col-8">
                <div class="media align-items-center">
                    <div class="media-body">
                        <div class="text-limit lh-100">
                            <small class="font-weight-bold mb-0">Pobranie wybranego <br /> badania w domu </small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4 text-right lh-100">
                <small class="text-dark">30 zł</small>
            </div>
        </div>

        <div class="row mt-3 pt-3 delimiter-top">
            <div class="col-8">
                <div class="media align-items-center">
                    <div class="media-body">
                        <div class="text-limit lh-100">
                            <small class="font-weight-bold mb-0">Tłumaczenie na wybrany język </small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4 text-right lh-100">
                <small class="text-dark">50 zł</small>
            </div>
        </div>
    </div>
</div>
    );
}