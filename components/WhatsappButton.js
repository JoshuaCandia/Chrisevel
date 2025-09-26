import React from "react";
import { motion } from "framer-motion";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function WhatsappButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        delay: 1,
        duration: 0.5,
        ease: "easeOut"
      }}
    >
      <FloatingWhatsApp
        phoneNumber="+5491164305706"
        accountName="Chrisevel"
        avatar="https://res.cloudinary.com/djbeg0zrq/image/upload/v1723169725/logos/ksoswjkido8k6utacxtp.png"
        statusMessage="Respondiendo normalmente en unos minutos"
        chatMessage="¡Hola! ¿Cómo podemos ayudarte?"
        placeholder="Escribe un mensaje..."
        allowClickAway
        notification
        notificationSound
        styles={{
          button: {
            backgroundColor: "#25D366",
            boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)"
          }
        }}
      />
    </motion.div>
  );
}
