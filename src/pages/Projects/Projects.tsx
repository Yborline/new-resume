// import { memo, useCallback, useState } from "react";
// import FlippyCard from "@components/widgets/FlipCard/FlipCard";
// import FrontContentProject from "@components/widgets/FlipCard/Content/Project/front/ProjectFront";
// import styles from "./Project.module.scss";
// import { projects } from "@data/projects.tsx";
// import BackContentProject from "@components/widgets/FlipCard/Content/Project/back/ProjectBack";

// const Projects = () => {
//   const [flippedId, setFlippedId] = useState<number | null>(null);
//   const handleClickFlip = useCallback((id: number) => {
//     setFlippedId((prevId) => (prevId === id ? null : id));
//   }, []);

//   const getClickHandler = useCallback(
//     (id: number) => {
//       return () => handleClickFlip(id);
//     },
//     [handleClickFlip]
//   );
//   console.log(flippedId);
//     console.log(`getClickHandler(1) === getClickHandler(1)`);
//   console.log(handleClickFlip(1) === handleClickFlip(1));
//   return (
//     <div className={styles.project_mainBox}>
//       <ul className={styles.project_listProject}>
//         {projects.map(
//           ({
//             name,
//             project,
//             id,
//             link,
//             img,
//             frontend,
//             backend,
//             info,
//             technology,
//           }) => (
//             <li key={id} className={styles.project_ProjectItem}>
//               <FlippyCard
//                 frontContent={
//                   <FrontContentProject
//                     name={name}
//                     project={project}
//                     link={link}
//                     img={img}
//                     onClick={getClickHandler(id)}
//                   />
//                 }
//                 backContent={
//                   <BackContentProject
//                     frontend={frontend}
//                     backend={backend}
//                     info={info}
//                     technology={technology}
//                     onClick={getClickHandler(id)}
//                   />
//                 }
//                 id={id}
//                 isFlipped={id === flippedId}
//               />
//             </li>
//           )
//         )}
//       </ul>
//     </div>
//   );
// };

// const MemoizedProjects = memo(Projects);
// export default MemoizedProjects;

import { memo, useMemo, useState } from "react";
import FlippyCard from "@components/widgets/FlipCard/FlipCard";
import FrontContentProject from "@components/widgets/FlipCard/Content/Project/front/ProjectFront";
import styles from "./Project.module.scss";
import { projects } from "@data/projects.tsx";
import BackContentProject from "@components/widgets/FlipCard/Content/Project/back/ProjectBack";

const Projects = () => {
  const [flippedId, setFlippedId] = useState<number | null>(null);

  const clickHandlers = useMemo(() => {
    const handlers = new Map<number, () => void>();
    const handleClickFlip = (id: number) => {
      setFlippedId((prevId) => (prevId === id ? null : id));
    };

    projects.forEach(({ id }) => {
      handlers.set(id, () => handleClickFlip(id));
    });

    return handlers;
  }, []);

  const frontContents = useMemo(() => {
    return projects.map((project) => (
      <FrontContentProject
        key={`front-${project.id}`}
        name={project.name}
        project={project.project}
        link={project.link}
        img={project.img}
        onClick={clickHandlers.get(project.id) || (() => {})}
      />
    ));
  }, [clickHandlers]);

  const backContents = useMemo(() => {
    return projects.map((project) => (
      <BackContentProject
        key={`back-${project.id}`}
        frontend={project.frontend}
        backend={project.backend}
        info={project.info}
        technology={project.technology}
        project={project.project}
        onClick={clickHandlers.get(project.id) || (() => {})}
      />
    ));
  }, [clickHandlers]);

  return (
    <div className={styles.project_mainBox}>
      <ul className={styles.project_listProject}>
        {projects.map(({ id }) => (
          <li key={id} className={styles.project_ProjectItem}>
            <FlippyCard
              frontContent={frontContents.find(
                (content) => content.key === `front-${id}`
              )}
              backContent={backContents.find(
                (content) => content.key === `back-${id}`
              )}
              id={id}
              isFlipped={id === flippedId}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

const MemoizedProjects = memo(Projects);
export default MemoizedProjects;
