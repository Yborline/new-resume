import { FC, memo } from "react";
import styles from "./ProjectFront.module.scss";
import TitleAnimation from "@components/shared/TitleAnimation/TitleAnimation";
import ButtonCard from "@components/shared/ButtonCard/ButtonCard";
import ImageComponent from "@components/widgets/ImageComponent/ImageComponent";

interface IPropsFront {
  name: string;
  img: string;
  link: string;
  project: "own" | "team";
  onClick: () => void;
}

export const FrontContentProject: FC<IPropsFront> = memo(
  ({ name, link, img, onClick }) => {
    return (
      <div className={styles.frontProject}>
        <div>
          <TitleAnimation text={name} />
          <a className={styles.linkFront} href={link}>
            <ImageComponent alt={name} img={img} />
          </a>
        </div>
        <ButtonCard onClick={onClick} text="More" />
      </div>
    );
  }
);
const areEqual = (prevProps: IPropsFront, nextProps: IPropsFront) => {
  console.log(prevProps.name === nextProps.name);
  console.log(prevProps.img === nextProps.img);
  console.log(prevProps.link === nextProps.link);
  console.log(prevProps.project === nextProps.project);
  console.log(prevProps.onClick === nextProps.onClick);

  return (
    prevProps.name === nextProps.name &&
    prevProps.img === nextProps.img &&
    prevProps.link === nextProps.link &&
    prevProps.project === nextProps.project &&
    prevProps.onClick === nextProps.onClick
  );
};
const FrontContentProjectMemoized = memo(FrontContentProject, areEqual);
export default FrontContentProjectMemoized;
