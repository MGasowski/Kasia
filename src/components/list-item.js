export default function ListItem(props) {
  return (
    <div className="list-group-item  border-2">
      <div className="media align-items-center">
        <div className="media-body">
          <h6 className="text-sm d-block text-limit mb-0">{props.name}</h6>
          {props.price ? (
            <span className="d-block text-sm  text-muted">{props.desc}</span>
          ) : (
            ""
          )}
        </div>
        <div className="media-body text-right">
          <span className="text-sm text-dark font-weight-bold ml-3">
            {props.price} zł
          </span>
        </div>
      </div>
    </div>
  );
}
