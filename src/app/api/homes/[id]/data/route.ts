// app/api/homes/[id]/floor-plan/route.ts
import { Home, Room } from '@/shared/models/home.models';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  
  const rooms: Array<Room> = [
        {
            id: 1,
            overlayGeometry: [
                [78,75],
                [200,75],
                [200,125],
                [78,125],
            ]
        },
        {
            id: 2,
            overlayGeometry: [
                [210,75],
                [373,75],
                [373,365],
                [210,365],
            ]
        },
        {
            id: 3,
            overlayGeometry: [
                [77,137],
                [201,137],
                [201,339],
                [77,340],
            ]
        },
        {
            id: 4,
            overlayGeometry: [
                [77,369],
                [201,369],
                [201,451],
                [77,451],
            ]
        },
        {
            id: 5,
            overlayGeometry: [
                [209,369],
                [268,369],
                [268,450],
                [209,450],
            ]
        },
        {
            id: 6,
            overlayGeometry: [
                [272,369],
                [357,369],
                [357,382],
                [372,382],
                [373,450],
                [330,450],
                [330,429],
                [272,428],
            ]
        },
    ];

    const data: Home = {
        id: 1,
        rooms,
    }

    return new NextResponse(JSON.stringify(data), {
        status: 200,
        headers: {
        'Content-Type': 'application/json',
        },
    });
}
