import React, { useState } from "react";
import FlippyCard from "@components/widgets/FlipCard/FlipCard";
import { FrontContentProject } from "@components/widgets/FlipCard/Content/Project/front/ProjectFront";
import styles from "./Project.module.scss";
import { projects } from "@data/projects.tsx";
import { BackContentProject } from "@components/widgets/FlipCard/Content/Project/back/ProjectBack";

const Projects = () => {
  const [flippedId, setFlippedId] = useState<number | null>(null);

  const handleClickFlip = (id: number) => {
    setFlippedId(id === flippedId ? null : id);
  };

  return (
    <div className={styles.project_mainBox}>
      <ul className={styles.project_listProject}>
        {projects.map(
          ({
            name,
            project,
            id,
            link,
            img,
            frontend,
            backend,
            info,
            technology,
          }) => (
            <li key={id} className={styles.project_ProjectItem}>
              <FlippyCard
                frontContent={
                  <FrontContentProject
                    name={name}
                    project={project}
                    link={link}
                    img={img}
                    onClick={() => handleClickFlip(id)}
                  />
                }
                backContent={
                  <BackContentProject
                    frontend={frontend}
                    backend={backend}
                    info={info}
                    technology={technology}
                    onClick={() => handleClickFlip(id)}
                  />
                }
                // Передача обработчика клика
                isFlipped={id === flippedId} // Передача состояния isFlipped
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Projects;
