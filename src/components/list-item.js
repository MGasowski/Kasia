export default function ListItem(props) {
    return (
        <div class="list-group-item  border-2">
        <div class="media align-items-center">

            <div class="media-body">
                <h6 class="text-sm d-block text-limit mb-0">{props.name}</h6>
                {props.price?<span class="d-block text-sm  text-muted">{props.desc}</span>:""}
            </div>
            <div class="media-body text-right">
                <span class="text-sm text-dark font-weight-bold ml-3">
                    {props.price} zł 
                </span>
            </div>
        </div>

    </div>
    );
}