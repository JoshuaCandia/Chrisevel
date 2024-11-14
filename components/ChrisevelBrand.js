export default function ChrisevelBrand({ width, height }) {
  return (
    <img
      src="/chrisevelBlack.png"
      width={width ? width : "216"}
      height={height ? height : "217"}
      className="object-cover"
      alt="Hero Illustration"
      loading="eager"
      style={{ filter: "invert(1)" }}
    />
  );
}
