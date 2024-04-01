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
      title: "Contamos con gran variedad de productos en stock",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Hacemos envíos a todo el país",
      icon: <TruckIcon />,
    },

    {
      title: "Podes contactarnos fácilmente",
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
      icon: <FaceSmileIcon />,
    },

    {
      title: "Productos de alta calidad",
      icon: <SunIcon />,
    },
    {
      title: "Productos nacionales e importados",
      icon: <FlagIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
