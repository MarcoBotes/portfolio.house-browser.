// src/app/homes/[id]/page.tsx
import { FloorPlanComponent } from "@/shared/components/floorplan.component";
import { Home } from "@/shared/models/home.models";

interface Props {
  params: { id: string };
}

async function getHome(id: string): Promise<Home> {
  const res = await fetch(`http://localhost:3000/api/homes/${id}/data`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch home data');
  return res.json() as Promise<Home>;
}

export default async function HomePage({ params }: Props) {
  const { id } = params;
  const home = await getHome(id);

  return (
    <div className="flex flex-col gap-4">
      <FloorPlanComponent rooms={home.rooms} />
      <pre>{JSON.stringify(home, null, 2)}</pre>
    </div>
  );
}
