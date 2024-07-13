import { FC } from "react";
import styles from "./BackCard.module.scss";
interface IPropsBackCard {
  img: string;
  onClick: () => void;
}

const BackCard: FC<IPropsBackCard> = ({ onClick, img }) => {
  return (
    <div onClick={onClick}>
      <img className={styles.imgBack} src={img} />
    </div>
  );
};

export default BackCard;
