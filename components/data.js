import {
  ChartBarSquareIcon,
  DevicePhoneMobileIcon,
  FaceSmileIcon,
  FlagIcon,
  SunIcon,
  TruckIcon,
} from "@heroicons/react/24/solid";

const benefitOne = {
  title: "Contamos con stock permanente",
  image:
    "https://res.cloudinary.com/djbeg0zrq/image/upload/v1723169931/galpon/aege7z38vdijhw42brlz.jpg",
  bullets: [
    {
      title: "Hacemos envíos a todo el país",
      icon: <TruckIcon />,
    },

    {
      title: "Podes contactarnos fácilmente",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Contamos con gran variedad de productos en stock",
      icon: <ChartBarSquareIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Beneficios de trabajar con nosotros",
  desc: "",
  image:
    "https://res.cloudinary.com/djbeg0zrq/image/upload/v1723169933/galpon/bygkuaqltj3xnjzkbdrg.jpg",
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
