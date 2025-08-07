'use client';

import { Property } from '@/shared/models/property.models';
import { createContext, useContext } from 'react';

const RoomContext = createContext<Property|null>(null);

export const useProperty = () => {
  const ctx = useContext(RoomContext);
  if (!ctx) throw new Error("useRooms must be used inside RoomProvider");
  return ctx;
};

export const RoomProvider = ({ property, children }: { property: Property; children: React.ReactNode }) => {
  return <RoomContext.Provider value={property}>{children}</RoomContext.Provider>;
};
