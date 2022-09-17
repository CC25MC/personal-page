import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { idiom, routeNav } from "../constans";
import { useVariants, useLanguage } from "../hooks";
import logo from "../img/dark.png";
import { Select } from "./Selec";
import { Sidebar } from "./Sidebar";

export const Nav = ({ children }) => {
  let location = useLocation();
  const { cursorVariant, textEnter, textLeave, variants } = useVariants();
  const { language, setLanguage } = useLanguage();

  return (
    <div>
      <div id="preloader">
        <div className="loader_line"></div>
      </div>

      <div
        className="tokyo_tm_all_wrap"
        data-magic-cursor="show"
        data-color="white"
        data-enter="rotateInDownLeft"
        data-exit="rotateOutDownLeft"
      >
        <div className="side">
          <Sidebar>
            <div className="menu_list">
              <ul className="transition_link">
                {routeNav.map((item, key) => (
                  <li
                    key={key}
                    className={
                      item === location?.pathname ? "active" : undefined
                    }
                  >
                    <Link
                      onMouseEnter={textEnter}
                      onMouseLeave={textLeave}
                      to={item}
                    >
                      {item === "/" ? "Home" : item.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
              <Select language={language} setLanguage={setLanguage} />
            </div>
          </Sidebar>
        </div>

        <div className="leftpart">
          <div className="leftpart_inner">
            <div className="logo">
              <a
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                href="https://github.com/CC25MC"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <img src={logo} alt="" />
              </a>
            </div>
            <div className="menu">
              <ul className="transition_link">
                {routeNav.map((item, key) => (
                  <li
                    key={key}
                    className={
                      item === location?.pathname ? "active" : undefined
                    }
                  >
                    <Link
                      onMouseEnter={textEnter}
                      onMouseLeave={textLeave}
                      to={item}
                    >
                      {item === "/"
                        ? idiom(language, "Home")
                        : idiom(language, item.slice(1))}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="copyright">
              <p>
                &copy; 2022 Created <br /> by{" "}
                <a
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  href="https://github.com/CC25MC"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  CC25MC
                </a>
              </p>
              <div onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <Select language={language} setLanguage={setLanguage} />
              </div>
            </div>
          </div>
        </div>
        <div className="rightpart">{children}</div>
      </div>

      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant[0]}
      />
      <motion.div
        className="cursor-outer"
        variants={variants}
        animate={cursorVariant[1]}
      />
    </div>
  );
};
