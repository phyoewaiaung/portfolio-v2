import { motion } from "framer-motion";

const GradientText = ({ children, delay = 0 }) => (
    <motion.span
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 5, repeat: Infinity, delay }}
        style={{
            backgroundImage: "linear-gradient(90deg, #10b981, #14b8a6, #06b6d4, #14b8a6, #10b981)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
        }}
    >
        {children}
    </motion.span>
);

export default GradientText