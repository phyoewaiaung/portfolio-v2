import { motion, useReducedMotion } from "framer-motion";

const RevealText = ({ text, delay = 0 }) => {
    const reduce = useReducedMotion();
    const words = text.split(" ");
    return (
        <>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={reduce ? false : { opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={reduce ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                        duration: 0.5,
                        delay: delay + i * 0.05,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    className="inline-block mr-[0.25em]"
                >
                    {word}
                </motion.span>
            ))}
        </>
    );
};

export default RevealText