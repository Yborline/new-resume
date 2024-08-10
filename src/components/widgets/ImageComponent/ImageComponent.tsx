import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "./ImageComponent.module.scss";

interface IImgProps {
  img: string;
  alt: string;
  newClass?: "standart";
}

const ImageComponent: FC<IImgProps> = ({ img, alt, newClass = "standart" }) => {
  return (
    <LazyLoadImage
      alt={alt}
      effect="blur"
      className={`${styles[newClass]}`}
      wrapperProps={{
        // If you need to, you can tweak the effect transition using the wrapper style.
        style: { transitionDelay: "1s" },
      }}
      src={img}
    />
  );
};

export default ImageComponent;
