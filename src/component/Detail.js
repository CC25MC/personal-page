import { useState } from "react";
import { useVariants, useLanguage } from "../hooks";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { Modal } from "./Modal";
import { en, es } from "../constans";
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
export const Detail = ({ client = {} }) => {
  const { language } = useLanguage();
  const {
    image1,
    image2,
    image3,
    image4,
    portada,
    title,
    subTitle,
    detail,
    detail2,
    clients,
    category,
    date,
  } = client;
  const { textEnter, textLeave } = useVariants();
  const [open, setOpen] = useState(false);
  return (
    <li className="detail">
      <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="inner">
        <div className="popup_info" onClick={() => setOpen(true)}>
          <img
            src="https://marketifythemes.net/html/tokyo/img/thumbs/1-1.jpg"
            alt=""
          />
          <div
            className="main_image"
            style={{
              backgroundImage: "url(" + portada + ")",
            }}
          ></div>
        </div>
      </div>
      <Modal open={open} close={() => setOpen(false)}>
        <div className="details_all_wrap">
          <div className="top_image">
            <img
              src="https://marketifythemes.net/html/tokyo/img/thumbs/1-1.jpg"
              alt=""
            />
            <div
              className="main_image"
              style={{
                backgroundImage: "url(" + image1 + ")",
              }}
            ></div>
          </div>
          <div className="portfolio_main_title">
            <h3>{title}</h3>
            <span>{subTitle}</span>
          </div>
          <div className="main_details">
            <div className="textbox">
              <p>{detail}</p>
              <p>{detail2}</p>
            </div>
            <div className="detailbox">
              <ul>
                <li>
                  <span className="first">{language === "en" ? en["Portfolio.client"] : es["Portfolio.client"]}</span>
                  <span>{clients}</span>
                </li>
                <li>
                  <span className="first">{language === "en" ? en["Portfolio.category"] : es["Portfolio.category"]}</span>
                  <span>{category}</span>
                </li>
                <li>
                  <span className="first">{language === "en" ? en["Portfolio.date"] : es["Portfolio.date"]}</span>
                  <span>{date}</span>
                </li>
                <li>
                  <span className="first">{language === "en" ? en["Portfolio.share"] : es["Portfolio.share"]}</span>
                  <ul className="share">
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
                </li>
              </ul>
            </div>
          </div>
          <div className="additional_images">
            <ul>
              <li>
                <div className="list_inner">
                  <div className="my_image">
                    <img
                      src="https://marketifythemes.net/html/tokyo/img/thumbs/4-2.jpg"
                      alt=""
                    />
                    <div
                      className="main"
                      style={{
                        backgroundImage: "url(" + image2 + ")",
                      }}
                    ></div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="my_image">
                    <img
                      src="https://marketifythemes.net/html/tokyo/img/thumbs/4-2.jpg"
                      alt=""
                    />
                    <div
                      className="main"
                      style={{
                        backgroundImage: "url(" + image3 + ")",
                      }}
                    ></div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="my_image">
                    <img
                      src="https://marketifythemes.net/html/tokyo/img/thumbs/4-2.jpg"
                      alt=""
                    />
                    <div
                      className="main"
                      style={{
                        backgroundImage: "url(" + image4 + ")",
                      }}
                    ></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Modal>
    </li>
  );
};
