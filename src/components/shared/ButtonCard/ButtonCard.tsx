import { FC, memo } from "react";
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
      <SvgArrow />
    </button>
  );
};

const MemoizedButtonCard = memo(ButtonCard);

export default MemoizedButtonCard;
