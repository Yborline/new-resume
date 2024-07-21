import React, { FC, ReactNode } from "react";
import styles from "./FlipCard.module.scss";

interface IPropsFlippy {
  frontContent: ReactNode;
  backContent: ReactNode;
  // onClick: () => void;
  styleCard?: string;
  isFlipped: boolean;
}

const FlippyCard: FC<IPropsFlippy> = ({
  frontContent,
  backContent,
  styleCard = "",
  isFlipped,
}) => {
  // const [isFlipped, setIsFlipped] = useState(false);
  // const handleClickFlip = () => {
  //   setIsFlipped(!isFlipped);
  // };

  return (
    <div className={styles.cardContainer}>
      <div
        className={`${styles.card} ${styles[styleCard]} ${
          isFlipped ? styles.flipped : ""
        }`}
      >
        <div className={styles.front}>{frontContent}</div>
        <div className={styles.back}>{backContent}</div>
      </div>
    </div>
  );
};

export default FlippyCard;
