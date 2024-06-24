import "./Home.sass";

const Home = () => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">Hello!</h1>
        <p className="lead">
          My name is Yaroslav and I am a Full Stack developer. For more detailed
          information about me, you can find out by downloading my resume. Also
          on this site you can see my projects and my little game and set your
          own record.
        </p>
        <hr className="my-4" />
        <p>You can download the resume from the link below.</p>
        <a
          className="btn btn-primary btn-lg"
          href="/src/files/resume.pdf"
          download="resume.pdf"
          role="button"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Home;
