import { FC } from "react";
import styles from "./TitleAnimation.module.scss";

interface IPropsTitleAnim {
  text: string;
  modifier?: string;
}

const TitleAnimation: FC<IPropsTitleAnim> = ({ text, modifier }) => {
  return (
    <h2
      className={`${styles.titleAnimation} ${styles[modifier as string]}`}
      data-text={text}
    >
      {text}
    </h2>
  );
};

export default TitleAnimation;
