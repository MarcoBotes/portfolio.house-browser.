import { Property, Room } from '@/shared/models/property.models';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ propertyId: number }> }
) {
    const { propertyId } = await params;
  
    const rooms: Array<Room> = [
    {
        id: 1,
        overlayGeometry: [
        [360, 341],
        [941, 341],
        [940, 581],
        [360, 580],
        ],
        title: "Balcony",
        description:
        "Step out onto the spacious private balcony — perfect for morning coffees, evening sunsets, or entertaining guests with panoramic views. The generous layout easily accommodates outdoor furniture, making it a versatile extension of the living space.",
        pictureUrls: [
        "/assets/832_2160.jpg",
        "/assets/860_2160.jpg",
        "/assets/856_2160.jpg",
        "/assets/863_2160.jpg",
        "/assets/855_2160.jpg",
        "/assets/861_2160.jpg",
        "/assets/841_2160.jpg",
        "/assets/831_2160.jpg",
        "/assets/846_2160.jpg",
        "/assets/826_2160.jpg",
        ],
    },
    {
        id: 2,
        overlayGeometry: [
        [978, 338],
        [1740, 340],
        [1742, 1702],
        [982, 1698],
        ],
        title: "Living Room",
        description:
        "A bright and airy living room designed with open-plan comfort in mind. Featuring full-length windows that bathe the space in natural light, this room is perfect for both relaxation and entertaining. Its generous proportions allow for multiple seating configurations.",
        pictureUrls: [
        "/assets/856_2160.jpg",
        "/assets/860_2160.jpg",
        "/assets/866_2160.jpg",
        "/assets/825_2160.jpg",
        "/assets/855_2160.jpg",
        "/assets/831_2160.jpg",
        "/assets/824_2160.jpg",
        "/assets/864_2160.jpg",
        "/assets/865_2160.jpg",
        "/assets/863_2160.jpg",
        ],
    },
    {
        id: 3,
        overlayGeometry: [
        [362, 640],
        [940, 644],
        [940, 1586],
        [362, 1584],
        ],
        title: "Bedroom",
        description:
        "Retreat to a tranquil and well-proportioned bedroom with ample natural light and room for a king-sized bed and additional furnishings. Perfect for quiet mornings or restful nights, this space invites comfort and calm.",
        pictureUrls: [
        "/assets/860_2160.jpg",
        "/assets/824_2160.jpg",
        "/assets/864_2160.jpg",
        "/assets/865_2160.jpg",
        "/assets/861_2160.jpg",
        "/assets/855_2160.jpg",
        "/assets/831_2160.jpg",
        "/assets/846_2160.jpg",
        "/assets/832_2160.jpg",
        "/assets/841_2160.jpg",
        "/assets/826_2160.jpg",
        "/assets/863_2160.jpg",
        "/assets/873_2160.jpg",
        "/assets/856_2160.jpg",
        "/assets/825_2160.jpg",
        ],
    },
    {
        id: 4,
        overlayGeometry: [
        [356, 1726],
        [942, 1724],
        [936, 1990],
        [728, 1988],
        [726, 2100],
        [360, 2102],
        ],
        title: "Bathroom",
        description:
        "A sleek and modern bathroom featuring elegant fixtures and a thoughtful layout. Whether it's a quick morning routine or a relaxing evening soak, this space is designed for comfort and style.",
        pictureUrls: [
        "/assets/856_2160.jpg",
        "/assets/825_2160.jpg",
        "/assets/864_2160.jpg",
        ],
    },
    {
        id: 5,
        overlayGeometry: [
        [980, 1724],
        [1254, 1724],
        [1254, 2098],
        [980, 2100],
        ],
        title: "Entrance",
        description:
        "Make a grand first impression with this thoughtfully designed entrance hall. With clean lines and room for storage or decor, it sets the tone for the rest of the home with style and functionality.",
        pictureUrls: [
        "/assets/865_2160.jpg",
        "/assets/863_2160.jpg",
        "/assets/846_2160.jpg",
        "/assets/824_2160.jpg",
        "/assets/873_2160.jpg",
        "/assets/861_2160.jpg",
        "/assets/856_2160.jpg",
        "/assets/855_2160.jpg",
        ],
    },
    {
        id: 6,
        overlayGeometry: [
        [1274, 1724],
        [1668, 1726],
        [1666, 1780],
        [1740, 1782],
        [1742, 2100],
        [1540, 2100],
        [1540, 2006],
        [1274, 2000],
        ],
        title: "Kitchen",
        description:
        "A modern, well-equipped kitchen that blends style with practicality. Generous counter space, contemporary finishes, and easy flow make this kitchen ideal for everything from weekday dinners to weekend hosting.",
        pictureUrls: [
        "/assets/846_2160.jpg",
        "/assets/825_2160.jpg",
        "/assets/863_2160.jpg",
        "/assets/832_2160.jpg",
        "/assets/866_2160.jpg",
        "/assets/853_2160.jpg",
        "/assets/855_2160.jpg",
        "/assets/873_2160.jpg",
        "/assets/831_2160.jpg",
        ],
    },
    ];


    const data: Property = {
        id: +propertyId,
        title: `Property ${propertyId}`,
        description: `Property ${propertyId} Description`,
        rooms,
    }

    console.debug(propertyId, data);

    return new NextResponse(JSON.stringify(data), {
        status: 200,
        headers: {
        'Content-Type': 'application/json',
        },
    });
}
