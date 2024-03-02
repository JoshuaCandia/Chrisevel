import enchufandoBrand from "../public/img/brands/brand_enchufando.png";
import Image from "next/image";

export default function EnchufandoBrand() {
  return (
    <Image
      src={enchufandoBrand}
      width="216"
      height="217"
      className={"object-cover"}
      alt="Hero Illustration"
      loading="eager"
      placeholder="blur"
    />
  );
}
