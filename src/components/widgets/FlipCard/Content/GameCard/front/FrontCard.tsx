import questionImg from "@assets/images/games/question.png";
import styles from "./FrontCard.module.scss";
import { FC } from "react";

interface IPropsFrontCard {
  onClick: () => void;
}

const FrontCard: FC<IPropsFrontCard> = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <img className={styles.imgQuestion} src={questionImg} />
    </div>
  );
};

export default FrontCard;
