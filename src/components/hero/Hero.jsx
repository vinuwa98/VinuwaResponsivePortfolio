import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1, // Staggers child animations
    },
  },

  scrollButton:{
    opacity:0,
    y:30,
    transition:{
      duration:2,
      repeat:Infinity,
    }
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-700%",
    transition: {
      repeat:Infinity,
      repeatType:"mirror",
      duration: 60,
    },
  },
};

const childVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
<<<<<<< Updated upstream
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Passionate Software Engineer</motion.h2>
          <motion.h1 variants={textVariants}>
            Software Engineer <br /> and <br /> Information Technology Tutor
          </motion.h1>
=======
        <div className="textContainer">
          <h2>Pasionate Software Engineer</h2>
          <h1>Software Engineer and <br/>Information Technology Tutor</h1>

          <div className="buttons">
            <button>See the latest Work</button>
            <button>Contact Me</button>
          </div>
            <img src="/scroll.png" alt="" />
        </div>
        </div>
        <div className="imageContainer">
          <img src="/hero.png" alt="" />
        </div>ssssss

    </div>
  )
}
>>>>>>> Stashed changes

          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>a
              See the latest Work
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div> 
          <motion.img variants={textVariants} animate= "scrollButton" src="/scroll.png" alt="scroll" />
        </motion.div>
      </div>

      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate" >
        Coder Gamer Guitarist ScieceLover Tutor
      </motion.div>

      <div className="imageContainer">
        <img src="/hero.png" alt="hero" />
      </div>

    </div>
  );
};

export default Hero;
