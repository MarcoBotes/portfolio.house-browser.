'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export const PageWrapper = ({ className, direction, children }: { className?: string, direction: boolean, children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}

        initial={{ y: `${direction ? '-' : ''}4rem`, opacity: 0}}
        animate={{ y: 0, opacity: 1}}
        exit={{ y: `${direction ? '' : '-'}4rem`, opacity: 0}}

        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className={`${className}`}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
