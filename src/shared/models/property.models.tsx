export interface Room {
    id: number
    title: string
    description: string
    pictureUrls: Array<string>

    overlayGeometry: Array<[number, number]>
}

export interface Property {
    id: number
    title: string
    description: string
    rooms: Array<Room>
}