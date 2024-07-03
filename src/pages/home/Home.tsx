import DownloadInfo from "@components/shared/DownloadInfo/DownloadInfo";
import "./Home.sass";

const textOne =
  "My name is Yaroslav and I am a Full Stack developer. For more detailedinformation about me, you can find out by downloading my resume. Also on this site you can see my projects and my little game and set your own record.";
const textTwo = "You can download the resume from the link below.";
const Home = () => {
  return (
    <div className="home-main-box">
      <DownloadInfo
        title={"Hello!"}
        textOne={textOne}
        textTwo={textTwo}
        download={"resume.pdf"}
        href={"/src/files/resume.pdf"}
      />
    </div>
  );
};

export default Home;
