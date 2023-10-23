import React from "react";
import Image from "next/image";

const aboutUser = () => {
  // const imageLoader = ({src,width,quality}) => {
  //   return `https://img.freepik.com/free-photo/full-shot-astronaut-nature-collage_23-2150385898.jpg?size=626&ext=jpg&ga=GA1.1.231544207.1693670765`;
  // }
  return (
    <Image
      // loader={}
      className="mx-auto mt-4"
      style={{ width: "auto" }}
      src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
      alt="loading"
      width={900}
      height={900}
      sizes="(max-width: 768px) 100px, (max-width: 1200px) 700px, 900px"
      // fill
      priority={true}
    />
  );
};

export default aboutUser;
