import {
  ChartBarSquareIcon,
  DevicePhoneMobileIcon,
  FaceSmileIcon,
  FlagIcon,
  SunIcon,
  TruckIcon,
} from "@heroicons/react/24/solid";

const benefitOne = {
  title: "Recargas al instante, al mejor precio.",
  image:
    "https://res.cloudinary.com/dj4h7zbih/image/upload/v1732035406/p00qxs6nscxdlxvq5eto.png",
  bullets: [
    {
      title: "Retiramos tus matafuegos en el mismo día",
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
    "https://res.cloudinary.com/dj4h7zbih/image/upload/v1732035333/a5b3vmwdbmtxpamlzifg.jpg",
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
      title: "Retiramos tus matafuegos en el mismo día",
      icon: <FlagIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
