import questionImg from "@assets/images/games/question.png";
import styles from "./FrontCard.module.scss";
import { FC, memo } from "react";

interface IPropsFrontCard {}

const FrontCard: FC<IPropsFrontCard> = () => {
  return (
    <div className={styles.BoxQuestion}>
      <img className={styles.imgQuestion} src={questionImg} />
    </div>
  );
};

const MemoizedFrontCard = memo(FrontCard);
export default MemoizedFrontCard;
