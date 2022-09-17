import img from "../img/img.jpg";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { useVariants, useLanguage } from "../hooks";
import { en, es } from "../constans";
import { motion } from "framer-motion";

const options = [
  {
    icon: <FaFacebookSquare style={{ height: "28px" }} />,
    link: "https://www.facebook.com/cesarmiguel.casadiegocanas",
  },
  {
    icon: <FaTwitterSquare style={{ height: "28px" }} />,
    link: "https://twitter.com/Cesar29268814",
  },
  {
    icon: <FaLinkedin style={{ height: "28px" }} />,
    link: "https://www.linkedin.com/in/cesar-casadiego-949994149/",
  },
];
const Home = () => {
  const { textEnter, textLeave } = useVariants();
  const { language } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.3,
        },
      }}
      exit={{ opacity: 0 }}
      className="tokyo_tm_home"
    >
      <div className="home_content">
        <div className="avatar">
          <div
            className="image"
            style={{ backgroundImage: "url(" + img + ")" }}
          ></div>
        </div>
        <div className="details">
          <h3 className="name">
            César <span>Casadiego</span>
          </h3>
          <p className="job">
            {language === "en" ? en["home.job"] : es["home.job"]}
          </p>
          <div className="social">
            <ul>
              {options.map((item, key) => (
                <li key={key}>
                  <a
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                    href={item.link}
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Home;
