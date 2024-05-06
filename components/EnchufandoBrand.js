import enchufandoBrand from "../public/img/brands/brand_enchufando.png";
import Image from "next/image";
import { useTheme } from "next-themes";
export default function EnchufandoBrand({ width, height }) {
  const { theme } = useTheme();
  return (
    <Image
      src={enchufandoBrand}
      width={width ? width : "216"}
      height={height ? height : "217"}
      className={"object-cover"}
      alt="Hero Illustration"
      loading="eager"
      placeholder="blur"
      //Cambiar por filter: invert(1) para el modo oscuro
      style={{ filter: "invert(1)" }}
    />
  );
}
