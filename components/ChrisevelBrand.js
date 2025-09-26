import Image from "next/image";
import { motion } from "framer-motion";

export default function ChrisevelBrand({ width, height }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      className="relative"
    >
      <Image
        src="/chrisevelBlack.png"
        width={width ? width : 216}
        height={height ? height : 217}
        className="object-cover"
        alt="Chrisevel Logo"
        priority
        quality={90}
        style={{ filter: "invert(1)" }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
