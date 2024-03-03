import enchufandoBrand from "../public/img/brands/brand_enchufando.png";
import Image from "next/image";
import { useTheme } from "next-themes";
export default function EnchufandoBrand() {
  const { theme } = useTheme();
  return (
    <Image
      src={enchufandoBrand}
      width="216"
      height="217"
      className={"object-cover"}
      alt="Hero Illustration"
      loading="eager"
      placeholder="blur"
      style={theme === "light" && { filter: "invert(1)" }}
    />
  );
}
