import { Fade } from "react-reveal";

export default function CardCompare(props) {
  return (
    <Fade bottom>
      <div>
        <div className="card card-pricing border-0 text-center hover-translate-y-n3 bg-gradient-dark">
          <div className="card-header py-0 border-0">
            {props.badge && (
              <span className="h6 d-inline-block mx-auto px-4 py-1 rounded-bottom shadow-sm bg-primary text-white">
                {props.badge}
              </span>
            )}
            <div className="py-5">
              <p className="h5 mb-0 text-white" data-pricing-value="15">
                {props.name}
              </p>
            </div>
          </div>
          <hr className="divider divider-fade divider-dark my-0" />
          <div className="card-body">
            <ul className="list-unstyled text-white mb-4">
              {props.items &&
                props.items.map((el) => {
                  return <li key={el.name}>{el}</li>;
                })}
            </ul>
            <p className="text-success ">{props.price}</p>

            <ul className="list-unstyled text-white mb-4">
              {props.items2 &&
                props.items2.map((el) => {
                  return <li key={el.name}>{el}</li>;
                })}
            </ul>
            <p className="text-success ">{props.price2}</p>

            <ul className="list-unstyled text-white mb-4">
              {props.items3 &&
                props.items3.map((el) => {
                  return <li key={el.name}>{el}</li>;
                })}
            </ul>
            <p className="text-success ">{props.price3}</p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
