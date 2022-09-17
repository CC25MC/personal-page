import { useState } from "react";
import { Counter } from "../component/Counter";
import { Modal } from "../component/Modal";
import { ProgressBar } from "../component/ProgressBar";
import img from "../img/img.jpg";
import { en, es } from "../constans";
import { useVariants, useLanguage } from "../hooks";
import { motion } from "framer-motion";

const About = () => {
  const [open, setOpen] = useState(false);
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
      className="tokyo_tm_about"
    >
      <div className="about_image">
        <img
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          src="https://marketifythemes.net/html/tokyo/img/thumbs/4-2.jpg"
          alt=""
        />
        <div
          className="main"
          style={{ backgroundImage: "url(" + img + ")" }}
        ></div>
      </div>
      <div className="description">
        <h3 className="name">
          Cesar Casadiego &amp;{" "}
          <span>{language === "en" ? en["About.name"] : es["About.name"]}</span>
        </h3>
        <div className="description_inner">
          <div className="left">
            <p>
              {language === "en"
                ? en["About.description"]
                : es["About.description"]}
            </p>
            <div className="tokyo_tm_button" onClick={() => setOpen(true)}>
              <span onMouseEnter={textEnter} onMouseLeave={textLeave}>
                {" "}
                {language === "en" ? en["About.button"] : es["About.button"]}
              </span>
            </div>
          </div>
          <div className="right">
            <ul>
              <li>
                {language === "en" ? (
                  <>
                    <span>{en["About.birthday"]}:</span>
                    {en["About.birthday2"]}
                  </>
                ) : (
                  <>
                    <span>{es["About.birthday"]}:</span>
                    {es["About.birthday2"]}
                  </>
                )}
              </li>
              <li>
                {language === "en" ? (
                  <>
                    <span>{en["About.age"]}:</span>
                    {en["About.age2"]}
                  </>
                ) : (
                  <>
                    <span>{es["About.age"]}:</span>
                    {es["About.age2"]}
                  </>
                )}
              </li>
              <li>
                <span>
                  {language === "en"
                    ? en["About.address"]
                    : es["About.address"]}
                  :
                </span>
                <a
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  className="href_location"
                  href="https://goo.gl/maps/wEJDzYU4Ajid8N4V7"
                  target="_blank"
                  rel="noreferrer"
                >
                  {language === "en"
                    ? en["About.address2"]
                    : es["About.address2"]}
                </a>
              </li>
              <li>
                <span>
                  {language === "en" ? en["About.email"] : es["About.email"]}:
                </span>
                <a
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  href={"mailto:" + en["About.email3"]}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  {language === "en" ? en["About.email2"] : es["About.email2"]}
                </a>
              </li>
              <li>
                <span>Phone:</span>
                <a
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  href={en["About.phone2"]}
                >
                  {language === "en" ? en["About.phone"] : es["About.phone"]}
                </a>
              </li>
              <li>
                <span>
                  {" "}
                  {language === "en" ? en["About.study"] : es["About.study"]}:
                </span>
                <a
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  className="href_location"
                  href="https://uneg.edu.ve/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {language === "en" ? en["About.study2"] : es["About.study2"]}
                </a>
              </li>
              <li>
                <span>Freelance:</span>
                {language === "en"
                  ? en["About.freelance"]
                  : es["About.freelance"]}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Modal open={open} close={() => setOpen(false)}>
        <div className="description_wrap">
          <div className="my_box">
            <div className="left">
              <div className="about_title">
                <h3>
                  {" "}
                  {language === "en" ? en["About.skills"] : es["About.skills"]}
                </h3>
              </div>
              <ProgressBar title={en["About.skills.1"]} percentage={90} />
              <ProgressBar title={en["About.skills.2"]} percentage={80} />
              <ProgressBar title={en["About.skills.3"]} percentage={70} />
              <ProgressBar title={en["About.skills.4"]} percentage={90} />
            </div>
            <div className="right">
              <div className="about_title">
                <h3>
                  {" "}
                  {language === "en"
                    ? en["About.skills2"]
                    : es["About.skills2"]}
                </h3>
              </div>
              <ProgressBar
                title={
                  language === "en"
                    ? en["About.skills2.1"]
                    : es["About.skills2.1"]
                }
                percentage={80}
              />
              <ProgressBar
                title={
                  language === "en"
                    ? en["About.skills2.2"]
                    : es["About.skills2.2"]
                }
                percentage={70}
              />
              <ProgressBar
                title={
                  language === "en"
                    ? en["About.skills2.3"]
                    : es["About.skills2.3"]
                }
                percentage={90}
              />
              <ProgressBar
                title={
                  language === "en"
                    ? en["About.skills2.4"]
                    : es["About.skills2.4"]
                }
                percentage={80}
              />
            </div>
          </div>
          <div className="counter">
            <div className="about_title">
              <h3>Fun Facts</h3>
            </div>
            <Counter
              data={[
                {
                  title:
                    language === "en"
                      ? en["About.counter.title1"]
                      : es["About.counter.title1"],
                  number: "+20",
                },
                {
                  title:
                    language === "en"
                      ? en["About.counter.title2"]
                      : es["About.counter.title2"],
                  number: "+15",
                },
                {
                  title:
                    language === "en"
                      ? en["About.counter.title3"]
                      : es["About.counter.title3"],
                  number: "100k+",
                },
              ]}
            />
          </div>
        </div>
      </Modal>
    </motion.div>
  );
};
export default About;
