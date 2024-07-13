import { FC } from "react";
import "./DownloadInfo.sass";

import ButtonLinkGradient from "@components/shared/ButtonGradient/ButtonLinkGradient";

interface IPropsDownload {
  title: string;
  textOne: string;
  textTwo: string;
  href: string;
  download: string;
}

const DownloadInfo: FC<IPropsDownload> = ({
  title,
  textOne,
  textTwo,
  href,
  download,
}) => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">{title}</h1>
      <p className="lead">{textOne}</p>
      <hr className="my-4" />
      <p>{textTwo}</p>
      <ButtonLinkGradient href={href} download={download} text="Download" />
    </div>
  );
};

export default DownloadInfo;
