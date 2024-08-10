import { FC, memo, ReactNode } from "react";
import styles from "./FlipCard.module.scss";

interface IPropsFlippy {
  frontContent: ReactNode;
  backContent: ReactNode;
  // onClick: () => void;
  styleCard?: string;
  isFlipped: boolean;
  id: number;
}

const FlippyCard: FC<IPropsFlippy> = ({
  frontContent,
  backContent,
  styleCard = "",
  isFlipped,
  id,
}) => {
  return (
    <div key={id} className={styles.cardContainer}>
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

const areEqual = (prevProps: IPropsFlippy, nextProps: IPropsFlippy) => {
  return (
    prevProps.styleCard === nextProps.styleCard &&
    prevProps.isFlipped === nextProps.isFlipped &&
    prevProps.frontContent === nextProps.frontContent &&
    prevProps.backContent === nextProps.backContent &&
    prevProps.id === nextProps.id
  );
};
const MemoizedFlippyCard = memo(FlippyCard, areEqual);

export default MemoizedFlippyCard;
