import { motion } from "framer-motion";

const HighlightKeyword = ({ children }) => (
    <motion.span
        initial={{ backgroundSize: "0% 100%" }}
        whileInView={{ backgroundSize: "100% 100%" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative inline-block"
        style={{
            background: "linear-gradient(to right, rgba(16, 185, 129, 0.2), rgba(20, 184, 166, 0.2))",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
        }}
    >
        {children}
    </motion.span>
);

export default HighlightKeyword