export default function Quality({ quality }) {
  const qualityCount = {
    good: 1,
    great: 3,
    best: 2,
  };

  const images = [];
  for (let i = 1; i <= qualityCount[quality]; i++) {
    images.push("/star.png");
  }
  console.log(quality);
  return (
    <>
      {images.map((imageSrc) => (
        <img src={imageSrc} />
      ))}
    </>
  );
}
