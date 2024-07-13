import styles from "./Project.module.scss";

export const frontContentProject = (front: React.ReactNode) => {
  return <div className={styles.frontProject}>{front}</div>;
};

export const backContentProject = (back: React.ReactNode) => {
  return <div className={styles.backProject}>{back}</div>;
};
