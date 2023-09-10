import type { NextPage } from "next";
import Image from "next/image";

export default function Images() {
  const images = [
    'https://placehold.co/480x300?font=roboto&text=Pic+1',
    'https://placehold.co/480x300?font=roboto&text=Pic+2',
    'https://placehold.co/480x300?font=roboto&text=Pic+3',
    'https://placehold.co/480x300?font=roboto&text=Pic+4',
  ]
  return (
    <section className="px-10 py-20">
      <div>
        {images.map((img, i) => (
          <Image src={img} fill={true} alt=""></Image>
        ))}
      </div>
    </section>
  );
};

