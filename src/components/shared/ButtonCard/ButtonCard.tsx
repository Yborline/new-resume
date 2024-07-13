import { FC } from "react";
import "./ButtonCard.scss";
import SvgArrow from "./svgArrow/SvgArrow";

interface IPropsButtonCard {
  onClick: () => void;
  text: string;
}

const ButtonCard: FC<IPropsButtonCard> = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className="button_arrow-animation">
      <span className="button_arrow-span-one">{text}</span>
      {/* <span className="button_arrow-span-second"> */}
      <SvgArrow />
      {/* </span> */}
    </button>
  );
};

export default ButtonCard;
