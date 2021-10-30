import { Fade } from "react-reveal";

export default function Card(props) {
    return (
        <Fade bottom>
        <div>
        <div class="card card-pricing border-0 text-center hover-translate-y-n3 bg-gradient-dark p-0">
    <div class="card-header py-0 border-0">
        {props.badge && <span class="h6 d-inline-block mx-auto px-4 py-1 rounded-bottom shadow-sm bg-primary text-white">{props.badge}</span> }
        <div class="py-5">
            <p class="h5 mb-0 text-white" data-pricing-value="15">{props.name}</p>
        </div>
    </div>
    <hr class="divider divider-fade divider-dark my-0" />
    <div class="card-body">
        <ul class="list-unstyled text-white mb-4">
            {props.items && props.items.map((el)=> {
                return <li>{el}</li>
            })}
        </ul>
        <p class="text-success">{props.price}</p>
    </div>
</div>
</div>
</Fade>
    );
}