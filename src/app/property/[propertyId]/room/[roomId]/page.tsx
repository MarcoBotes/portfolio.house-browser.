'use client';

import { useProperty } from "@/contexts/room.context";
import { PageWrapper } from "@/shared/components/animations";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function RoomPage() {
  const { roomId } = useParams();
  const property = useProperty();

  const room = property.rooms.find(r => r.id === Number(roomId));

  const [transforms, setTransforms] = useState<string[]>([]);

  useEffect(() => {
    if (!room) return;

    const availableTransforms = [
      "md:rotate-[1.92deg] md:translate-x-[3.81px] md:translate-y-[-1.29px]",
      "md:rotate-[-0.87deg] md:translate-x-[-4.53px] md:translate-y-[2.44px]",
      "md:rotate-[2.45deg] md:translate-x-[-0.62px] md:translate-y-[-4.97px]",
      "md:rotate-[-2.99deg] md:translate-x-[1.75px] md:translate-y-[3.23px]",
      "md:rotate-[0.34deg] md:translate-x-[-3.45px] md:translate-y-[-0.99px]",
      "md:rotate-[-1.12deg] md:translate-x-[4.68px] md:translate-y-[-2.87px]",
      "md:rotate-[2.11deg] md:translate-x-[0.13px] md:translate-y-[1.88px]",
      "md:rotate-[-0.45deg] md:translate-x-[-1.02px] md:translate-y-[-4.22px]",
      "md:rotate-[3deg] md:translate-x-[2.99px] md:translate-y-[-3.67px]",
      "md:rotate-[-2.76deg] md:translate-x-[-4.55px] md:translate-y-[0.47px]",
    ];

    const shuffledTransforms = room.pictureUrls.map(() => {
      const randomIndex = Math.floor(Math.random() * availableTransforms.length);
      return availableTransforms[randomIndex];
    });

    setTransforms(shuffledTransforms);
  }, [room]);

  if (!room) return null;

  return <>

    <PageWrapper direction={true}>
      <div className="words flex flex-col gap-4">
        <h1 className="text-[clamp(1.2rem,2dvw,1.6rem)] font-bold border-b-1">{room?.title}</h1>
        <p className="text-[clamp(1rem,2dvw,1.4rem)]">{room?.description}</p>
      </div>
    </PageWrapper>

    <PageWrapper className={`md:col-span-2`} direction={false}>
      <div className="pictures grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap gap-4 mb-10">
        {room?.pictureUrls.map((pictureUrl, index) => {
          return (
            <Image
              key={index}
              src={pictureUrl}
              alt={`Room picture ${index + 1}`}
              loading="lazy"
              decoding="async"
              width={400}
              height={400}
              className={`
                md:w-30 md:h-30
                object-cover
                rounded-md shadow-sm
                transition-transform duration-300 ease-in-out
                md:hover:scale-300 md:hover:z-1 md:hover:rotate-0 md:hover:translate-x-0 md:hover:translate-y-0
                cursor-pointer
                ${transforms[index] ?? ""}
              `}
            />
          );
        })}
      </div>
    </PageWrapper>
    
  </>;
}
