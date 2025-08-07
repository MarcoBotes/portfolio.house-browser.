import { Shape } from "react-konva";
import { Room } from "../models/home.models";

export const RoomComponent: React.FC<Room> = ({ id, overlayGeometry }) => {
  return (
    <Shape
      sceneFunc={(context, shape) => {
        context.beginPath();

        if (overlayGeometry.length > 0) {
          const [start, ...rest] = overlayGeometry; // non-mutating
          context.moveTo(...start);
          rest.forEach(point => context.lineTo(...point));
        }

        context.closePath();
        context.fillStrokeShape(shape);
      }}
      fill="#00D2FF85"
      stroke="#00D163"
      strokeWidth={1}
    />
  );
};
