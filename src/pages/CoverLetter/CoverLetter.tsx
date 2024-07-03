// import DownloadInfo from "@components/shared/DownloadInfo/DownloadInfo";
import DownloadInfo from "@components/shared/DownloadInfo/DownloadInfo";

const textOne = "To see more information about me, please see my cover letter.";
const textTwo = "You can download the cover letter from the link below.";
const CoverLetter = () => {
  return (
    <div className="letter_main-box">
      <DownloadInfo
        title={"Cover letter!"}
        textOne={textOne}
        textTwo={textTwo}
        download={"coverLetter.pdf"}
        href={"/src/files/CoverLetter.pdf"}
      />
    </div>
  );
};

export default CoverLetter;
