import { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Occupation.module.scss";
import Box  from "@mui/material/Box";
import { ModeState } from "../../utils/GlobalState";

const items = [
  {
    id: 1,
    content: "Software Engineer"
  },
  {
    id: 2,
    content: "Back-End Developer"
  },
  {
    id: 3,
    content: "Front-End Developer"
  },
  {
    id: 4,
    content: "Freelancer"
  }
];

const Test01 = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <Box style={{ position: "relative" }}>
      <AnimatePresence>
        <motion.div
          key={items[index].id}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ ease: "easeInOut" }}
          style={{ position: "absolute" }}
        >
          {items[index].content}
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

const Occupations = () => {
  const { darkMode } = useContext(ModeState);
  return (
    <Box className={styles.container}>
        <div className={styles.text} style={{color: darkMode ? "white" : "black"}}>
            <Test01 />
        </div>
    </Box>
  );
};

export default Occupations;
