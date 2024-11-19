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
  title: "Nuestros servicios mas populares",
  desc: "",
  image:
    "https://res.cloudinary.com/dj4h7zbih/image/upload/v1732041473/j8kqgyihy8ysmm3twr02.jpg",
  bullets: [
    {
      title: "Recarga de matafuegos",
      icon: <FaceSmileIcon />,
    },

    {
      title: "Reparación y venta de sifones",
      icon: <SunIcon />,
    },
    {
      title: "Venta de cartelería y señalización",
      icon: <FlagIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
