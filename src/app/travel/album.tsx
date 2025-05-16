import Image from "next/image";

interface Props {
  album: string
  title: string;
  description: string;
  images: string;
}

export const Album = ({ images, album, title, description }: Props) => {
  const imagesArray = images.split(",").map(num => num.padStart(2, '0'));

  const basePath = `/img/photography/${album}`;
  return (
    <div>


      <div className="pb-8">
        <h2 className="text-5xl font-medium tracking-tight">{title}</h2>
        <div className="pt-2 text-2xl text-neutral-700">{description}</div>
      </div>

      <div className="grid grid-cols-4 gap-4 ">
        {imagesArray.map((image) => (
          <div key={image} className="relative h-132">
            <Image src={`${basePath}/${image}.jpeg`} alt={title} fill className="object-cover object-center opacity-95" />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        ))}
      </div>
    </div>
  )
}