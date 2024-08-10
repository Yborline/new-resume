import { FC, memo } from "react";
import styles from "./ProjectBack.module.scss";
import ButtonCard from "@components/shared/ButtonCard/ButtonCard";

interface IPropsFront {
  frontend: string;
  backend?: string;
  info: string;
  technology: string[];

  onClick: () => void;
}

const BackContentProject: FC<IPropsFront> = memo(
  ({ frontend, backend, technology, onClick }) => {
    const stringStack = technology.join(", ");

    return (
      <div className={styles.backProject}>
        <p className={styles.titleCode}>CODE</p>
        <div className={styles.boxButton}>
          <a className={styles.buttonCode} href={frontend}>
            Front end
          </a>
          {backend && (
            <a className={styles.buttonCode} href={backend}>
              Back end
            </a>
          )}
        </div>

        <p className={styles.titleTwo}>technology </p>
        <p className={styles.listTechnology}>{stringStack}</p>

        <ButtonCard onClick={onClick} text="Back" />
      </div>
    );
  }
);
const areEqual = (prevProps: IPropsFront, nextProps: IPropsFront) => {
  console.log(prevProps.frontend === nextProps.frontend);
  console.log(prevProps.backend === nextProps.backend);
  console.log(prevProps.info === nextProps.info);
  console.log(prevProps.technology === nextProps.technology);
  console.log(prevProps.onClick === nextProps.onClick);
  return (
    prevProps.frontend === nextProps.frontend &&
    prevProps.backend === nextProps.backend &&
    prevProps.info === nextProps.info &&
    prevProps.technology === nextProps.technology
  );
};

const BackContentProjectMemoized = memo(BackContentProject, areEqual);
export default BackContentProjectMemoized;
