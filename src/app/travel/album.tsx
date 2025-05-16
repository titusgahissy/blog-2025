'use client'

import { cn } from "@/lib/utils";
import { MinusIcon, PlusIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
interface Props {
  album: string
  title: string;
  description: string;
  images: string;
}

export const Album = ({ images, album, title, description }: Props) => {
  const [open, setOpen] = useState(false)
  const imagesArray = images.split(",").map(num => num.padStart(2, '0'));

  const basePath = `/img/photography/${album}`;
  return (
    <div>
      <button className="cursor-pointer py-4 flex w-full justify-between items-center" onClick={() => setOpen(!open)}>
        <div className="flex flex-col gap-2 text-left">
          <h2 className="text-7xl font-heading">{title}</h2>
          <div className="text-2xl text-neutral-700">{description}</div>
        </div>
        <div>
          <PlusIcon className={cn("size-12", open ? "hidden" : "")} strokeWidth={1} />
          <MinusIcon className={cn("size-12", open ? "" : "hidden")} strokeWidth={1} />
        </div>
      </button>
      {open && (
        <div className="grid grid-cols-3 gap-1 ">
          {imagesArray.map((image) => (
            <div key={image} className="relative h-132">
              <Image src={`${basePath}/${image}.jpeg`}
                blurDataURL="data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovMndCREFBZ0dCZ2NHQlFnSEJ3Y0pDUWdLREJRTkRBc0xEQmtTRXc4VUhSb2ZIaDBhSEJ3Z0pDNG5JQ0lzSXh3Y0tEY3BMREF4TkRRMEh5YzVQVGd5UEM0ek5ETC8yd0JEQVFrSkNRd0xEQmdORFJneUlSd2hNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpML3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGZ0FCQVFFQUFBQUFBQUFBQUFBQUFBQUFCZ01ILzhRQUloQUFBZ0lDQWdFRkFRQUFBQUFBQUFBQUFRSURCQVVSQUNFU0JoTVVNVUhCLzhRQUZRRUJBUUFBQUFBQUFBQUFBQUFBQUFBQUFBTC94QUFaRVFBREFBTUFBQUFBQUFBQUFBQUFBQUFBQVJFQ0lUSC8yZ0FNQXdFQUFoRURFUUEvQU5KdFhNbEZqekxjaGZIMVl4dDVQa3B2ZjUzL0FEWGZJeGVzemtFclJZK3V0eVYxVVNsU3dDc1U4aHM2ME5nRTY0aEVVZCtrOWEzR2swRWkrTG82Z2dnOWNNNTJOYU9GdFdxbzltWlN6cXlIV2pvOWdmWDd3M3VsNHpoLy85az0nIC8+CiAgICA8L3N2Zz4KICA="
                placeholder="blur"
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center" />
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute bottom-0 left-0 bg-black text-white text-xs p-1.5">
                {image}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
