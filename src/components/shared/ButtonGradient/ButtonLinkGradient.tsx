import { FC, memo } from "react";
import styles from "./ButtonLinkGradient.module.scss";

interface IPropsButton {
  text: string;
  href: string;
  download: string;
}

const ButtonLinkGradient: FC<IPropsButton> = ({ text, href, download }) => {
  return (
    <a href={href} download={download} className={styles.button} role="button">
      {text}
      <span></span>
    </a>
  );
};
const MemoizedButtonLinkGradient = memo(ButtonLinkGradient);
export default MemoizedButtonLinkGradient;
