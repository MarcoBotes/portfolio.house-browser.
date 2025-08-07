'use client';
import React, { useEffect, useRef, useState } from 'react';

import Konva from 'konva';
import { Stage, Layer, Group, Image,  } from 'react-konva';
import useImage from 'use-image';
import { Vector2d } from 'konva/lib/types';

import { RoomComponent } from './room-selector.component';
import { Property } from '@/shared/models/property.models';

export const FloorPlanComponent: React.FC<{property: Property, className: string}> = ({
    property,
    className
}) => {
    const navRef = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState({ width: 0, height: 0 });
    const [scale, setScale] = useState(1);
    const [offset, setOffset] = useState<Vector2d>({x:0,y:0});
    
    const [floorPlanImage] = useImage('/api/property/1/floor-plan');

    useEffect(() => {
        if (!navRef.current) return;

        const padding = 32;

        const updateSizeAndScale = () => {
            const container = navRef.current;
            if (!container || !container?.clientHeight) return;
            
            const canvasSize = {
                width: container.clientWidth - padding,
                height: container.clientHeight - padding,
            };
            setSize(canvasSize);

            if (floorPlanImage) {
                const widthScale = canvasSize.width / floorPlanImage.width;
                const heightScale = canvasSize.height / floorPlanImage.height;
                console.debug({
                    scale: Math.min(widthScale, heightScale)
                })
                const _scale = Math.min(widthScale, heightScale);
                setScale( _scale );

                setOffset({
                    x: canvasSize.width / 2 - floorPlanImage.width * _scale / 2,
                    y: canvasSize.height / 2 - floorPlanImage.height * _scale / 2,
                });
            }
        };

        const observer = new ResizeObserver(updateSizeAndScale);
        observer.observe(navRef.current);
        updateSizeAndScale();

        return () => observer.disconnect();
    }, [floorPlanImage]);

    const points: number[][] = [];
    const onClickHelper = (e: Konva.KonvaEventObject<MouseEvent>) => {
        // points.push([e.evt.layerX, e.evt.layerY]);
        // console.debug({
        //     e,
        //     points
        // });
    }

    return (
        <nav
            ref={navRef} 
            className={`navigation ${className}`}>
            <Stage
                width={size.width} height={size.height}
                onClick={onClickHelper}>

                <Layer>
                    <Group
                        x={offset.x}
                        y={offset.y}>
                            
                        <Image
                            alt="Floor plan for "
                            image={floorPlanImage ?? undefined}
                            scale={{x:scale,y:scale}}
                            />

                        <Group>

                            {property.rooms && property.rooms.map(
                                (room, propIndex) =>
                                    <RoomComponent
                                        key={room.id ?? propIndex}
                                        scale={scale}
                                        {...room} />
                            )}

                        </Group>

                    </Group>
                </Layer>

            </Stage>
        </nav>
    );
};
