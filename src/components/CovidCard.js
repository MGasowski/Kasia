export default function CovidCard() {
  return (
    <div className="card border border-success shadow-lg" id="card-summary">
      <div className="card-header py-3">
        <div className="row align-items-center">
          <div className="col-6">
            <span className="h6">Oferta Covid-19</span>
          </div>
          <div className="col-6 text-right">
            <span className="badge badge-pill badge-soft-success">5</span>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-8">
            <div className="media align-items-center">
              <div className="media-body">
                <div className="text-limit lh-100">
                  <small className="font-weight-bold mb-0">
                    Badanie poziomu <br />
                    przeciwciał anty-S
                  </small>
                </div>
                <small className="text-muted ">badanie z krwi</small>
              </div>
            </div>
          </div>
          <div className="col-4 text-right lh-100">
            <small className="text-dark ">118 zł</small>
          </div>
        </div>
        <div className="row mt-3 pt-3 delimiter-top">
          <div className="col-8">
            <div className="media align-items-center">
              <div className="media-body">
                <div className="text-limit lh-100">
                  <small className="font-weight-bold mb-0">Wymaz PCR</small>
                </div>
                <small className="text-muted">wynik do 24 h</small>
              </div>
            </div>
          </div>
          <div className="col-4 text-right lh-100">
            <small className="text-dark">390 zł</small>
          </div>
        </div>

        <div className="row mt-3 pt-3 delimiter-top">
          <div className="col-8">
            <div className="media align-items-center">
              <div className="media-body">
                <div className="text-limit lh-100">
                  <small className="font-weight-bold mb-0">
                    Wymaz PCR express{" "}
                  </small>
                </div>
                <small className="text-muted">wynik do 6 godzin</small>
              </div>
            </div>
          </div>
          <div className="col-4 text-right lh-100">
            <small className="text-dark">690 zł</small>
          </div>
        </div>

        <div className="row mt-3 pt-3 delimiter-top">
          <div className="col-8">
            <div className="media align-items-center">
              <div className="media-body">
                <div className="text-limit lh-100">
                  <small className="font-weight-bold mb-0">
                    Pobranie wybranego <br /> badania w domu{" "}
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 text-right lh-100">
            <small className="text-dark">30 zł</small>
          </div>
        </div>

        <div className="row mt-3 pt-3 delimiter-top">
          <div className="col-8">
            <div className="media align-items-center">
              <div className="media-body">
                <div className="text-limit lh-100">
                  <small className="font-weight-bold mb-0">
                    Tłumaczenie na wybrany język{" "}
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 text-right lh-100">
            <small className="text-dark">50 zł</small>
          </div>
        </div>
      </div>
    </div>
  );
}
