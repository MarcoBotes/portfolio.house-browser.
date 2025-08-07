import { ReactNode } from "react";
import { Property } from "@/shared/models/property.models";
import { FloorPlanComponent } from "./components/floorplan.component";
import { RoomProvider } from "@/contexts/room.context";

interface Props {
  children: ReactNode;
  params: Promise<{ propertyId: number }>;
}

async function fetchProperty(id: number): Promise<Property> {
  const res = await fetch(`http://localhost:3000/api/property/${id}/data`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch home data');
  return res.json();
}

export default async function PropertyLayout({ children, params }: Props) {
  const { propertyId } = await params;
  const property = await fetchProperty(propertyId);

  return (
    <>
    <div className="property">
      <h1 className="title">{property.title}</h1>
      <p className="description">{property.description}</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      <FloorPlanComponent
        className="w-full h-100 flex justify-center items-center md:ring-2 ring-slate-900"
        property={property}
      />
      
      <RoomProvider property={property}>
        {children}
      </RoomProvider>

    </div>
    </>
  );
}
