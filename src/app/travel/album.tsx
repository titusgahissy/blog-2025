'use client'

import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
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
  const [limit, setLimit] = useState(6)
  const imagesArray = images.split(",").map(num => num.padStart(2, '0'));

  const toggle = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    setOpen(!open)
  }

  const basePath = `/img/photography/${album}`;
  const loadMore = () => {
    setLimit(limit + 18)
  }

  return (
    <div>
      <button type="button" className={cn("cursor-pointer text-neutral-500 hover:text-black flex w-full justify-between items-center ease-linear transition-all duration-300", open ? "text-black" : "")} onClick={toggle}>
        <div className="flex flex-col md:gap-2 text-left">
          <h2 className="text-4xl md:text-7xl font-heading">{title}</h2>
        </div>
        <div className="-mt-2 md:-mt-5 text-muted-foreground">
          <PlusIcon className={cn("size-10 md:size-16", open ? "hidden" : "")} strokeWidth={0.6} />
          <MinusIcon className={cn("size-10 md:size-16", open ? "" : "hidden")} strokeWidth={0.6} />
        </div>
      </button>
      <div className="text-xl md:text-2xl text-neutral-700 pb-4 md:pb-6">{description}</div>
      {open && (
        <div className="pb-24 md:pb-32">
          <AnimatedGroup className="grid grid-cols-2 md:grid-cols-3 gap-1 " preset='slide'>
            {imagesArray.slice(0, limit).map((image) => (
              <div key={image} className="relative h-60 md:h-132">
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

          </AnimatedGroup>
          {limit < imagesArray.length && (
            <div className="flex items-center justify-center">
              <button
                onClick={loadMore}
                className="mt-8 col-span-full text-center text-2xl text-muted-foreground uppercase p-4 font-bold cursor-pointer hover:text-foreground transition-colors ease-linear duration-300" >
                Load next images in this album
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
