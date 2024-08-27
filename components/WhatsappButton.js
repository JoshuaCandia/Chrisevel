import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function WhatsappButton() {
  return (
    <FloatingWhatsApp
      phoneNumber="+5491131393596"
      accountName="Enchufando"
      avatar="https://res.cloudinary.com/djbeg0zrq/image/upload/v1723169725/logos/ksoswjkido8k6utacxtp.png"
      statusMessage="Respondiendo normalmente en unos minutos"
      chatMessage="¡Hola! ¿Cómo podemos ayudarte?"
      placeholder="Escribe un mensaje..."
      allowClickAway
      notification
      notificationSound
    />
  );
}
