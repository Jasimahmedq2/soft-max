import Image from "next/image";
import React from "react";

const OfferCard = ({
  text,
  style,
  image,
  setCurrentImage,
  sentImage,
  setSelectComponent,
  offer,
}: {
  text: string;
  style: string;
  image: string | any;
  setCurrentImage: any;
  sentImage: string;
  setSelectComponent: any;
  offer: string;
}) => {
  const handleSelect = () => {
    setCurrentImage(sentImage);
    setSelectComponent(offer);
  };
  return (
    <div onClick={handleSelect} className={style}>
      <Image width={30} height={30} src={image} alt="checkmark" />
      <p className=" font-semibold">{text}</p>
    </div>
  );
};

export default OfferCard;
