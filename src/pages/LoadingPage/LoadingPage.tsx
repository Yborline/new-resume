import styles from "./LoadingPage.module.scss";
import { Atom } from "react-loading-indicators";

const LodingPage = () => {
  return (
    <div className={styles.loading}>
      <Atom color="black" size="large" />
    </div>
  );
};

export default LodingPage;
