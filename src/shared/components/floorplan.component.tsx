'use client';
import React, { useEffect, useState } from 'react';

import Konva from 'konva';
import { Stage, Layer, Group, Image,  } from 'react-konva';
import useImage from 'use-image';

import { RoomComponent } from './room-selector.component';
import { Room } from '../models/home.models';

const MAX_DIMENTION = 600;

export const FloorPlanComponent: React.FC<{rooms: Room[]}> = ({
    rooms
}) => {
    const [floorPlanImage] = useImage('/api/homes/1/floor-plan');
    const [scale, setScale] = useState(1);

    useEffect(() => {
        if (floorPlanImage) {
            const biggestDimension = Math.max(floorPlanImage.width, floorPlanImage.height);
            setScale(MAX_DIMENTION / biggestDimension);
        }
    }, [floorPlanImage]);

    const points: number[][] = [];
    const onClickHelper = (e: Konva.KonvaEventObject<MouseEvent>) => {
        points.push([e.evt.layerX, e.evt.layerY]);
        console.log(points);
    }

    return (
        <nav className="navigation p-4 bg-slate-900 rounded-xl w-auto">
            <Stage
                key={rooms.length}
                width={MAX_DIMENTION}
                height={MAX_DIMENTION}
                onClick={onClickHelper}>

                <Layer>
                    <Group>
                            
                        <Image
                            image={floorPlanImage ?? undefined}
                            scale={{x:scale,y:scale}}
                            />

                        <Group>

                            {rooms && rooms.map(
                                (room, propIndex) =>
                                    <RoomComponent
                                        key={room.id ?? propIndex}
                                        {...room} />
                            )}

                        </Group>

                    </Group>
                </Layer>

            </Stage>
        </nav>
    );
};
