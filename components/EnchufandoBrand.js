import enchufandoBrand from "../public/img/brands/brand_enchufando.png";
export default function EnchufandoBrand({ width, height }) {
  return (
    <img
      src={enchufandoBrand.src}
      width={width ? width : "216"}
      height={height ? height : "217"}
      className="object-cover"
      alt="Hero Illustration"
      loading="eager"
      style={{ filter: "invert(1)" }}
    />
  );
}
