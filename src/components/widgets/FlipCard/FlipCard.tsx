import React, { FC, ReactNode } from "react";
import styles from "./FlipCard.module.scss";

interface IPropsFlippy {
  frontContent: ReactNode;
  backContent: ReactNode;
  // onClick: () => void;
  isFlipped: boolean;
}

const FlippyCard: FC<IPropsFlippy> = ({
  frontContent,
  backContent,
  // onClick,
  isFlipped,
}) => {
  // const [isFlipped, setIsFlipped] = useState(false);
  // const handleClickFlip = () => {
  //   setIsFlipped(!isFlipped);
  // };

  return (
    <div className={styles.cardContainer}>
      <div className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}>
        <div className={styles.front}>
          {frontContent}
          {/* <h1>Front</h1> */}
        </div>
        <div className={styles.back}>
          {backContent}
          {/* <h1>Back</h1> */}
        </div>
      </div>
    </div>
  );
};

export default FlippyCard;
