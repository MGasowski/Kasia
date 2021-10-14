import { useState } from "react";

export default function Collapse(props) {
    const [collapse, setCollapse] = useState(true);
    return (
        <div class="card mb-0">
        <div class="card-header bg-primary  py-4" id="heading-1-1" data-toggle="collapse" role="button" data-target="#collapse-1-1" aria-expanded="false" aria-controls="collapse-1-1" onClick={()=>setCollapse(prevCount => !prevCount)}>
            <h6 class="mb-0 text-white">{props.title}</h6>
        </div>
        <div id="collapse-1-1" className={`${collapse? "collapse": "collapse-show"}`} aria-labelledby="heading-1-1" data-parent="#accordion-1" >
           {props.children}
        </div>
    </div>
    );
}