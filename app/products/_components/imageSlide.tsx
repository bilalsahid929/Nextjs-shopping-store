import Image from "next/image";

const ImageSlide = ({
  url,
  size,
  classStyles = "",
}: {
  url: string;
  size: string;
  classStyles?: string;
}) => (
  <figure className={`relative w-full  rounded-lg ${size}`}>
    <Image
      src={url}
      alt={url}
      layout="fill"
      objectFit="contain"
      objectPosition="center center"
      className={`rounded-xl ${classStyles}`}
    />
  </figure>
);

export default ImageSlide;
