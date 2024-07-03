import "./Project.module.scss";
import ReactFlipCard from "reactjs-flip-card";

const Project = () => {
  const styles = {
    card: { background: "blue", color: "white", borderRadius: 20 },
  };

  return (
    <ReactFlipCard
      frontStyle={styles.card}
      backStyle={styles.card}
      frontComponent={<div>Hover me!</div>}
      backComponent={<div>Back!</div>}
    />
  );
};

export default Project;
