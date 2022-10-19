import axios from "axios";
import { motion } from "framer-motion";
import { Notify } from "../component/Notify";
import { en, es } from "../constans";
import { useLanguage, useVariants, useForm } from "../hooks";

const Contact = () => {
  const { language } = useLanguage();
  const { textEnter, textLeave } = useVariants();
  const { name, email, message, handleChange, values, setValues } = useForm({
    name: "",
    email: "",
    message: "",
  });

  const {
    isLoading,
    data,
    setValues: setChange,
    values: getValues,
  } = useForm({ isLoading: false, error: false, data: "" });

  const sendMessage = async () => {
    if (name === "" || email === "" || message === "") {
      const elem = document.getElementById("empty_notice");
      elem.style.display = "inline";
      setTimeout(() => {
        elem.style.display = "none";
      }, 3000);
    } else {
      setChange({ ...getValues, isLoading: true });
      await axios
        .post(
          "https://api-send-email-node.herokuapp.com/api/send-email",
          values
        )
        .then((response) => {
          setChange({
            ...getValues,
            isLoading: false,
            data: response?.data?.msj,
          });
          setValues({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          setChange({
            ...getValues,
            isLoading: false,
            error: true,
            data: "Ocurrio un error al intentar enviar el correo electronico",
          });
        });
    }
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
      <div
        id="empty_notice"
        className="empty_notice"
        style={{ display: "none" }}
      >
        <span>
          {language === "en"
            ? en["Contact.empty_notice"]
            : es["Contact.empty_notice"]}
        </span>
      </div>
      <div className="fields">
        <div className="first">
          <ul>
            <li>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => handleChange(e)}
                placeholder={
                  language === "en" ? en["Contact.name"] : es["Contact.name"]
                }
              />
            </li>
            <li>
              <input
                id="email"
                name="email"
                type="text"
                value={email}
                onChange={(e) => handleChange(e)}
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
            name="message"
            value={message}
            onChange={(e) => handleChange(e)}
            placeholder={
              language === "en" ? en["Contact.message"] : es["Contact.message"]
            }
          ></textarea>
        </div>
        <div
          className="tokyo_tm_button"
          style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
        >
          <a
            id="send_message"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            onClick={sendMessage}
            href={"##"}
            rel="noreferrer"
          >
            <span>
              {isLoading
                ? "Loading..."
                : language === "en"
                ? en["Contact.button"]
                : es["Contact.button"]}
            </span>
          </a>
        </div>

        {data !== "" && (
          <Notify
            action={() => setChange({ ...getValues, error: false, data: "" })}
            msj={data}
          />
        )}
      </div>
    </motion.div>
  );
};
export default Contact;
