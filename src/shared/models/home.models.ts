export interface Room {
    id: number,
    overlayGeometry: Array<[number, number]>;
}

export interface Home {
    id: number,
    rooms: Array<Room>,
}