'use client';

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Shape } from "react-konva";

import { Room } from "@/shared/models/property.models";

export const RoomComponent: React.FC<Room & {scale: number}> = ({ id, overlayGeometry, scale }) => {
  const [hover, setHover] = useState(false);
  const params = useParams();
  const router = useRouter();
  const activeRoomid = +params.propertyId!;
  

  return (
    <Shape
      sceneFunc={(context, shape) => {
        context.beginPath();

        if (overlayGeometry.length > 0) {
          const scaledOverlayGeometry = overlayGeometry.map(([x, y]) => [x * scale, y * scale]) as [number, number][];
          const [start, ...rest] = scaledOverlayGeometry;
          context.moveTo(...start);
          rest.forEach(point => context.lineTo(...point));
        }

        context.closePath();
        context.fillStrokeShape(shape);
      }}
      fill={hover ? "#00d0ff55" : "#00d0ff17"}
      stroke={hover ? "#000000" : "#000000ff"}
      strokeWidth={hover ? 2 : 0}
      onClick={(e)=>router.push(`/property/${activeRoomid}/room/${id}`)}
      onTouchEnd={(e)=>router.push(`/property/${activeRoomid}/room/${id}`)}
      onMouseEnter={(e) => {
        setHover(true);
        e.target.getStage() ? e.target.getStage()!.container().style.cursor = "pointer" : undefined;
      }}

      onMouseLeave={(e) => {
        setHover(false);
        e.target.getStage() ? e.target.getStage()!.container().style.cursor = "default" : undefined;
      }}
    />
  );
};
