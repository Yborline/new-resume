// import { useEffect } from "react";
//   useEffect(() => {
//     const orbit1 = document.querySelector(`.${styles.orbit1}`) as HTMLElement;
//     const orbit2 = document.querySelector(`.${styles.orbit2}`) as HTMLElement;

//     if (orbit1 && orbit2) {
//       const pauseAnimation = () => {
//         orbit1.style.animationPlayState = "paused";
//         orbit2.style.animationPlayState = "paused";
//       };

//       const resumeAnimation = () => {
//         orbit1.style.animationPlayState = "running";
//         orbit2.style.animationPlayState = "running";
//       };

//       orbit1.addEventListener("mouseover", pauseAnimation);
//       orbit1.addEventListener("mouseout", resumeAnimation);
//       orbit2.addEventListener("mouseover", pauseAnimation);
//       orbit2.addEventListener("mouseout", resumeAnimation);

//       // Clean up the event listeners when the component unmounts
//       return () => {
//         orbit1.removeEventListener("mouseover", pauseAnimation);
//         orbit1.removeEventListener("mouseout", resumeAnimation);
//         orbit2.removeEventListener("mouseover", pauseAnimation);
//         orbit2.removeEventListener("mouseout", resumeAnimation);
//       };
//     }
//   }, []);

import styles from "./Contacts.module.scss";
import { socials } from "@data/contacts";

const Contacts = () => {
  return (
    <div className={styles.mainBox}>
      <div className={styles.circleBox}>
        {socials.map(({ id, src, link }) => {
          let translateValue = 0;
          if (id === 1) translateValue = id * 100;
          else translateValue = id * 80;

          return (
            <div
              key={id}
              className={styles.donut}
              style={{
                height: `${translateValue * 2}px`,
                width: `${translateValue * 2}px`,
              }}
            >
              <a href={link}>
                <img
                  className={`${styles[`circle${id}`]} ${styles.circle1Pos} ${
                    styles[`orbit${id}`]
                  }`}
                  src={src}
                  style={
                    {
                      "--orbit-translate": `${translateValue}px`,
                    } as React.CSSProperties
                  }
                />
              </a>
            </div>
          );
        })}
        {/* 
      <figure
        className={`${styles.circle1} ${styles.circle1Pos} ${styles.orbit1}`}
      ></figure>
      <figure
        className={`${styles.circle2} ${styles.circle2Pos} ${styles.orbit2}`}
      ></figure> */}
        {/* <figure
        className={`${styles.circle1} ${styles.circle1Pos} ${styles.orbit1}`}
      ></figure>
      <figure
        className={`${styles.circle2} ${styles.circle2Pos} ${styles.orbit2}`}
      ></figure> */}
        <figure className={styles.circle}></figure>
      </div>
    </div>
  );
};

export default Contacts;
