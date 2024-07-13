import { FC } from "react";
import styles from "./ProjectFront.module.scss";
import TitleAnimation from "@components/shared/TitleAnimation/TitleAnimation";
import ButtonCard from "@components/shared/ButtonCard/ButtonCard";

interface IPropsFront {
  name: string;
  img: string;
  link: string;
  project: "own" | "team";
  onClick: () => void;
}

export const FrontContentProject: FC<IPropsFront> = ({
  name,
  img,
  link,
  onClick,
}) => {
  return (
    <div className={styles.frontProject}>
      <div>
        <TitleAnimation text={name} />
        <a className={styles.linkFront} href={link}>
          <img className={styles.imgFront} src={img} />
        </a>
      </div>
      <ButtonCard onClick={onClick} text="More" />
    </div>
  );
};
