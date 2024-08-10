import { useEffect } from "react";
import styles from "./Contacts.module.scss";
import { socials } from "@data/contacts";

const Contacts = () => {
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

  return (
    <div className={styles.donut}>
      {socials.map(({ id, src, link }) => (
        <a key={id} href={link}>
          <img
            className={`${styles[`circle${id}`]} ${styles.circle1Pos} ${
              styles[`orbit${id}`]
            }`}
            src={src}
          />
        </a>
      ))}
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
  );
};

export default Contacts;
