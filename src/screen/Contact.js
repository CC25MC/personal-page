import { motion } from "framer-motion";
import { useState } from "react";
import { en, es } from "../constans";
import { useLanguage, useVariants } from "../hooks";

const Contact = () => {
  const { language } = useLanguage();
  const { textEnter, textLeave } = useVariants();
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const handleChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.value,
    });
  };
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
      className="tokyo_tm_contact"
    >
      <div className="tokyo_tm_title">
        <div className="title_flex">
          <div className="left">
            <span>{language === "en" ? en["Contact"] : es["Contact"]}</span>
            <h3>
              {language === "en" ? en["Contact.title"] : es["Contact.title"]}
            </h3>
          </div>
        </div>
      </div>
      <div className="fields">
        <div className="first">
          <ul>
            <li>
              <input
                id="name"
                type="text"
                onChange={handleChange("name")}
                placeholder={
                  language === "en" ? en["Contact.name"] : es["Contact.name"]
                }
              />
            </li>
            <li>
              <input
                id="email"
                type="text"
                onChange={handleChange("email")}
                placeholder={
                  language === "en" ? en["Contact.email"] : es["Contact.email"]
                }
              />
            </li>
          </ul>
        </div>
        <div className="last">
          <textarea
            id="message"
            onChange={handleChange("message")}
            placeholder={
              language === "en" ? en["Contact.message"] : es["Contact.message"]
            }
          ></textarea>
        </div>
        <div
          className="tokyo_tm_button"
          onClick={() => console.log(values)}
          data-position="left"
        >
          <a
            id="send_message"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            href="##"
          >
            <span>
              {language === "en" ? en["Contact.button"] : es["Contact.button"]}
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
export default Contact;
