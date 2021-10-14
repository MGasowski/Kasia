import { FaAngleUp } from "react-icons/fa";

export default function Spacer() {
    return (<>
        <div class="bg-primary" style={{width: "100%", height: 10}}></div>
        <div class="position-relative p-5 ">
    <a href="#onas" class=" tongue tongue-up tongue-primary">
        <FaAngleUp  class="animated infinite heartBeat delay-1s"/>
    </a>
</div>
    </>
    );
}