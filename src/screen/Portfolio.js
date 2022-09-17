import { motion } from "framer-motion";
import { Detail } from "../component/Detail";
import { en, es } from "../constans";
import { useLanguage } from "../hooks";

const Portfolio = () => {
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
      className="tokyo_tm_portfolio"
    >
      <div className="tokyo_tm_title">
        <div className="title_flex">
          <div className="left">
            <span>{language === "en" ? en["Portfolio"] : es["Portfolio"]}</span>
            <h3>
              {language === "en"
                ? en["Portfolio.title"]
                : es["Portfolio.title"]}
            </h3>
          </div>
        </div>
      </div>
      <div className="list_wrapper">
        <ul className="portfolio_list gallery_zoom">
          <Detail
            client={
              language === "en"
                ? en["Portfolio.client1"]
                : es["Portfolio.client1"]
            }
          />
          <Detail
            client={
              language === "en"
                ? en["Portfolio.client2"]
                : es["Portfolio.client2"]
            }
          />
        </ul>
      </div>
    </motion.div>
  );
};
export default Portfolio;
