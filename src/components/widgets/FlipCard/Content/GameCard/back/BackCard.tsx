import { FC, memo } from "react";
import styles from "./BackCard.module.scss";
interface IPropsBackCard {
  img: string;
}

const BackCard: FC<IPropsBackCard> = memo(({ img }) => {
  return (
    <div className={styles.BoxQuestion}>
      <img className={styles.imgBack} src={img} />
    </div>
  );
});

const areEqual = (prevProps: IPropsBackCard, nextProps: IPropsBackCard) => {
  return prevProps.img === nextProps.img;
};

const MemoizedBackCard = memo(BackCard, areEqual);
export default MemoizedBackCard;
