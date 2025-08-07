'use client';

import { getRoomUrl } from '@/shared/utilities/navigation';
import { useRouter } from 'next/navigation';

export function useRoomNavigation() {
  const router = useRouter();

  function navigateToRoom(propertyId: number, roomId: number) {
    const url = getRoomUrl(propertyId, roomId);
    router.push(url);
  }

  return { navigateToRoom };
}
