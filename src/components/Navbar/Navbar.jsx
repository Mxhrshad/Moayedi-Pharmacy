import { motion } from "framer-motion";
import Container from "../Container/Container";

export default function Navbar() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="h-18 w-full border-b shadow items-center justify-center bg-primary flex border-b-gray-300"
        >
            <Container>
                <div className="flex items-center justify-between flex-row-reverse">
                    <ul className="flex flex-row-reverse space-x-reverse space-x-8">
                        <motion.li 
                            whileHover={{ scale: 1.1 }}
                            className="text-gray-100 cursor-pointer"
                        >خانه</motion.li>
                        <motion.li 
                            whileHover={{ scale: 1.1 }}
                            className="text-gray-100 cursor-pointer"
                        >درباره ما</motion.li>
                        <motion.li 
                            whileHover={{ scale: 1.1 }}
                            className="text-gray-100 cursor-pointer"
                        >ارتباط با ما</motion.li>
                        <motion.li 
                            whileHover={{ scale: 1.1 }}
                            className="text-gray-100 cursor-pointer"
                        >آدرس ما</motion.li>
                    </ul>
                </div>
            </Container>
        </motion.div>
    );
}