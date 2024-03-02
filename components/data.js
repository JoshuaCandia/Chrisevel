import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  DevicePhoneMobileIcon,
  TruckIcon,
  SunIcon,
  FlagIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/galpon1.jpeg";
import benefitTwoImg from "../public/img/galpon2.jpeg";

const benefitOne = {
  title: "Contamos con stock permanente",
  desc: "Podemos proveer a nuestros clientes con stock permanente de productos de alta calidad.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Hacemos envíos a todo el país",
      desc: " Contamos con un sistema de envíos a todo el país, con tiempos de entrega rápidos.",
      icon: <TruckIcon />,
    },
    {
      title: "Cada producto es revisado",
      desc: " Cada producto es revisado antes de ser enviado a nuestros clientes.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Podes contactarnos directamente",
      desc: "Estamos disponibles para atenderte en horarios accesibles.",
      icon: <DevicePhoneMobileIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Beneficios de trabajar con nosotros",
  desc: "",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Atención al cliente personalizada",
      desc: "Cada cliente es importante, y por eso ofrecemos atención personalizada.",
      icon: <FaceSmileIcon />,
    },

    {
      title: "Productos de alta calidad",
      desc: "Nuestros productos son de la más alta calidad.",
      icon: <SunIcon />,
    },
    {
      title: "Productos nacionales e importados",
      desc: " Contamos con productos nacionales e importados, para satisfacer todas las necesidades.",
      icon: <FlagIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
