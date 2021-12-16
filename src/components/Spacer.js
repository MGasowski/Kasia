import { FaAngleUp } from "react-icons/fa";

export default function Spacer() {
  return (
    <>
      <div className="bg-primary" style={{ width: "100%", height: 10 }}></div>
      <div className="position-relative p-5 ">
        <a href="#onas" className=" tongue tongue-up tongue-primary">
          <FaAngleUp className="animated infinite heartBeat delay-1s" />
        </a>
      </div>
    </>
  );
}
