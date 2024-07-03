import { FC } from "react";
import "./DownloadInfo.sass";

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
      <a
        className="btn btn-primary btn-lg"
        href={href}
        download={download}
        role="button"
      >
        Download
      </a>
    </div>
  );
};

export default DownloadInfo;
