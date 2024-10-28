import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar.jsx"; // Corrected import path
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar Component */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span 
          initial={{opacity:0, scale:0.5}} 
          animate={{opacity:1, scale:1}} 
          transition={{duration:0.5}}>
            Vinod Warnakulasooriya
        </motion.span>

        <div className="social">
          <a href="https://web.facebook.com/vinuwa.fb/"><img src="/facebook.png" alt="Facebook" /></a>
          <a href="#"><img src="/instagram.png" alt="Instagram" /></a>
          <a href="#"><img src="/youtube.png" alt="YouTube" /></a>
          <a href="#"><img src="/dribbble.png" alt="Dribbble" /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
