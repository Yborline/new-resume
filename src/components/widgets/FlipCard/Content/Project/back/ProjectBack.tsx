import { FC } from "react";
import styles from "./ProjectBack.module.scss";
import ButtonCard from "@components/shared/ButtonCard/ButtonCard";
import { Link } from "react-router-dom";

interface IPropsFront {
  frontend: string;
  backend?: string;
  info: string;
  technology: string[];

  onClick: () => void;
}

export const BackContentProject: FC<IPropsFront> = ({
  frontend,
  backend,
  info,
  technology,
  onClick,
}) => {
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
};
