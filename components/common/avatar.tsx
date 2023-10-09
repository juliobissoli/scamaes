import Image from "next/image";
import React from "react";

interface Props {
  text?: string;
  url?: string;
}

const Avatar: React.FC<Props> = ({ text, url }: Props) => {

    // const myLoader = ({ src, width, quality }) => {
    //     return `https://example.com/${src}?w=${width}&q=${quality || 75}`
    //   }

  return (
    <div className="w-full h-full rounded-full">
        <img src={url}  className="object-cover w-full h-full rounded-full" />
    </div>
  );
};

export default Avatar;
