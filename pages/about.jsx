import toast, {Toaster} from "react-hot-toast";

const AboutPage = () => {
  const notifier = (name) => {
    toast(name, {
      duration: 2000,
    });
  };

  return (
    <div className=" flex flex-col  lg:flex-row  align-middle divhead ">
      <img src="/anuj2.jpeg" alt="" className="rounded-full lg:w-[40%] h-auto mx-4 s mt-3 lg:mt-0 imghead " />
      <Toaster position="top-right" reverseOrder={false} />
      <div className=" textbars">
        <h1>About</h1>
        <h3 className=" flex text-justify  mx-2 my-5 lg:my-0  lg:mx-0  hhead ">
          Passionate about the harmonious interplay of code and creativity, I am a detail-oriented Computer Science graduate on an unwavering journey toward securing an entry-level Full Stack Developer | Software Developer position .
          <br />
          <br /> With a proficiency in both frontend and backend development, coupled with a mastery of Full-Stack programming, I bring a versatile fusion of technical prowess and creative problem-solving to the forefront.
          <br />
          <br />
          Alongside my technical skills, my diverse hobbies, including e-sports, and football, reading reflect adaptability and strategic thinking. Known for leadership and effective time management.
        </h3>

        <h1 className="skillh">Skills</h1>

        <section className="imgsection">
          <img src="/docker.svg" alt="" className="imgabout" onClick={() => notifier("Docker")} />
          <img src="/c-original.svg" alt="" className="imgabout" onClick={() => notifier("C")} />
          <img src="/cpp.svg" alt="" className="imgabout" onClick={() => notifier("Cpp")} />
          <img src="/python-original.svg" alt="" className="imgabout" onClick={() => notifier("Python")} />
          <img src="/html5-original.svg" alt="" className="imgabout" onClick={() => notifier("HTML")} />
          <img src="/css3-plain-wordmark.svg" alt="" className="imgabout" onClick={() => notifier("CSS")} />
          <img src="/javascript-original.svg" alt="" className="imgabout" onClick={() => notifier("Javascript")} />
          <img src="/typescript-original.svg" alt="" className="imgabout" onClick={() => notifier("Typescript")} />
          <img src="/react-original-wordmark.svg" alt="" className="imgabout" onClick={() => notifier("React.js")} />
          <img src="/redux-original.svg" alt="" className="imgabout" onClick={() => notifier("Redux")} />
          <img src="/nextjs-plain.svg" alt="" className="imgabout" onClick={() => notifier("Next.js")} />
          <img src="/nodejs-original-wordmark.svg" alt="" className="imgabout" onClick={() => notifier("NodeJS")} />
          <img src="/express-original.svg" alt="" className="imgabout" onClick={() => notifier("Express.js")} />
          <img src="/git.svg" alt="" className="imgabout" onClick={() => notifier("Git")} />
          <img src="/github-original.svg" alt="" className="imgabout" onClick={() => notifier("Github")} />
          <img src="/firebase-plain-wordmark.svg" alt="" className="imgabout" onClick={() => notifier("Firebase")} />
          <img src="/redis-original.svg" alt="" className="imgabout" onClick={() => notifier("Redis")} />
          <img src="/postgresql-original.svg" alt="" className="imgabout" onClick={() => notifier("PostgreSQL")} />
          <img src="/mysql-original-wordmark.svg" alt="" className="imgabout" onClick={() => notifier("Mysql")} />
          <img src="/mongodb-original.svg" alt="" className="imgabout" onClick={() => notifier("Mongodb")} />
        </section>

        <div className="skillh resume">
          <h1>Resume </h1>
          <a href={process.env.RESUME_LINK} target="_blank" className="linkres">
            anujsingh.resume
          </a>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {title: "About"},
  };
}

export default AboutPage;
