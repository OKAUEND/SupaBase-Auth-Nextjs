'use client';

import { useRouter } from 'next/navigation';

interface IProps {
  path: string;
}

export const RouteButton = ({ path }: IProps) => {
  const router = useRouter();

  return (
    <button
      className="bg-green-700 rounded px-4 py-2 text-neutral-200 mb-6"
      onClick={() => router.push(path)}>
      Github Sign Up Now
    </button>
  );
};
