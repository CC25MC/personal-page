import { motion } from "framer-motion";

export const ProgressBar = ({ title = "Hola", percentage = 50 }) => {
  return (
    <div className="progress_inner" data-value="95">
      <span>
        <span className="label">{title}</span>
        <span className="number">{percentage + "%"}</span>
      </span>
      <div className="background">
        <div className="bar open">
          <motion.div
            className="bar_in"
            initial={{ opacity: 0.5 }}
            animate={{
              opacity: 1,
              width: percentage + "%",
              transition: {
                duration: 2,
              },
            }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};
