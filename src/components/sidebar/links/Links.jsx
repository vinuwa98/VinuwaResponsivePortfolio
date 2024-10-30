import { motion } from "framer-motion"; // Make sure to import motion
import { stagger } from "framer-motion"; // Keep this if you use it later

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "AboutUs"];

  return (
    <motion.div className="links" variants={variants} initial="closed" animate="open">
      {items.map((item) => (
        <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.4}} whileTap={{scale:0.95}}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;