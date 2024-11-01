// Parallax.jsx

import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
    const ref = useRef();

    // Use scrollYProgress instead of scrollProgress
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Transform values for y axis
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div 
            className="parallax"
            ref={ref}
            style={{
                background: 
                    type === "services"
                        ? "linear-gradient(180deg, #1c0327, #43075c)" 
                        : "linear-gradient(180deg, #43075c, #1c0327)"
            }}
        >
            <motion.h1 style={{ y: yText }}>
                {type === "services" ? "What I Do?" : "What I Did?"}
            </motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div style={{ y: yBg }} className="planets"></motion.div>
            <motion.div style={{ x: yBg }} className="stars"></motion.div>
        </div>
    );
};

export default Parallax;